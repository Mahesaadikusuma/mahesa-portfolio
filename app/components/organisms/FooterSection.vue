<script setup lang="ts">
const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "GitHub",
    icon: "i-simple-icons-github",
    href: "https://github.com/Mahesaadikusuma",
    label: "GitHub Profile",
  },
  {
    name: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    href: "https://linkedin.com/in/mahesa-adi-kusuma",
    label: "LinkedIn Profile",
  },
  // {
  //   name: "Instagram",
  //   icon: "i-simple-icons-instagram",
  //   href: "https://instagram.com/mahesaadikusuma",
  //   label: "Instagram Profile",
  // },
  {
    name: "Email",
    icon: "i-heroicons-envelope",
    href: "mailto:mahesaadikusuma@gmail.com",
    label: "Send Email",
  },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#projects" },
];
</script>

<template>
  <footer class="relative w-full border-t border-gray-200 dark:border-white/10 bg-white/60 dark:bg-[#0b1120]/80 backdrop-blur-xl overflow-hidden">

    <!-- Subtle top glow -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      aria-hidden="true"
    ></div>

    <!-- Background ambient glow -->
    <div
      class="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
      aria-hidden="true"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

      <!-- Top Row -->
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">

        <!-- Brand -->
        <div class="flex flex-col items-center md:items-start gap-3 max-w-sm" v-motion-fade>
          <div class="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 w-fit">
            <UIcon name="i-simple-icons-github" class="text-gray-500 dark:text-gray-400 w-4 h-4 shrink-0" />
            <span class="text-sm text-gray-600 dark:text-gray-300 font-medium">Mahesa Adi Kusuma</span>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left leading-relaxed">
            Fresh Graduate — Front-End & Full-Stack Web Developer.<br />
            Building elegant and performant digital experiences.
          </p>
        </div>

        <!-- Nav Links -->
        <div class="flex flex-col items-center md:items-start gap-2" v-motion-slide-visible-bottom :delay="100">
          <span class="text-xs font-semibold tracking-widest uppercase text-primary mb-1">Navigation</span>
          <NuxtLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Social Links -->
        <div class="flex flex-col items-center md:items-start gap-3" v-motion-slide-visible-bottom :delay="200">
          <span class="text-xs font-semibold tracking-widest uppercase text-primary mb-1">Connect</span>
          <div class="flex items-center gap-2">
            <UTooltip
              v-for="social in socialLinks"
              :key="social.name"
              :text="social.label"
            >
              <UButton
                :to="social.href"
                target="_blank"
                :icon="social.icon"
                :aria-label="social.label"
                color="neutral"
                variant="ghost"
                size="sm"
                class="hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
              />
            </UTooltip>
          </div>
        </div>

      </div>

      <!-- Divider -->
      <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-8" />

      <!-- Bottom Row -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 dark:text-gray-500">
        <p>
          &copy; {{ currentYear }}
          <span class="text-gray-600 dark:text-gray-400 font-medium">Mahesa Adi Kusuma</span>.
          All rights reserved.
        </p>
        <div class="flex items-center gap-1.5">
          <span>Built with</span>
          <UIcon name="i-vscode-icons-file-type-nuxt" class="w-3.5 h-3.5" />
          <span class="text-gray-600 dark:text-gray-400 font-medium">Nuxt.js</span>
          <span>&amp;</span>
          <UIcon name="i-vscode-icons-file-type-tailwind" class="w-3.5 h-3.5" />
          <span class="text-gray-600 dark:text-gray-400 font-medium">Tailwind CSS</span>
        </div>
      </div>

    </div>
  </footer>
</template>
