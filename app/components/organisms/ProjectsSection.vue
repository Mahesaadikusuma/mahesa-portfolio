<script setup lang="ts">
const { cards } = useCards();

const page = ref(1);
// Ubah angka ini untuk sementara waktu menjadi 2
const itemPerPage = ref(4); 

const paginatedCards = computed(() => {
  const startIndex = (page.value - 1) * itemPerPage.value;
  const endIndex = startIndex + itemPerPage.value;
  return cards.slice(startIndex, endIndex);
})


const initialShow = 3; // Jumlah project yang langsung muncul saat halaman pertama kali dibuka
const step = 3; // Jumlah project tambahan yang muncul setiap kali tombol "Load More" ditekan
const toast = useToast();
const visibleCount = ref(initialShow);

// Computed property untuk memotong array dari index 0 sampai batas visibleCount
const displayedCards = computed(() => {
  return cards.slice(0, visibleCount.value);
});

// Fungsi untuk mengeksekusi penambahan data
const loadMore = () => {
  visibleCount.value += step;
  
   toast.add({
    title: 'Project Added',
    description: `You have added ${visibleCount.value} projects.`,
    icon: 'i-lucide-check-circle',
    color: 'primary',
    duration: 3000,
  })
};
</script>

<template>
  <section id="projects" class="py-20 lg:py-32 w-full">
    <UContainer class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div 
        class="text-center max-w-3xl mx-auto mb-16"
        v-motion-slide-visible-bottom
      >
        <h2 class="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
          Portfolio
        </h2>
        <h3 class="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Featured Projects
        </h3>
        <!-- <p class="text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Beberapa proyek unggulan yang pernah saya kerjakan, berfokus pada desain antarmuka yang modern, responsif, dan performa yang optimal.
        </p> -->
      </div>

      <!-- Projects Grid -->
      <UPageGrid>
        <div
          v-for="(card, index) in displayedCards"
          :key="card.id"
          v-motion-slide-visible-bottom
          :delay="index * 100"
        >
          <UPageCard
            :title="card.title"
            :description="card.description?.slice(0, 100) + '...'"
            :to="card.to"
            :reverse="true"
            spotlight
            spotlight-color="primary"
            class="group h-full"
            
          >
            <!-- Image Container with Hover Zoom -->
            <div class="w-full relative aspect-[4/3] sm:aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800/50">
              <NuxtImg
                format="webp"
                loading="lazy"
                :src="card.images"
                :alt="card.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Bottom Section (Tech Stack / Icons) -->
            <div class="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800/50">
              <UTooltip 
                v-for="ic in card.icons.slice(0, 5)" 
                :key="ic.id" 
                :text="ic.title"
              >
                <UIcon :name="ic.icon" class="w-5 h-5 text-gray-500 hover:text-primary transition-colors cursor-pointer" />
              </UTooltip>
              <span v-if="card.icons.length > 5" class="text-xs text-gray-400 ml-1">
                +{{ card.icons.length - 5 }}
              </span>
            </div>
          </UPageCard>
        </div>
      </UPageGrid>

      <!-- Pagination -->
      <!-- <div class="flex justify-between items-center mt-12" v-if="cards.length > itemPerPage">
        <div class="text-sm text-gray-500 dark:text-gray-400 font-medium">
          memb`ulatkan ke atas jika ada sisa data
          Halaman {{ page }} dari {{ Math.ceil(cards.length / itemPerPage) }} (Total {{ cards.length }} Project)
        </div>
        <UPagination 
          v-model:page="page"
          :items-per-page="itemPerPage" 
          :total="cards.length" 
          show-edges 
          :sibling-count="1" 
        />
        
      </div> -->

      <!-- Area Tombol Load More -->
      <div 
        class="flex justify-center mt-16" 
        v-if="visibleCount < cards.length"
        v-motion-fade
      >
        <UButton
          @click="loadMore"
          size="lg"
          color="primary"
          variant="soft"
          icon="i-heroicons-chevron-double-down"
          class="px-8 py-3 rounded-full font-medium cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          Tampilkan Lebih Banyak
        </UButton>
      </div>

      <div 
        class="flex justify-center mt-16 text-gray-500 dark:text-gray-400 text-sm font-medium" 
        v-else-if="cards.length > initialShow"
      >
        <UIcon name="i-heroicons-check-circle" class="w-5 h-5 mr-2 text-primary" />
        Semua project telah ditampilkan
      </div>

    </UContainer>
  </section>
</template>
