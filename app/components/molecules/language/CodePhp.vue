<script setup lang="ts">
defineProps<{
    data: Record<string, any>;
}>();
</script>

<template>
    <div class="animate-[fadeIn_0.3s_ease-in-out]">
        <p><span class="text-gray-400 dark:text-gray-500">&lt;?php</span></p>
        <br>
        <p>
            <span class="text-violet-500 dark:text-violet-400">namespace</span>
            <span class="text-gray-600 dark:text-gray-300"> App\Models;</span>
        </p>
        <p>
            <span class="text-violet-500 dark:text-violet-400">use</span>
            <span class="text-gray-600 dark:text-gray-300"> Illuminate\Database\Eloquent\Model;</span>
        </p>
        <br>
        <p>
            <span class="text-violet-500 dark:text-violet-400">class</span>
            <span class="text-yellow-600 dark:text-yellow-400"> Developer </span>
            <span class="text-violet-500 dark:text-violet-400">extends</span>
            <span class="text-yellow-600 dark:text-yellow-400"> Model</span>
        </p>
        <p><span class="text-gray-600 dark:text-gray-300">{</span></p>

        <div class="pl-6">
            <p class="text-gray-400 dark:text-gray-500 italic">// Accessor mapping for profile display</p>
            <p>
                <span class="text-violet-500 dark:text-violet-400">public function</span>
                <span class="text-blue-600 dark:text-blue-400"> getProfileAttribute</span><span
                    class="text-gray-600 dark:text-gray-300">()</span>
            </p>
            <p><span class="text-gray-600 dark:text-gray-300">{</span></p>

            <p class="pl-6">
                <span class="text-violet-500 dark:text-violet-400">return</span>
                <span class="text-gray-600 dark:text-gray-300"> [</span>
            </p>

            <div class="pl-12">
                <p v-for="(value, key) in data" :key="key">
                    <span class="text-amber-600 dark:text-yellow-300">'{{ key }}'</span>
                    <span class="text-violet-500 dark:text-violet-400"> => </span>

                    <template v-if="Array.isArray(value)">
                        <span class="text-gray-600 dark:text-gray-300">[</span>
                        <span v-for="(skill, index) in value" :key="skill" class="text-amber-600 dark:text-yellow-300">
                            '{{ skill }}'{{ index < value.length - 1 ? ', ' : '' }} </span>
                                <span class="text-gray-600 dark:text-gray-300">],</span>
                    </template>
                    <template v-else>
                        <span
                            :class="typeof value === 'string' ? 'text-amber-600 dark:text-yellow-300' : 'text-orange-600 dark:text-orange-400'">
                            {{ typeof value === 'string' ? `'${value}'` : value }}
                        </span><span class="text-gray-600 dark:text-gray-300">,</span>
                    </template>
                </p>
            </div>

            <p class="pl-6"><span class="text-gray-600 dark:text-gray-300">];</span></p>
            <p><span class="text-gray-600 dark:text-gray-300">}</span></p>
        </div>
        <p><span class="text-gray-600 dark:text-gray-300">}</span></p>
    </div>
</template>