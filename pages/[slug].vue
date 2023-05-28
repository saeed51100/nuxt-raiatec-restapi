<script lang="ts" setup>
const params = useRoute().params;

const { data: posts } = await useWpApi().getPost(params.slug as string);
const post = posts.value?.[0];

useHead({
  title: post?.title.rendered,
  meta: [
    {
      name: "description",
      content: `${post?.excerpt.rendered}`,
    },
  ],
});
</script>
<template>
  <section class="container blog py-10 sm:py-16">
    <div v-if="post" class="sm:px-20">
      <!-- Blog Title  -->
      <h1
          class="blog__title text-3xl sm:text-5xl font-bold text-center leading-snug mb-5"
      >
        {{ post.title.rendered }}
      </h1>
      <!-- Blog Meta  -->
      <div class="flex mb-10 justify-center gap-5">
        <span
        >Written by:
          <span class="text-primary-500">{{
              post._embedded["author"][0]?.name
            }}</span></span
        >

        <span
        >Published on:
          <span class="text-primary-500">{{ post.date }}</span></span
        >
      </div>
      <!-- Blog Image  -->
      <div
          class="blog__image h-[250px] sm:h-[500px] w-full rounded shadow-xl relative overflow-hidden mb-12"
      >
        <img
            :src="post._embedded['wp:featuredmedia'][0]?.source_url"
            :alt="post.title.rendered"
            class="absolute w-full h-full object-cover"
        />
      </div>
      <div class="blog__content">
        <div v-if="post.content" v-html="post.content.rendered"></div>
      </div>
    </div>
  </section>
</template>