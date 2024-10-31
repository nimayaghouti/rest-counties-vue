<script setup>
import { onMounted, ref } from 'vue'
import { getCountriesService } from '@/services/getCountriesService'
import OptionsPanel from '@/components/view/home/OptionsPanel.vue'
import CountriesContainer from '@/components/view/home/CountriesContainer.vue'

const countriesData = ref([])

onMounted(async () => {
  try {
    countriesData.value = await getCountriesService()
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="text-sm text-dark-blue-text dark:text-white">
    <OptionsPanel />
    <CountriesContainer :countriesData="countriesData" />
  </div>
</template>

<style></style>
