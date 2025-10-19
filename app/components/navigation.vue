<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Docs",
    to: "/docs/getting-started",
    icon: "i-lucide-book-open",
    active: route.path.startsWith("/docs/getting-started"),
  },
  {
    label: "Components",
    to: "/docs/components",
    icon: "i-lucide-box",
    active: route.path.startsWith("/docs/components"),
  },
  {
    label: "Figma",
    icon: "i-simple-icons-figma",
    to: "https://go.nuxt.com/figma-ui",
    target: "_blank",
  },
  {
    label: "Releases",
    icon: "i-lucide-rocket",
    to: "https://github.com/nuxt/ui/releases",
    target: "_blank",
  },
]);
</script>

<template>
  <UHeader toggle-side="right" mode="drawer">
    <template #title>
      <div class="hidden md:flex item-center gap-3">
        <div
          class="w-3 h-3 bg-red-500 hover:bg-red-600 rounded-full cursor-pointer"></div>
        <div
          class="w-3 h-3 bg-yellow-500 hover:bg-yellow-600 rounded-full cursor-pointer"></div>
        <div
          class="w-3 h-3 bg-green-500 hover:bg-green-600 rounded-full cursor-pointer"></div>
      </div>

      <div
        class="flex md:hidden justify-center items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-400/20 rounded-xl border border-gray-200 dark:border-gray-700/20 max-w-xl w-full">
        <Icon name="i-simple-icons-github" />
        <span
          class="text-sm capitalize text-gray-700 dark:text-gray-300 truncate">
          Mahesa Adi Kusuma Portofolio
        </span>
      </div>
    </template>

    <!-- Navigation -->
    <!-- <UNavigationMenu :items="items" /> -->
    <div
      class="md:flex hidden justify-center items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-400/20 rounded-xl border border-gray-200 dark:border-gray-700/20 max-w-xl w-full">
      <Icon name="i-simple-icons-github" />
      <span
        class="text-sm capitalize text-gray-700 dark:text-gray-300 truncate">
        Mahesa Adi Kusuma Portofolio
      </span>
    </div>

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/Mahesaadikusuma"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub" />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
