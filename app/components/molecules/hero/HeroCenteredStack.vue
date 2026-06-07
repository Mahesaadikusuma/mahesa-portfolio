<script setup lang="ts">
export interface Tab {
  id: string;
  name: string;
  icon: string;
}

// 1. Tambahkan activeTab ke dalam props
const props = withDefaults(defineProps<{
  activeTab: string; // <-- Menerima status tab aktif dari Parent
  badgeText?: string;
  headlinePart1?: string;
  headlinePart2?: string;
  description?: string;
  tabs?: Tab[];
}>(), {
  badgeText: 'Available for new projects',
  headlinePart1: 'Crafting Digital Experiences,',
  headlinePart2: 'Line by Line.',
  // description: 'Halo, saya Mahesa Adi Kusuma. Seorang Full Stack Developer yang berfokus membangun aplikasi web berskala besar, aman, dan berkinerja tinggi menggunakan teknologi modern.',
  tabs: () => [
    { id: 'ts', name: 'mahesa.ts', icon: 'i-vscode-icons-file-type-typescript-official' },
    { id: 'php', name: 'Developer.php', icon: 'i-vscode-icons-file-type-php' },
    { id: 'json', name: 'developer.json', icon: 'i-vscode-icons-file-type-json' }
  ]
});

// 2. Definisikan emit untuk mengirim event ke Parent
// gunakan camelCase untuk defineEmits 
const emit = defineEmits<{
  (e: 'update:activeTab', value: string): void
}>();
</script>

<template>
  <div class="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center pt-32 pb-24 px-6 lg:px-8">

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary-500/10 dark:bg-primary-500/5 blur-[120px] rounded-full pointer-events-none">
    </div>

    <div v-motion-fade :delay="100" class="flex flex-col items-center mb-12 relative z-10">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-8">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
        </span>
        {{ badgeText }}
      </div>
      <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
        {{ headlinePart1 }} <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-violet-500">
          {{ headlinePart2 }}
        </span>
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
        {{ description }}
      </p>
    </div>

    <div class="relative w-full">
      <!-- 1. Floating Ornament Kiri Atas (Tech Stack) -->
      <div
        class="hidden lg:flex absolute -top-12 -left-16 z-20 animate-float shadow-xl shadow-gray-200/50 dark:shadow-black/40 backdrop-blur-xl bg-white/80 dark:bg-[#0f172a]/80 border border-gray-200 dark:border-gray-700/50 p-4 rounded-2xl items-center gap-3">
        <div class="flex -space-x-2">
          <UIcon name="i-devicon-laravel" class="w-8 h-8 rounded-full ring-2 ring-white dark:ring-[#0f172a] bg-white" />
          <UIcon name="i-devicon-react" class="w-8 h-8 rounded-full ring-2 ring-white dark:ring-[#0f172a] bg-white" />
          <UIcon name="i-devicon-vuejs" class="w-8 h-8 rounded-full ring-2 ring-white dark:ring-[#0f172a] bg-white" />
        </div>
        <div>
          <p class="text-xs font-bold text-gray-900 dark:text-white">Core Stack</p>
          <p class="text-[10px] text-gray-500 dark:text-gray-400">Always modern</p>
        </div>
      </div>

      <!-- 2. Floating Ornament Kanan Bawah (Status Proyek) -->
      <!-- Gunakan delay animasi berbeda agar melayangnya tidak bersamaan -->
      <div
        class="hidden lg:flex absolute -bottom-10 -right-12 z-20 animate-float-delayed shadow-xl shadow-gray-200/50 dark:shadow-black/40 backdrop-blur-xl bg-white/80 dark:bg-[#0f172a]/80 border border-gray-200 dark:border-gray-700/50 p-4 rounded-2xl items-center gap-4">
        <div class="p-2.5 bg-green-100 dark:bg-green-500/20 rounded-xl text-green-600 dark:text-green-400">
          <UIcon name="i-heroicons-check-circle-solid" class="w-6 h-6" />
        </div>
        <div>
          <p class="text-sm font-bold text-gray-900 dark:text-white">10+ Projects</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">Successfully completed</p>
        </div>
      </div>




      <!-- terminal -->

      <div v-motion-slide-visible-bottom :delay="300" class="w-full relative group z-10">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-violet-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200">
        </div>

        <div
          class="relative rounded-3xl overflow-hidden border border-gray-200/80 dark:border-gray-800 shadow-2xl shadow-gray-300/50 dark:shadow-black/50 font-mono text-sm bg-white/95 dark:bg-[#0b1120]/95 backdrop-blur-xl text-left">
          <div
            class="flex items-end px-3 pt-2 bg-gray-100/80 dark:bg-[#0f172a]/80 border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
            <div class="flex items-center gap-2 pb-2.5 px-3 shrink-0">
              <AtomsWindowIndicators />
            </div>
            <div class="flex ml-2">

              <button v-for="tab in tabs" :key="tab.id" @click="emit('update:activeTab', tab.id)" :class="[
                'flex items-center gap-2 px-5 py-2.5 border-t border-r border-l rounded-t-xl transition-colors cursor-pointer shrink-0',
                activeTab === tab.id
                  ? 'bg-white dark:bg-[#0b1120] border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 border-b-transparent relative top-[1px] font-medium'
                  : 'bg-transparent border-transparent text-gray-500 hover:bg-gray-200 dark:hover:bg-[#1e293b]'
              ]">
                <UIcon :name="tab.icon" class="w-4 h-4" />
                <span class="text-xs">{{ tab.name }}</span>
              </button>

            </div>
          </div>

          <!-- Teruskan activeTab dari props ke komponen cucu -->
          <MoleculesDeveloperCard :active-language="activeTab" />

        </div>
      </div>
    </div>


  </div>
</template>


<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 7s ease-in-out infinite;
  animation-delay: 2s;
  /* Sengaja dibuat delay agar pergerakannya tidak seragam dengan yang kiri */
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>