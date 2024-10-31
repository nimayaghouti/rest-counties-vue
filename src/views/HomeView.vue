<script setup>
import { onMounted, ref } from 'vue'
import { getCountriesService } from '@/services/getCountriesService'
import OptionsPanel from '@/components/view/home/OptionsPanel.vue'
import CoutriesContainer from '@/components/view/home/CoutriesContainer.vue'

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
    <CoutriesContainer :countriesData="countriesData" />
  </div>
</template>

<style></style>
