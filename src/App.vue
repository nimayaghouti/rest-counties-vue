<script setup>
import BaseLayout from './layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <template #content>
      <router-view />
    </template>
  </BaseLayout>
</template>
