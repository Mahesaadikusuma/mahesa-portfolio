<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const isScrolled = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  onUnmounted(() => window.removeEventListener("scroll", handleScroll));
});

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: `/`,
    icon: "i-heroicons-home",
    active: route.path === "/",
  },
  {
    label: "About",
    to: "/#about",
    icon: "i-heroicons-user",
    active: false,
  },
  {
    label: "Projects",
    icon: "i-heroicons-rocket-launch",
    to: "/#projects",
    active: false,
  },
]);
</script>

<template>
  <UHeader
    toggle-side="right"
    mode="drawer"
    :class="[
      'transition-all duration-300',
      isScrolled
        ? 'backdrop-blur-xl bg-white/80 dark:bg-[#0b1120]/80 border-b border-gray-200/70 dark:border-gray-800/70 shadow-sm shadow-gray-100/50 dark:shadow-black/20'
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <template #title>
      <div class="flex items-center gap-3">
        <!-- macOS Window Dots -->
        <div class="hidden sm:flex items-center gap-1.5">
          <AtomsWindowIndicators />
        </div>

        <!-- Brand Bar -->
        <div class="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 max-w-sm w-full">
          <UIcon name="i-simple-icons-github" class="text-gray-500 dark:text-gray-400 w-4 h-4 shrink-0" />
          <span class="text-sm text-gray-600 dark:text-gray-300 truncate font-medium">
            Mahesa Adi Kusuma Portofolio
          </span>
        </div>
      </div>
    </template>

    <!-- Center Navigation Links -->
    <UNavigationMenu :items="items" />

    <template #right>
      <!-- Dark Mode Toggle -->
      <UColorModeButton />

      <!-- GitHub Link -->
      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/Mahesaadikusuma"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <!-- Mobile Drawer -->
    <template #body>
      <div class="flex flex-col gap-4 py-4">
        <!-- Brand in Drawer -->
        <div class="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
          <UIcon name="i-simple-icons-github" class="text-gray-500 dark:text-gray-400 w-4 h-4 shrink-0" />
          <span class="text-sm font-medium text-gray-600 dark:text-gray-300">mahesa-portofolio</span>
        </div>

        <UDivider class="opacity-50" />

        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5 cursor-pointer"
        />
      </div>
    </template>
  </UHeader>
</template>

