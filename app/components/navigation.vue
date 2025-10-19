<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    icon: "mdi:home",
    active: route.path.startsWith("/"),
  },
  {
    label: "About",
    to: "#about",
    icon: "mdi:account-box",
  },
  {
    label: "Projects",
    icon: "i-lucide-rocket",
    to: "#projects",
  },
]);
</script>

<template>
  <UHeader toggle-side="right" mode="drawer">
    <template #title>
      <div class="flex items-center gap-2">
        <div class="hidden md:flex item-center gap-3">
          <WindowIndicators />
        </div>

        <div
          class="flex justify-center items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-400/20 rounded-xl border border-gray-200 dark:border-gray-700/20 max-w-xl w-full">
          <Icon name="i-simple-icons-github" />
          <span
            class="text-sm capitalize text-gray-700 dark:text-gray-300 truncate">
            Mahesa Adi Kusuma Portofolio
          </span>
        </div>
      </div>
    </template>

    <!-- Navigation -->
    <UNavigationMenu :items="items" />

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
