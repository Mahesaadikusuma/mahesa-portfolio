<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;
const { cards } = useCards();
useHead({
  title: `Project - ${slug}`,
});

const card = computed<CardItem | undefined>(() => 
  cards.find((item) => item.slug === slug)
);

const mainImage = ref(card.value?.images ?? "");

const changeMainImage = (src: string) => {
  mainImage.value = src;
};
</script>

<template>
  <UContainer class="py-10 min-h-screen">
    <div v-if="card" class="max-w-4xl mx-auto flex flex-col gap-8">
      <!-- Header Section -->
      <div v-motion-slide-bottom>
        <UButton
          to="/"
          color="neutral"
          variant="ghost"
          icon="i-mdi-arrow-left-circle-outline"
          class="mb-4"
          size="md"
        >
          Back
        </UButton>

        <h1 class="font-poppins text-3xl md:text-4xl capitalize font-bold text-gray-900 dark:text-white">
          {{ card.title }}
        </h1>
        <p class="font-serif text-lg text-gray-500 dark:text-gray-400 mt-2">
          {{ card.subTitle }}
        </p>

        <USeparator  class="my-6" />
      </div>

      <!-- Tech Stack & Links -->
      <div v-motion-slide-bottom :delay="100" class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <!-- Tech Stack Icons -->
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Tech Stack:</span>
          <UTooltip
            v-for="ic in card.icons"
            :key="ic.id"
            :text="ic.title"
          >
            <UButton
              :to="ic.to"
              target="_blank"
              color="neutral"
              variant="soft"
              size="sm"
              :icon="ic.icon"
              class="rounded-full"
            />
          </UTooltip>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-3">
          <UButton
            v-if="card.githubLink"
            :to="card.githubLink"
            target="_blank"
            color="neutral"
            variant="solid"
            icon="i-mdi-github"
          >
            Source Code
          </UButton>
          
          <UButton
            v-if="card.demo"
            :to="card.demo"
            target="_blank"
            color="primary"
            variant="solid"
            icon="i-mdi-eye"
          >
            Live Demo
          </UButton>
        </div>
      </div>

      <!-- Image Gallery -->
      <div v-motion-fade :delay="200" class="flex flex-col gap-4">
        <NuxtImg
          v-if="mainImage"
          format="webp"
          loading="lazy"
          :src="mainImage"
          :alt="card.title"
          class="w-full rounded-2xl shadow-lg transition-all duration-500 max-h-[600px] object-cover border border-gray-200 dark:border-gray-800"
        />

        <div v-if="card.galleries && card.galleries.length > 1" class="mt-4 px-2">
          <UCarousel
            v-slot="{ item }"
            :items="card.galleries"
            :ui="{ item: 'basis-1/3 md:basis-1/4 lg:basis-1/5' }"
            class="rounded-xl"
            arrows
          >
            <div class="p-1">
              <button
                @click="changeMainImage(item.src)"
                class="w-full relative rounded-xl overflow-hidden transition-all duration-300 focus:outline-none ring-2 ring-offset-2 dark:ring-offset-gray-900"
                :class="mainImage === item.src ? 'ring-primary' : 'ring-transparent hover:ring-gray-300 dark:hover:ring-gray-700'"
              >
                <img
                  :src="item.src"
                  class="w-full h-24 object-cover transition-opacity duration-300"
                  :class="mainImage === item.src ? 'opacity-100' : 'opacity-60 hover:opacity-100'"
                  :alt="item.title"
                />
              </button>
            </div>
          </UCarousel>
        </div>
      </div>

      <!-- Content Section -->
      <div class="mt-12 flex flex-col gap-12">
        <!-- About -->
        <div v-motion-slide-visible-bottom>
          <div class="flex items-center gap-3 mb-6">
            <div class="h-8 w-1.5 bg-primary rounded-full"></div>
            <h2 class="font-poppins text-2xl font-bold text-gray-900 dark:text-white">
              About Project
            </h2>
          </div>
          <p class="text-base text-gray-600 dark:text-gray-300 leading-loose text-justify">
            {{ card.description }}
          </p>
        </div>

        <USeparator  v-if="card.features || card.techs" class="opacity-50" />

        <!-- Features & Tech Grid -->
        <div v-if="card.features || card.techs" class="grid grid-cols-1 md:grid-cols-1 gap-10">
          <div v-if="card.features && card.features.length > 0"" v-motion-slide-visible-bottom class="space-y-6">
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-primary/10 dark:bg-primary/20 rounded-xl text-primary">
                <UIcon name="i-heroicons-star" class="w-6 h-6" />
              </div>
              <h3 class="font-poppins font-bold text-xl text-gray-900 dark:text-white">
                Fitur Utama
              </h3>
            </div>
            <ul class="space-y-4">
              <li v-for="(feature, index) in card.features" :key="index" class="flex items-start gap-4 group">
                <UIcon name="i-heroicons-chevron-double-right-20-solid" class="text-primary w-6 h-6 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ feature.title }}</span>
              </li>
            </ul>
          </div>

          <div v-if="card.techs && card.techs.length > 0" v-motion-slide-visible-bottom :delay="100" class="space-y-6">
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-primary/10 dark:bg-primary/20 rounded-xl text-primary">
                <UIcon name="i-heroicons-cpu-chip" class="w-6 h-6" />
              </div>
              <h3 class="font-poppins font-bold text-xl text-gray-900 dark:text-white">
                Teknologi
              </h3>
            </div>
            <ul class="space-y-4">
              <li v-for="(tech, index) in card.techs" :key="index" class="flex items-start gap-4 group">
                <UIcon name="i-heroicons-code-bracket-square" class="text-primary w-6 h-6 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ tech.title }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <UIcon name="i-heroicons-document-magnifying-glass" class="w-16 h-16 text-gray-400" />
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Project Not Found</h2>
      <UButton to="/" color="primary" variant="soft">Return Home</UButton>
    </div>
  </UContainer>
</template>
