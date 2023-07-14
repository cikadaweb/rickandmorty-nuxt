<template>
  <li class="hero-item text-base bg-slate-50">
    <div class="hero-item__row flex-wrap justify-between">
      <div class="hero-item__column flex gap-4">
        <div class="relative shrink-0">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            class="w-full h-20 sm:h-32 md:h-48 object-cover rounded-full"
            alt="avatar" 
          />
          <div class="absolute -bottom-1 right-1 w-3 h-3 sm:-bottom-2 sm:right-2 sm:w-5 sm:h-5 md:-bottom-2 md:right-2 md:w-7 md:h-7 bg-emerald-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <ul>
          <li class="whitespace-nowrap mt-1"><span class="font-bold">Имя:</span> Morty Smith</li>
          <li class="whitespace-nowrap mt-1"><span class="font-bold">Пол:</span> Male</li>
          <li class="whitespace-nowrap mt-1"><span class="font-bold">Вид:</span> Human</li>
        </ul>
      </div>
      <div class="hero-item__column flex flex-col justify-between">
        <div class="hidden lg:block text-end">
          <AppBadge bgColor="bg-emerald-500" textColor="text-slate-50">Active</AppBadge>
        </div>
        <div class="flex items-center flex-wrap gap-2 mt-3 xl:mt-0">
          <span class="whitespace-nowrap">Эпизоды с его участием: </span>
          <AppBadge bgColor="bg-amber-500" textColor="text-slate-50">S01E01</AppBadge>
          <AppBadge bgColor="bg-amber-500" textColor="text-slate-50">S01E02</AppBadge>
          <AppBadge bgColor="bg-amber-500" textColor="text-slate-50">S01E03</AppBadge>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import AppBadge from '@/components/badge/AppBadge.vue'

  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });
</script>

<style scoped>

.hero-item {
  padding: 20px;
}
.hero-item__row {
  display: flex;
  margin: 0 12px;
}

.hero-item__column {
  padding: 0 12px;
}
</style>