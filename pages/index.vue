<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="(p, idx) in heroes" :key="idx">
      <NuxtLink to="/">{{ p }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const response = await useFetch('https://rickandmortyapi.com/api/character')
  const heroes = await response.data.value.results
</script>

<style scoped>

</style>