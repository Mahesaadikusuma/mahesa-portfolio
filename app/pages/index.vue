<script setup lang="ts">
useHead({
  title: "Mahesa Adi Kusuma | Portfolio",
});

const { cards } = useCards();
</script>

<template>
  <div
    id="home"
    class="flex flex-col mx-auto justify-center max-w-screen px-4 pt-20 lg:pt-40 pb-20">
    <div class="text-center mt-20 md:mt:0 mb-10">
      <h1
        class="text-[50px] sm:text-[80px] capitalize font-semibold font-poppins leading-[50px]">
        Hello Everyone!
      </h1>
      <p class="text-[20px] sm:text-[21px] capitalize font-serif sm:mt-4">
        Code writes my story
      </p>
    </div>
    <div class="text-center mb-10">
      <UButton
        class="px-5 py-3"
        icon="i-lucide-rocket"
        color="neutral"
        variant="solid"
        :ui="{
          leadingIcon: 'text-primary',
        }">
        Get Started
      </UButton>
    </div>
    <div class="text-center mb-10">
      <h1 class="text-lg capitalize font-light font-serif">Let's connect</h1>
      <div class="flex items-center gap-2 justify-center">
        <Icon name="mdi-instagram" class="size-7 my-2" />
        <Icon name="mdi-linkedin" class="size-7 my-2" />
        <Icon name="mdi-whatsapp" class="size-7 my-2" />
        <Icon name="mdi-email" class="size-7 my-2" />
      </div>
    </div>

    <!-- About Me -->
    <div id="about">
      <div class="grid grid-cols-12 lg:max-w-6xl mx-auto mt-40">
        <div
          class="col-span-12 bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-neutral-800">
          <CardHeader title="Portofolio - Mahesa Adi Kusuma" />

          <div class="grid grid-cols-12 lg:p-5 p-2 gap-2 lg:gap-5 px-5">
            <div class="col-span-12 lg:col-span-6">
              <h2 class="text-xl font-semibold mb-2">About Me</h2>
              <p class="text-justify">
                I'm Mahesa Adi Kusuma, a Fresh Graduate from Esa Unggul
                University, majoring in Informatics Engineering. I have a strong
                passion for the IT field, especially in web development as a
                Front End, Back End, or Full Stack Developer. I’m skilled in
                HTML, CSS, JavaScript, and PHP, with hands-on experience using
                frameworks like Laravel and Tailwind CSS. I’m also proficient in
                Figma for website design and capable of transforming designs
                into fully functional and responsive web interfaces. I’m always
                eager to learn, grow, and collaborate on exciting projects. 🚀
                Let’s build something great together!
              </p>
            </div>
            <div class="col-span-12 lg:col-span-6">
              <h2 class="text-xl font-semibold mb-5">Work Experience</h2>
              <div
                class="relative mb-5 pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                <div
                  class="absolute -left-2 -top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-neutral-900"></div>

                <h3 class="font-semibold text-gray-900 dark:text-white">
                  Internship — Brainmatic
                </h3>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Web Developer | Aug 2024 – Desc 2024
                </span>
                <p class="text-gray-700 dark:text-gray-300 mt-1 text-justify">
                  Worked as a full-stack web developer intern, building and
                  improving features using Laravel, React, Bootsrap, Tailwind
                  CSS, and MySQL. Focused on creating clean and maintainable
                  code for real client projects.
                </p>
              </div>
              <div
                class="relative mb-5 pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                <div
                  class="absolute -left-2 -top-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-neutral-900"></div>

                <h3 class="font-semibold text-gray-900 dark:text-white">
                  SIB Dicoding Cyle 6 - Front-End & Back-End Student
                </h3>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Front End Developer | Feb 2024 – Jun 2024
                </span>
                <p class="text-gray-700 dark:text-gray-300 mt-1 text-justify">
                  Dicoding Cycle 6 is one of the Kampus Merdeka Independent
                  Study programs designed to produce graduates with high-level
                  competencies that meet industry standards. The learning
                  process at Dicoding is conducted online, and participants are
                  provided with various projects and modules to sharpen and
                  apply their skills. As part of this program, participants also
                  work on a Capstone Project as their final assignment, serving
                  as a real implementation of the knowledge and skills they have
                  acquired throughout the program..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="projects"
      class="grid grid-cols-12 gap-4 lg:max-w-6xl mx-auto p-4 mt-30">
      <div class="col-span-12">
        <h2 class="text-2xl text-center font-semibold mb-2">Projects</h2>
      </div>
      <div
        class="col-span-12 bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-neutral-800">
        <CardHeader title="Projects - Mahesa Adi Kusuma" />
        <div class="p-5">
          <UPageGrid>
            <UPageCard
              class="line-clamp-1 text-justify"
              v-for="(card, index) in cards"
              :key="card.id"
              v-bind="card"
              :description="card.description?.slice(0, 200) + '...'"
              :reverse="true"
              spotlight
              spotlight-color="primary"
              :to="card.to">
              <div class="w-full">
                <NuxtImg
                  format="webp"
                  loading="lazy"
                  :src="card.images"
                  :alt="card.title"
                  class="w-full object-cover" />
              </div>
            </UPageCard>
          </UPageGrid>
        </div>
      </div>
    </div>
  </div>
</template>
