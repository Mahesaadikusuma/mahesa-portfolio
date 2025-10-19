<script setup lang="ts">
const props = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div
    class="flex items-center justify-between gap-3 px-4 py-2 border-b border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-neutral-800">
    <span>{{ title }}</span>
    <div class="flex items-center gap-3 px-4">
      <WindowIndicators />
    </div>
  </div>
</template>
