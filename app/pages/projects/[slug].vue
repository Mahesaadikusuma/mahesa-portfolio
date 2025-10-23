<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;
const { cards } = useCards();
useHead({
  title: `Project - ${route.params.slug}`,
});

const card = computed(() => cards.find((item) => item.slug === slug));

const mainImage = ref(card.value?.images ?? "");

const changeMainImage = (src: string) => {
  mainImage.value = src;
};
</script>

<template>
  <div
    class="mx-auto flex min-h-screen max-w-4xl flex-col gap-5 border border-gray-200 pb-[141px]">
    <div class="w-full px-4 pt-1">
      <div v-if="card">
        <div class="flex flex-col">
          <div class="">
            <NuxtLink class="flex items-center gap-2 mb-3" to="/">
              <Icon name="mdi:arrow-left-circle-outline" />
              <p>Back</p>
            </NuxtLink>

            <h1 class="font-poppins text-2xl capitalize font-bold">
              {{ card.title }}
            </h1>
            <p class="font-serif text-sm">
              {{ card.subTitle }}
            </p>

            <hr class="my-5 border-t-2 border-dotted border-neutral-300" />
          </div>

          <div class="flex lg:flex-row flex-col lg:justify-between mb-10">
            <div class="flex items-center gap-2 mb-2 lg:mb-0">
              <p>Tech Stack :</p>
              <NuxtLink
                v-for="ic in card.icons"
                :key="ic.id"
                :to="ic.to"
                class="inline-flex items-center gap-1">
                <Icon :name="ic.icon" class="text-xl" />
              </NuxtLink>
            </div>

            <div class="flex items-center gap-2">
              <div class="flex items-center gap-2">
                <Icon name="mdi:github-box" />
                <NuxtLink
                  class="text-sm"
                  to="https://github.com/Mahesaadikusuma/nusantaraTrip">
                  Source Code
                </NuxtLink>
              </div>
              <hr class="border border-r-2 h-3" />
              <div class="flex items-center gap-2">
                <Icon name="mdi:eye" class="" />
                <NuxtLink class="text-sm"> Live Demo </NuxtLink>
              </div>
            </div>
          </div>

          <div>
            <NuxtImg
              format="webp"
              loading="lazy"
              :src="mainImage"
              :alt="card.title"
              class="w-full rounded-xl shadow-md transition-all duration-300 max-h-[600px] object-cover" />

            <div
              v-if="card.galleries && card.galleries.length > 2"
              class="my-10">
              <UCarousel
                v-slot="{ item }"
                :items="card.galleries"
                :ui="{ item: 'basis-1/3' }">
                <button
                  @click="changeMainImage(item.src)"
                  class="cursor-pointer"
                  :class="{
                    'border-3 border-primary rounded-lg':
                      mainImage === item.src,
                    'border-transparent': mainImage !== item.src,
                  }">
                  <img
                    :src="item.src"
                    width="320"
                    height="320"
                    class="rounded-lg max-h-[200px] opacity-50"
                    :class="{
                      'opacity-100': mainImage === item.src,
                      'opacity-50 hover:opacity-100': mainImage !== item.src,
                    }" />
                </button>
              </UCarousel>
            </div>
          </div>

          <!-- <div class="">
            <UCarousel
              v-slot="{ item }"
              dots
              :items="items"
              :ui="{ item: 'basis-1/3' }">
              <img :src="item" width="320" height="320" class="rounded-lg" />
            </UCarousel>
          </div> -->

          <div class="">
            <h2 class="capitalize font-poppins text-xl font-semibold">
              {{ card.title }}
            </h2>
            <p class="text-xs font-serif">{{ card.description }}</p>

            <hr
              v-if="card.features && card.techs"
              class="my-5 border-t-2 border-dotted border-neutral-300" />

            <div v-if="card.features" class="mb-5">
              <h3>Fitur Utama:</h3>

              <UPageList divide>
                <UPageCard
                  v-for="(card, index) in card.features"
                  :key="index"
                  variant="ghost">
                  <template #body>
                    <UUser :description="card.title" size="xl" />
                  </template>
                </UPageCard>
              </UPageList>
            </div>

            <div v-if="card.techs" class="">
              <h4>Teknologi yang Digunakan :</h4>
              <UPageList divide>
                <UPageCard
                  v-for="(tech, index) in card.techs"
                  :key="index"
                  variant="ghost">
                  <template #body>
                    <UUser :description="tech.title" size="xl" />
                  </template>
                </UPageCard>
              </UPageList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
