<script setup>
import TheHeader from '@/components/common/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main class="h-full min-h-screen pt-20 bg-light-gray-bg dark:bg-dark-blue-bg">
    <div class="container">
      <slot name="content"></slot>
    </div>
  </main>
</template>
