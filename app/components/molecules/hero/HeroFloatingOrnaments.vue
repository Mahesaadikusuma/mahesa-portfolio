<script setup lang="ts">
import { ref } from 'vue';

interface Tab {
  id: string;
  name: string;
  icon: string;
}

const tabs: Tab[] = [
  { id: 'ts', name: 'mahesa.ts', icon: 'i-vscode-icons-file-type-typescript-official' },
  { id: 'php', name: 'Developer.php', icon: 'i-vscode-icons-file-type-php' },
  { id: 'json', name: 'developer.json', icon: 'i-vscode-icons-file-type-json' }
];

const activeTab = ref(tabs[0]?.id || 'ts');
</script>

<template>
  <div class="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center pt-32 pb-24">
    
    <div v-motion-fade :delay="100" class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
        Hi, I'm Mahesa Adi Kusuma.
      </h1>
      <p class="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
        Full Stack Developer based in Indonesia. I build robust backend architectures and beautiful frontend experiences.
      </p>
    </div>

    <div class="relative w-full">
      
      <!-- Float Left -->
      <div class="hidden lg:flex absolute -top-12 -left-16 z-20 animate-float shadow-xl shadow-gray-200/50 dark:shadow-black/40 backdrop-blur-xl bg-white/80 dark:bg-[#0f172a]/80 border border-gray-200 dark:border-gray-700/50 p-4 rounded-2xl items-center gap-3">
        <div class="flex -space-x-2">
          <UIcon name="i-devicon-laravel" class="w-8 h-8 rounded-full ring-2 ring-white dark:ring-[#0f172a] bg-white" />
          <UIcon name="i-devicon-nuxtjs" class="w-8 h-8 rounded-full ring-2 ring-white dark:ring-[#0f172a] bg-white" />
          <UIcon name="i-devicon-vuejs" class="w-8 h-8 rounded-full ring-2 ring-white dark:ring-[#0f172a] bg-white" />
        </div>
        <div>
          <p class="text-xs font-bold text-gray-900 dark:text-white">Core Stack</p>
          <p class="text-[10px] text-gray-500 dark:text-gray-400">Always modern</p>
        </div>
      </div>

      <!-- Float Right -->
      <div class="hidden lg:flex absolute -bottom-10 -right-12 z-20 animate-float-delayed shadow-xl shadow-gray-200/50 dark:shadow-black/40 backdrop-blur-xl bg-white/80 dark:bg-[#0f172a]/80 border border-gray-200 dark:border-gray-700/50 p-4 rounded-2xl items-center gap-4">
        <div class="p-2.5 bg-green-100 dark:bg-green-500/20 rounded-xl text-green-600 dark:text-green-400">
          <UIcon name="i-heroicons-check-circle-solid" class="w-6 h-6" />
        </div>
        <div>
          <p class="text-sm font-bold text-gray-900 dark:text-white">10+ Projects</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">Successfully completed</p>
        </div>
      </div>

      <!-- Terminal -->
      <div v-motion-slide-visible-bottom :delay="300" class="relative z-10 w-full rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-300/50 dark:shadow-black/60 font-mono text-sm bg-white dark:bg-[#0b1120]">
        <div class="flex items-end px-3 pt-2 bg-gray-100 dark:bg-[#0f172a] border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
          <div class="flex items-center gap-2 pb-2.5 px-3 shrink-0">
            <AtomsWindowIndicators/>
          </div>
          <div class="flex ml-2">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
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
        <MoleculesDeveloperCard :active-language="activeTab" />
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
}
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
</style>