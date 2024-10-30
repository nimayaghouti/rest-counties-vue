<script setup>
import useTheme from '@/composable/useTheme'
import MoonOutlinedIcon from '@/assets/svg/MoonOutlinedIcon.vue'
import MoonFilledIcon from '@/assets/svg/MoonFilledIcon.vue'

const { isDarkTheme, toggleDarkMode } = useTheme()
</script>
<template>
  <header
    class="h-20 shadow fixed top-0 left-0 right-0 px-4 sm:px-20 bg-white text-dark-blue-text dark:bg-dark-blue dark:text-white"
  >
    <div
      class="h-full w-full max-w-[1440px] mx-auto flex justify-between items-center"
    >
      <span>
        <h1 class="font-extrabold text-xl">Where in the world?</h1>
      </span>
      <span
        class="inline-flex items-center gap-[0.4rem] cursor-pointer"
        @click="toggleDarkMode"
      >
        <MoonFilledIcon v-if="isDarkTheme" class="w-5 h-5" />
        <MoonOutlinedIcon v-else class="w-5 h-5" />
        <p>Dark Mode</p>
      </span>
    </div>
  </header>
</template>

<style></style>
