<script setup lang="ts">
import { ref } from 'vue';
import { HeroCenteredStack } from '../molecules/hero';
import type { Tab } from '~/Tabs';



const tabs: Tab[] = [
  { id: 'ts', name: 'mahesa.ts', icon: 'i-vscode-icons-file-type-typescript-official' },
  { id: 'php', name: 'Developer.php', icon: 'i-vscode-icons-file-type-php' },
  { id: 'json', name: 'developer.json', icon: 'i-vscode-icons-file-type-json' }
];

const currentTab = ref('ts');
</script>

<template>
  <section class="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden  pb-24">

    <!-- Background Grid -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 dark:opacity-30 pointer-events-none" aria-hidden="true"></div>
    
    <!-- ini dibalik layarjika tidak gunakan v-model -->
    <!-- <HeroCenteredStack 
      :active-tab="currentTab"
      @update:active-tab="(val) => currentTab = val"
      :tabs="tabs"
    /> -->

    <HeroCenteredStack 
      v-model:active-tab="currentTab"
      description=""
      :tabs="tabs"
    />

    <!-- Scroll Hint -->
    <div v-motion-fade :delay="600" class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-600">
      <span class="text-[10px] tracking-[0.25em] uppercase font-mono">scroll</span>
      <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 animate-bounce" />
    </div>

  </section>
</template>
