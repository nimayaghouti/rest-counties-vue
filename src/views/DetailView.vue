<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCountryService } from '@/services/getCountryService'
import useLoading from '@/composable/useLoading'
import CountryDetail from '@/components/view/detail/CountryDetail.vue'
import LeftArrowIcon from '@/assets/svg/LeftArrowIcon.vue'

const countryData = ref(null)
const route = useRoute()
const { isLoading } = useLoading()

const fetchCountryData = async () => {
  try {
    countryData.value = await getCountryService(route.params.cca3)
    console.log(countryData.value)
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchCountryData)

watch(() => route.params.cca3, fetchCountryData)
</script>

<template>
  <div class="text-base text-dark-blue-text dark:text-white">
    <button
      @click="$router.push('/')"
      class="flex items-center gap-3 bg-white dark:bg-dark-blue shadow rounded-md my-16 py-2 px-10 cursor-pointer"
    >
      <LeftArrowIcon class="w-4 h-4" />
      Back
    </button>
    <p v-if="isLoading">Loading...</p>
    <template v-else-if="countryData">
      <CountryDetail :countryData="countryData" />
    </template>
    <p v-else>Not Found.</p>
  </div>
</template>

<style></style>
