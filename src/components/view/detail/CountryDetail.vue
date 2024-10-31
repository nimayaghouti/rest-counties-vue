<script setup>
import { computed } from 'vue'
import { countryMap } from '@/utils/countryMap'

const props = defineProps({
  countryData: {
    type: Object,
    required: true,
  },
})

const nativeCommonName = computed(() => {
  const firstKey = Object.keys(props.countryData.name.nativeName || {})[0]
  return props.countryData.name.nativeName[firstKey]?.common || '-'
})

const currencyNames = computed(() => {
  return Object.values(props.countryData.currencies)
    .map(currency => currency.name)
    .join(', ')
})

const languagesNames = computed(() => {
  return Object.values(props.countryData.languages).join(', ')
})
</script>
<template>
  <section
    class="flex flex-wrap items-center justify-center sm:justify-between"
  >
    <div class="w-[45%] min-w-80 h-[40vh] max-sm:h-[20vh]">
      <img
        :src="countryData.flags.png"
        class="h-full w-full object-contain"
        alt=""
      />
    </div>
    <div class="w-[45%] min-w-80 h-[40vh] max-sm:h-[20vh] py-16">
      <h3 class="font-bold text-2xl mb-4">{{ countryData.name.common }}</h3>
      <div class="h-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div class="space-y-4">
          <p class="space-x-1">
            <span class="font-bold">Native Name:</span>
            <span class="font-light">{{ nativeCommonName }}</span>
          </p>
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
            <span class="font-bold">Sub Region:</span>
            <span class="font-light">{{ countryData.subregion }}</span>
          </p>
          <p class="space-x-1">
            <span class="font-bold">Capital:</span>
            <span class="font-light">{{ countryData?.capital?.[0] }}</span>
          </p>
        </div>

        <div class="space-y-4">
          <p class="space-x-1">
            <span class="font-bold">Top Level Domain:</span>
            <span class="font-light">{{ countryData.tld?.[0] }}</span>
          </p>
          <p class="space-x-1">
            <span class="font-bold">Currencies:</span>
            <span class="font-light">{{ currencyNames }}</span>
          </p>
          <p class="space-x-1">
            <span class="font-bold">Languages:</span>
            <span class="font-light">{{ languagesNames }}</span>
          </p>
        </div>

        <div class="flex flex-wrap items-center col-span-1 sm:col-span-2 gap-2">
          <p class="font-bold">Border Countries:</p>
          <template v-if="countryData.borders">
            <router-link
              v-for="(border, index) in countryData.borders"
              :key="index"
              :to="`/detail/${border}`"
              class="shadow dark:shadow-md rounded-md py-1 px-4"
            >
              {{ countryMap[border] || border }}
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
