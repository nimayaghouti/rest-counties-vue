<script setup>
import TheHeader from '@/components/common/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main
    class="h-full min-h-screen pt-20 px-4 sm:px-20 bg-light-gray-bg dark:bg-dark-blue-bg"
  >
    <div class="max-w-[1440px] mx-auto">
      <slot name="content"></slot>
    </div>
  </main>
</template>
