<script setup lang="ts">
const developerData = {
  name: "Mahesa Adi Kusuma",
  role: "Full Stack Developer",
  location: "Jakarta, Indonesia 🇮🇩",
  skills: ["Vue", "Nuxt", "Laravel", "TypeScript", "Tailwind"],
  available: true
};
</script>

<template>
  <div class="bg-white dark:bg-[#0b1120] px-6 py-6 text-sm leading-7">
    <!-- Baris Pembuka (Spasi ditambahkan di dalam teks) -->
    <p>
      <span class="text-violet-500 dark:text-violet-400">const </span>
      <span class="text-blue-600 dark:text-blue-400">developer </span>
      <span class="text-gray-600 dark:text-gray-300">= {</span>
    </p>

    <!-- Baris Properti -->
    <div v-for="(value, key) in developerData" :key="key" class="pl-6">
      <span class="text-green-600 dark:text-emerald-400">{{ key }}</span>
      <span class="text-gray-600 dark:text-gray-300">: </span>
      
      <!-- Jika data adalah array (Skills) -->
      <template v-if="Array.isArray(value)">
        <span class="text-gray-600 dark:text-gray-300">[</span>
        <div class="pl-6">
          <span 
            v-for="(skill, index) in value" :key="skill"
            class="text-amber-600 dark:text-yellow-300"
          >
            "{{ skill }}"{{ index < value.length - 1 ? ',' : '' }} 
          </span>
        </div>
        <span class="text-gray-600 dark:text-gray-300">],</span>
      </template>

      <!-- Jika data adalah string/boolean -->
      <template v-else>
        <span :class="typeof value === 'string' ? 'text-amber-600 dark:text-yellow-300' : 'text-orange-600 dark:text-orange-400'">
          {{ typeof value === 'string' ? `"${value}"` : value }}
        </span>
        <span class="text-gray-600 dark:text-gray-300">,</span>
      </template>
    </div>

    <!-- Baris Penutup -->
    <p><span class="text-gray-600 dark:text-gray-300">}</span></p>
    
    <!-- Komentar -->
    <p class="mt-2 text-gray-400 dark:text-gray-600">
      <span class="text-primary">// </span><span>Let's build something great! 🚀</span>
    </p>
  </div>
</template>

