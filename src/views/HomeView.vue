<script setup>
import { onMounted, ref, computed } from 'vue'
import { getCountriesService } from '@/services/getCountriesService'
import OptionsPanel from '@/components/view/home/OptionsPanel.vue'
import CountriesContainer from '@/components/view/home/CountriesContainer.vue'

const countriesData = ref([])
const filterKey = ref('Filter by Region')
const searchKey = ref('')

onMounted(async () => {
  try {
    countriesData.value = await getCountriesService()
  } catch (error) {
    console.error(error)
  }
})

const filteredCountries = computed(() => {
  return countriesData.value.filter(country => {
    const matchesRegion =
      filterKey.value === 'Filter by Region' ||
      country.region.toLowerCase() === filterKey.value.toLowerCase()
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchKey.value.toLowerCase())
    return matchesRegion && matchesSearch
  })
})
</script>

<template>
  <div class="text-sm text-dark-blue-text dark:text-white">
    <OptionsPanel v-model:filterKey="filterKey" v-model:searchKey="searchKey" />
    <CountriesContainer :countriesData="filteredCountries" />
  </div>
</template>
