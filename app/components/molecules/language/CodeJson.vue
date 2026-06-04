<script setup lang="ts">

defineProps<{
    data: Record<string,any>
}>()
</script>

<template>
    <div class="animate-[fadeIn_0.3s_ease-in-out]">
      <p><span class="text-gray-600 dark:text-gray-300">{</span></p>
      
      <div v-for="(value, key, i) in data" :key="key" class="pl-6">
        <span class="text-blue-600 dark:text-blue-400">"{{ key }}"</span>
        <span class="text-gray-600 dark:text-gray-300">: </span>
        
        <template v-if="Array.isArray(value)">
          <span class="text-gray-600 dark:text-gray-300">[</span>
          <span v-for="(skill, index) in value" :key="skill" class="text-amber-600 dark:text-yellow-300">
            "{{ skill }}"{{ index < value.length - 1 ? ', ' : '' }}
          </span>
          <span class="text-gray-600 dark:text-gray-300">]{{ i < Object.keys(data).length - 1 ? ',' : '' }}</span>
        </template>

        <template v-else>
          <span :class="typeof value === 'string' ? 'text-amber-600 dark:text-yellow-300' : 'text-orange-600 dark:text-orange-400'">
            {{ typeof value === 'string' ? `"${value}"` : value }}
          </span>
          <span class="text-gray-600 dark:text-gray-300">{{ i < Object.keys(data).length - 1 ? ',' : '' }}</span>
        </template>
      </div>

      <p><span class="text-gray-600 dark:text-gray-300">}</span></p>
    </div>
</template>