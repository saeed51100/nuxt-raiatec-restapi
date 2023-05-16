<script lang="ts" setup>
defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
}>();
</script>

<template>
  <div class="col">
    <div class="card shadow-sm">

      <div
          v-if="image"
          class="grid__image h-[180px] w-full relative overflow-hidden"
      >
        <img width="100%"
             height="160"
             :src="image"
             :alt="title"
             class="absolute object-cover w-full h-full group-hover:scale-110 duration-300"
        />
      </div>
      <div class="card-body">
        <div class="rt_title_lines">
          {{ title }}
        </div>

        <div class="rt_excerpt_lines" style="color: #6e6f75; font-size: 14px">
          <p
              v-if="excerpt"
              class="grid__content-excerpt mb-2 text-sm text-clip overflow-hidden ..."
          >
            {{ excerpt }}
          </p>
        </div>


        <NuxtLink
            style="color: #17dc17"
            v-if="slug"
            class="blog__readmore border-b-2 border-primary-500 inline-flex items-center"
            :to="`/${slug}`"
        >ادامه مطلب...

        </NuxtLink>
      </div>

    </div>
  </div>
</template>