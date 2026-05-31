<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <Icon :name="name" class="size-7 my-2 hover:text-primary transition-colors cursor-pointer" />
</template>
