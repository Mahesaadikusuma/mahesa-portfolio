<template>
  <section id="about" class="py-20 lg:py-32 w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20" v-motion-slide-visible-bottom>
        <h2 class="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Who am I</h2>
        <h3 class="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h3>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Bio + Skills -->
        <div class="space-y-10" v-motion-slide-visible-bottom :delay="100">

          <!-- Bio -->
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="h-8 w-1.5 bg-primary rounded-full"></div>
              <h4 class="font-poppins text-2xl font-bold text-gray-900 dark:text-white">Bio</h4>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-loose text-justify">
              I'm <span class="font-semibold text-gray-900 dark:text-white">Mahesa Adi Kusuma</span>, a Fresh Graduate from Esa Unggul University, majoring in Informatics Engineering. I have a strong passion for the IT field, especially in web development as a Front End, Back End, or Full Stack Developer.
            </p>
            <p class="text-gray-600 dark:text-gray-400 leading-loose text-justify mt-4">
              I'm skilled in HTML, CSS, JavaScript, and PHP, with hands-on experience using frameworks like Laravel and Tailwind CSS. I'm also proficient in Figma for website design and capable of transforming designs into fully functional and responsive web interfaces. 🚀 Let's build something great together!
            </p>
          </div>

          <!-- Skills -->
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="h-8 w-1.5 bg-primary rounded-full"></div>
              <h4 class="font-poppins text-2xl font-bold text-gray-900 dark:text-white">Tech Stack</h4>
            </div>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in skills"
                :key="skill.name"
                color="primary"
                variant="soft"
                size="md"
                class="gap-1.5"
              >
                <UIcon :name="skill.icon" class="w-4 h-4" />
                {{ skill.name }}
              </UBadge>
            </div>
          </div>
        </div>

        <!-- Right: Work Experience Timeline -->
        <div v-motion-slide-visible-bottom :delay="200">
          <div class="flex items-center gap-3 mb-10">
            <div class="h-8 w-1.5 bg-primary rounded-full"></div>
            <h4 class="font-poppins text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h4>
          </div>

          <!-- Timeline -->
          <div class="relative">
            <!-- Vertical Line -->
            <div class="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"></div>

            <div class="space-y-10">
              <!-- Experience Item -->
              <div
                v-for="(exp, index) in experiences"
                :key="index"
                class="relative pl-12 group"
                v-motion-slide-visible-bottom
                :delay="300 + index * 150"
              >
                <!-- Timeline Dot -->
                <div
                  class="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-[#0b1120] transition-transform duration-300 group-hover:scale-110"
                  :class="exp.color"
                >
                  <UIcon :name="exp.icon" class="w-4 h-4 text-white" />
                </div>

                <!-- Content -->
                <div class="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5 transition-all duration-300 group-hover:shadow-md group-hover:border-primary/30">
                  <div class="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <h5 class="font-poppins font-bold text-gray-900 dark:text-white">
                      {{ exp.title }}
                    </h5>
                    <UBadge color="primary" variant="soft" size="sm">
                      {{ exp.type }}
                    </UBadge>
                  </div>
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-3">
                    <UIcon name="i-heroicons-calendar" class="w-3.5 h-3.5" />
                    {{ exp.period }}
                  </span>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                    {{ exp.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  { name: "HTML", icon: "i-vscode-icons-file-type-html" },
  { name: "CSS", icon: "i-vscode-icons-file-type-css" },
  { name: "JavaScript", icon: "i-vscode-icons-file-type-js" },
  { name: "TypeScript", icon: "i-vscode-icons-file-type-typescript" },
  { name: "Vue.js", icon: "i-vscode-icons-file-type-vue" },
  { name: "Nuxt.js", icon: "i-vscode-icons-file-type-nuxt" },
  { name: "PHP", icon: "i-devicon-php" },
  { name: "Laravel", icon: "i-devicon-laravel" },
  { name: "Tailwind CSS", icon: "i-vscode-icons-file-type-tailwind" },
  { name: "Figma", icon: "i-devicon-figma" },
  { name: "MySQL", icon: "i-devicon-mysql" },
];

const experiences = [
  {
    title: "Internship — Brainmatic",
    type: "Internship",
    period: "Aug 2024 – Dec 2024",
    icon: "i-heroicons-briefcase",
    color: "bg-blue-500",
    description:
      "Worked as a full-stack web developer intern, building and improving features using Laravel, React, Bootstrap, Tailwind CSS, and MySQL. Focused on creating clean and maintainable code for real client projects.",
  },
  {
    title: "SIB Dicoding Cycle 6",
    type: "Front-End & Back-End Student",
    period: "Feb 2024 – Jun 2024",
    icon: "i-heroicons-academic-cap",
    color: "bg-green-500",
    description:
      "Kampus Merdeka Independent Study program designed to produce graduates with high-level competencies. Completed various modules and projects, culminating in a Capstone Project as a real implementation of acquired skills.",
  },
];
</script>
