<script setup lang="ts">
import { CodeJson, CodePhp, CodeTypeScript } from './language';


defineProps<{
  activeLanguage: string;
}>();

const developerData = {
  name: "Mahesa Adi Kusuma",
  role: "Full Stack Developer",
  location: "Bekasi Regency, West Java 🇮🇩",
  skills: ["Vue", "Nuxt", "Laravel", "TypeScript", "Tailwind"],
  available: true
};
</script>

<template>
  <div class="px-6 py-6 text-sm leading-7 overflow-x-auto min-h-[300px]">
    
    <CodeTypeScript 
      v-if="activeLanguage === 'ts'" 
      :data="developerData" 
    />
    
    <CodePhp 
      v-else-if="activeLanguage === 'php'" 
      :data="developerData"
    />

    <CodeJson 
      v-else-if="activeLanguage === 'json'" 
      :data="developerData"
    />

  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>