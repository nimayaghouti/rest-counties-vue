<script setup>
import CountryCard from './CountryCard.vue'
defineProps({
  countriesData: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: true,
  },
})
</script>
<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-self-center items-center py-4 gap-24"
  >
    <p v-if="isLoading">Loading...</p>
    <template v-else-if="countriesData?.length > 0">
      <CountryCard
        v-for="(countryData, index) in countriesData"
        :key="index"
        :countryData="countryData"
      />
    </template>
    <p v-else>Not Found.</p>
  </section>
</template>

<style></style>
