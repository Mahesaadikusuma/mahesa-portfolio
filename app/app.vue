<script setup lang="ts">
const toaster = { position: 'top-right' as const }
</script>

<template>
  <NuxtLoadingIndicator />
  <UApp :toaster="toaster">
    <OrganismsNavigation />
    <NuxtPage />
  </UApp>
</template>
