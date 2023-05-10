<script lang="ts" setup>
const {params} = useRoute();
</script>

<template>
  <main>
    <section class="header container py-12 sm:py-24">
      <!-- Post Title    -->
      <div class="post-title text-center mb-5">
        <h1 class="text-3xl sm:text-5xl font-bold">
          How to create your own Heroku alternative on DigitalOcean.
        </h1>
      </div>
      <!-- Post Meta     -->
      <div class="post-meta text-center mb-10">
        <span class="mr-3">Written By Elon Musk</span>
        <span>Published on by 1402/02/20</span>
      </div>
      <!-- Post Image    -->
      <div class="w-full h-[250px] sm:h-[400px] relative shadow-xl rounded overflow-hidden mb-10">
        <img
            src="~/assets/img/42565948.jpg"
            alt="Blog Thumb"
            class="absolute w-full h-full object-cover"
        >
      </div>
      <!-- Post Content  -->
      <div class="post-content">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit Lorem ipsum dolor
        sit amet, consectetur adipiscing elit ...
      </div>
    </section>
  </main>
</template>