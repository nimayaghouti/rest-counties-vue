<script setup>
import { onMounted, ref } from 'vue'
import { getCountriesService } from '@/services/getCountriesService'
import OptionsPanel from '@/components/view/home/OptionsPanel.vue'

const countriesData = ref([])

onMounted(async () => {
  try {
    countriesData.value = await getCountriesService()
    console.log(countriesData.value)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="text-sm text-dark-blue-text dark:text-white">
    <OptionsPanel />
    <div v-for="(countryData, index) in countriesData" :key="index">
      <p>{{ countryData.name.common }}</p>
    </div>
  </div>
</template>

<style></style>
