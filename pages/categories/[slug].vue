<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <h1>Example Of Dynamic Route: {{ route.params.slug }} </h1>
</template>