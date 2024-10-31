<script setup>
defineProps({
  countryData: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <router-link :to="`/detail/${countryData.cca3}`">
    <div
      class="max-w-72 h-[22rem] w-full bg-white dark:bg-dark-blue rounded-md shadow overflow-hidden"
    >
      <div class="h-[45%]">
        <img
          :src="countryData.flags.png"
          class="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div class="p-6 space-y-2">
        <h3 class="font-bold text-lg mb-4">{{ countryData.name.common }}</h3>
        <p class="space-x-1">
          <span class="font-bold">Population:</span>
          <span class="font-light">{{
            countryData.population.toLocaleString()
          }}</span>
        </p>
        <p class="space-x-1">
          <span class="font-bold">Region:</span>
          <span class="font-light">{{ countryData.region }}</span>
        </p>
        <p class="space-x-1">
          <span class="font-bold">Capital:</span>
          <span class="font-light">{{ countryData?.capital?.[0] }}</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<style></style>
