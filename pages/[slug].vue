<script lang="ts" setup>
const {params} = useRoute();
const {data: posts} = await useWpApi().getPost<any>(params.slug as string);
const post = posts.value[0];
</script>

<template>
  <main>
    <section class="header container py-12 sm:py-24">
      <!-- Post Title    -->
      <div class="post-title text-center mb-5">
        <h1 class="text-3xl sm:text-5xl font-bold">
          {{ post.title.rendered }}
        </h1>
      </div>
      <!-- Post Meta     -->
      <div class="post-meta text-center mb-10">
        <span>Published: {{ post.date }}</span>
      </div>
      <!-- Post Image    -->

      <!-- Post Content  -->
      <div class="blog__content">
        <div v-if="post.content" v-html="post.content.rendered"></div>
      </div>
    </section>
  </main>
</template>
