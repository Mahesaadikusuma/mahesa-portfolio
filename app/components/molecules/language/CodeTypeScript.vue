<script setup lang="ts">
// Kita terima data developer sebagai prop agar komponen ini re-usable
defineProps<{
  data: Record<string, any>;
}>();
</script>

<template>
  <div class="animate-[fadeIn_0.3s_ease-in-out]">
    <p>
      <span class="text-violet-500 dark:text-violet-400">const </span>
      <span class="text-blue-600 dark:text-blue-400">developer </span>
      <span class="text-gray-600 dark:text-gray-300">= {</span>
    </p>

    <div v-for="(value, key) in data" :key="key" class="pl-6">
      <span class="text-green-600 dark:text-emerald-400">{{ key }}</span>
      <span class="text-gray-600 dark:text-gray-300">: </span>
      
      <template v-if="Array.isArray(value)">
        <span class="text-gray-600 dark:text-gray-300">[</span>
        <span v-for="(skill, index) in value" :key="skill" class="text-amber-600 dark:text-yellow-300">
          "{{ skill }}"{{ index < (value?.length || 0) - 1 ? ', ' : '' }}
        </span>
        <span class="text-gray-600 dark:text-gray-300">],</span>
      </template>

      <template v-else>
        <span :class="typeof value === 'string' ? 'text-amber-600 dark:text-yellow-300' : 'text-orange-600 dark:text-orange-400'">
          {{ typeof value === 'string' ? `"${value}"` : value }}
        </span>
        <span class="text-gray-600 dark:text-gray-300">,</span>
      </template>
    </div>

    <p><span class="text-gray-600 dark:text-gray-300">}</span></p>
    <p class="mt-4 text-gray-400 dark:text-gray-600">
      <span class="text-green-500 dark:text-green-600">// </span><span>Let's build something great! 🚀</span>
    </p>
  </div>
</template>