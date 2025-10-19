<script setup lang="ts">
useHead({
  title: "Mahesa Adi Kusuma | Portfolio",
});
</script>

<template>
  <div
    class="flex flex-col mx-auto justify-center max-w-screen px-4 pt-20 lg:pt-40 pb-20">
    <div class="text-center mb-10">
      <h1
        class="text-[50px] sm:text-[80px] capitalize font-semibold font-poppins leading-[50px]">
        Hello world!
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
        variant="outline"
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

    <div class="max-w-2xl mx-auto">
      <UMarquee pause-on-hover :overlay="true">
        <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
      </UMarquee>
    </div>
  </div>
</template>
