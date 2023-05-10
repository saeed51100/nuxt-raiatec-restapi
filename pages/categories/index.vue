<script lang="ts" setup></script>
<template>
  <PageHeader title="Category Index"/>
  <section class="py-10 container">
    <div class="flex flex-wrap gap-5">
      <NuxtLink
          v-for="i in 33"
          :key="i"
          to="/categories/1234"
          class="block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400">
        #CategoryName{{ i }}
      </NuxtLink>
    </div>
  </section>
</template>