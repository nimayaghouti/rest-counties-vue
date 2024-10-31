<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCountryService } from '@/services/getCountryService'
const countryData = ref(null)

const route = useRoute()

onMounted(async () => {
  try {
    countryData.value = await getCountryService(route.params.cca3)
    console.log(countryData.value)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="text-base">
    <template v-if="countryData">
      {{ countryData }}
    </template>
    <p v-else>Not Found.</p>
  </div>
</template>

<style></style>
