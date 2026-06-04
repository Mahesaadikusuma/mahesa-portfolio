<script setup lang="ts">

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
  <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-3 gap-6 pt-24 pb-16">
    <!-- Kiri: Bento Boxes -->
    <div class="flex flex-col gap-6 lg:col-span-1">
      <!-- Box 1 -->
      <div v-motion-fade :delay="100" class="p-8 rounded-3xl bg-white dark:bg-[#0b1120] border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/20 flex flex-col justify-center">
         <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
           Hi, I'm <br/> Mahesa.
         </h1>
         <p class="text-primary-500 font-semibold mb-4 text-lg">Full Stack Developer</p>
         <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
           Membangun aplikasi web modern yang cepat, aman, dan mudah digunakan dengan backend yang solid.
         </p>
      </div>

      <!-- Box 2 -->
      <div v-motion-fade :delay="200" class="p-6 rounded-3xl bg-primary-50 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-900/30 flex items-center gap-5 shadow-sm">
        <div class="p-3 bg-white dark:bg-[#0b1120] rounded-2xl shadow-sm">
          <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-primary-500" />
        </div>
        <div>
          <p class="text-sm font-bold text-gray-900 dark:text-white">Bekasi, West Java</p>
          <div class="flex items-center gap-2 mt-1.5">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span class="text-xs font-medium text-gray-600 dark:text-gray-400">Available for work</span>
          </div>
        </div>
      </div>
      
      <!-- Box 3 -->
      <div v-motion-fade :delay="300" class="p-6 rounded-3xl bg-white dark:bg-[#0b1120] border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/20">
         <p class="text-xs font-mono text-gray-400 dark:text-gray-500 mb-4 uppercase tracking-wider font-semibold">Core Stack</p>
         <div class="flex gap-4 items-center">
            <UIcon name="i-devicon-vuejs" class="w-7 h-7 hover:scale-110 transition-transform cursor-pointer" />
            <UIcon name="i-devicon-nuxtjs" class="w-7 h-7 hover:scale-110 transition-transform cursor-pointer" />
            <UIcon name="i-devicon-laravel" class="w-7 h-7 hover:scale-110 transition-transform cursor-pointer" />
            <UIcon name="i-devicon-typescript" class="w-7 h-7 hover:scale-110 transition-transform cursor-pointer" />
         </div>
      </div>
    </div>

    <!-- Kanan: Terminal -->
    <div v-motion-slide-visible-bottom :delay="400" class="lg:col-span-2 flex h-full">
      <div class="w-full rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-black/40 font-mono text-sm bg-white dark:bg-[#0b1120] flex flex-col h-full">
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
              ]"
            >
              <UIcon :name="tab.icon" class="w-4 h-4" />
              <span class="text-xs">{{ tab.name }}</span>
            </button>
          </div>
        </div>
        <div class="flex-1">
          <MoleculesDeveloperCard :active-language="activeTab" />
        </div>
      </div> 
    </div>
  </div>
</template>