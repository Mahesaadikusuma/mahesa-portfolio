<script setup lang="ts">
const roles = ["Front-End Developer.", "Back-End Developer.", "Full Stack Developer."];
const displayText = ref("");
const isDeleting = ref(false);
const roleIndex = ref(0);
const charIndex = ref(0);

onMounted(() => {
  const type = () => {
    const current = roles[roleIndex.value];
    if (!isDeleting.value) {
      displayText.value = current.slice(0, charIndex.value + 1);
      charIndex.value++;
      if (charIndex.value === current.length) {
        setTimeout(() => { isDeleting.value = true; }, 2000);
      }
    } else {
      displayText.value = current.slice(0, charIndex.value - 1);
      charIndex.value--;
      if (charIndex.value === 0) {
        isDeleting.value = false;
        roleIndex.value = (roleIndex.value + 1) % roles.length;
      }
    }
    setTimeout(type, isDeleting.value ? 50 : 80);
  };
  setTimeout(type, 600);
});
</script>

<template>
  <section class="relative min-h-screen w-full flex items-center overflow-hidden">

    <!-- Subtle grid bg -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 dark:opacity-30 pointer-events-none" aria-hidden="true"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> 
      <!-- Left: Typography -->
      <div class="flex flex-col gap-7">

        <div v-motion-slide-bottom :delay="0" class="inline-flex items-center gap-2 w-fit">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span class="text-sm text-gray-500 dark:text-gray-400 font-mono">Available for work</span>
        </div>

        <div v-motion-slide-bottom :delay="80">
          <p class="font-mono text-primary text-lg mb-2 tracking-wide">Hi there, I am</p>
          <h1 class="font-poppins font-black text-gray-900 dark:text-white leading-none tracking-tight">
            <span class="block text-6xl sm:text-7xl xl:text-8xl">Mahesa</span>
            <span class="block text-6xl sm:text-7xl xl:text-8xl">Adi</span>
            <span class="block text-6xl sm:text-7xl xl:text-8xl text-primary">Kusuma.</span>
          </h1>
        </div>

        <div v-motion-slide-bottom :delay="180" class="flex items-center gap-3">
          <div class="h-px w-8 bg-primary"></div>
          <p class="font-mono text-gray-600 dark:text-gray-400 text-base min-h-[1.5em]">
            {{ displayText }}<span class="text-primary animate-pulse">_</span>
          </p>
        </div>

        <p v-motion-fade :delay="280" class="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
          Crafting clean, performant, and visually stunning web experiences. Passionate about building things that live on the internet.
        </p>

        <div v-motion-slide-bottom :delay="360" class="flex items-center gap-4 flex-wrap">
          <UButton
            to="/#projects"
            size="lg"
            color="primary"
            variant="solid"
            class="px-7 font-semibold"
            trailing-icon="i-heroicons-arrow-right-20-solid"
          >
            See My Work
          </UButton>
          <UButton
            to="https://github.com/Mahesaadikusuma"
            target="_blank"
            size="lg"
            color="neutral"
            variant="ghost"
            icon="i-simple-icons-github"
            class="font-semibold"
          >
            GitHub
          </UButton>
        </div>

      </div>

      <!-- Right: Terminal Card -->
      <div v-motion-slide-visible-bottom :delay="200" class="hidden lg:block">
        <div class="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-black/40 font-mono text-sm">

          <!-- Terminal Topbar -->
          <div class="flex items-center gap-2 px-5 py-3.5 bg-gray-100 dark:bg-[#0f172a] border-b border-gray-200 dark:border-gray-800">
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-400"></div>
            <span class="ml-3 text-xs text-gray-500 dark:text-gray-500">mahesa.ts</span>
          </div>

          <!-- Code Body -->
          <div class="bg-white dark:bg-[#0b1120] px-6 py-6 text-sm leading-7">
            <p><span class="text-violet-500 dark:text-violet-400">const</span> <span class="text-blue-600 dark:text-blue-400">developer</span> <span class="text-gray-600 dark:text-gray-300">=</span> <span class="text-gray-600 dark:text-gray-300">{</span></p>
            <p class="pl-6"><span class="text-green-600 dark:text-emerald-400">name</span><span class="text-gray-600 dark:text-gray-300">:</span> <span class="text-amber-600 dark:text-yellow-300">"Mahesa Adi Kusuma"</span><span class="text-gray-600 dark:text-gray-300">,</span></p>
            <p class="pl-6"><span class="text-green-600 dark:text-emerald-400">role</span><span class="text-gray-600 dark:text-gray-300">:</span> <span class="text-amber-600 dark:text-yellow-300">"Full Stack Developer"</span><span class="text-gray-600 dark:text-gray-300">,</span></p>
            <p class="pl-6"><span class="text-green-600 dark:text-emerald-400">location</span><span class="text-gray-600 dark:text-gray-300">:</span> <span class="text-amber-600 dark:text-yellow-300">"Jakarta, Indonesia 🇮🇩"</span><span class="text-gray-600 dark:text-gray-300">,</span></p>
            <p class="pl-6"><span class="text-green-600 dark:text-emerald-400">skills</span><span class="text-gray-600 dark:text-gray-300">: [</span></p>
            <p class="pl-12"><span class="text-amber-600 dark:text-yellow-300">"Vue"</span><span class="text-gray-600 dark:text-gray-300">,</span> <span class="text-amber-600 dark:text-yellow-300">"Nuxt"</span><span class="text-gray-600 dark:text-gray-300">,</span> <span class="text-amber-600 dark:text-yellow-300">"Laravel"</span><span class="text-gray-600 dark:text-gray-300">,</span></p>
            <p class="pl-12"><span class="text-amber-600 dark:text-yellow-300">"TypeScript"</span><span class="text-gray-600 dark:text-gray-300">,</span> <span class="text-amber-600 dark:text-yellow-300">"Tailwind"</span></p>
            <p class="pl-6"><span class="text-gray-600 dark:text-gray-300">],</span></p>
            <p class="pl-6"><span class="text-green-600 dark:text-emerald-400">available</span><span class="text-gray-600 dark:text-gray-300">:</span> <span class="text-orange-600 dark:text-orange-400">true</span><span class="text-gray-600 dark:text-gray-300">,</span></p>
            <p><span class="text-gray-600 dark:text-gray-300">}</span></p>
            <p class="mt-2 text-gray-400 dark:text-gray-600"><span class="text-primary">// </span><span>Let's build something great! 🚀</span></p>
          </div>
        </div>
      </div>

    </div>

    <!-- Scroll Hint -->
    <div v-motion-fade :delay="600" class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-600">
      <span class="text-[10px] tracking-[0.25em] uppercase font-mono">scroll</span>
      <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 animate-bounce" />
    </div>

  </section>
</template>




