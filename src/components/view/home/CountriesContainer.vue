<script setup>
import CountryCard from './CountryCard.vue'
defineProps({
  countriesData: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-self-center items-center py-4 gap-24"
  >
    <template v-if="countriesData?.length > 0">
      <CountryCard
        v-for="(countryData, index) in countriesData"
        :key="index"
        :countryData="countryData"
      />
    </template>
    <p v-else>Failed to fetchin data.</p>
  </section>
</template>

<style></style>
