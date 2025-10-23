<script setup lang="ts">
const { start, set } = useLoadingIndicator();
// same as set(0, { force: true })
// set the progress to 0, and show loading immediately
start({ force: true });
</script>

<template>
  <NuxtLoadingIndicator />
  <UApp>
    <Navigation />
    <NuxtPage />
  </UApp>
</template>
