<script setup>
import { ref } from 'vue'
import SearchIcon from '@/assets/svg/SearchIcon.vue'
import DownArrowIcon from '@/assets/svg/DownArrowIcon.vue'

const filterKey = ref('Filter by Region')
const searchKey = ref('')
</script>
<template>
  <section class="py-10 gap-4 flex justify-between items-center flex-wrap">
    <div class="relative text-dark-gray-input w-full max-w-[26rem]">
      <SearchIcon
        class="w-5 h-5 absolute left-6 top-1/2 transform -translate-y-1/2"
      />
      <input
        v-model="searchKey"
        @change="console.log(searchKey)"
        class="rounded h-16 pl-16 w-full shadow outline-none bg-white dark:bg-dark-blue"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
    <div class="relative max-w-48 w-full">
      <select
        class="appearance-none rounded h-16 shadow outline-none bg-white dark:bg-dark-blue w-full px-4 pr-10 cursor-pointer"
        v-model="filterKey"
      >
        <option value="Filter by Region">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <span
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      >
        <DownArrowIcon class="w-5 h-5" />
      </span>
    </div>
  </section>
</template>

<style></style>
