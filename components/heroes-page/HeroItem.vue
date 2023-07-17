<template>
  <li class="hero-item text-base bg-slate-50 shadow-lg p-2 sm:p-4">
    <div class="hero-item__row flex flex-wrap justify-between mx-3 my-0">
      <div class="hero-item__column flex gap-4 px-3 py-0">
        <div class="relative self-start shrink-0">
          <img
            :src="item.image"
            class="w-full h-20 sm:h-32 md:h-48 object-cover rounded-full transition duration-300 ease-in-out hover:shadow-lg"
            alt="avatar" 
          />
          <div class="block xl:hidden absolute -bottom-1 right-1 w-3 h-3 sm:-bottom-2 sm:right-2 sm:w-5 sm:h-5 md:-bottom-2 md:right-2 md:w-7 md:h-7 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          :class="heroStatusColor"></div>
        </div>
        <ul>
          <li class="mt-1"><span class="font-bold">Имя:</span> <NuxtLink class="  hover:text-emerald-500" :to="`/character/${characterID(item.url)}`">{{ item.name }}</NuxtLink></li>
          <li class="mt-1"><span class="font-bold">Пол:</span> {{ item.gender }}</li>
          <li class="mt-1"><span class="font-bold">Вид:</span> {{ item.species }}</li>
        </ul>
      </div>
      <div class="hero-item__column flex flex-col justify-between px-3 py-0">
        <div class="hidden xl:block text-end">
          <AppBadge :bgColor="heroStatusColor" textColor="text-slate-50">{{ heroStatus }}</AppBadge>
        </div>
        <div class="flex items-center flex-wrap gap-2 mt-3 xl:mt-0">
          <span class="whitespace-nowrap">Эпизоды с его участием: </span>
          <AppBadge class="transition duration-300 ease-in-out hover:scale-110" v-for="(episode, idx) in getFiveEpisodes(item.episode)" :key="idx" bgColor="bg-amber-500" textColor="text-slate-50">
            <NuxtLink :to="`/episode/${episodeNumber(episode)}`">Серия {{ episodeNumber(episode) }}</NuxtLink>
          </AppBadge>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import AppBadge from '@/components/badge/AppBadge.vue';

  const { getLastSymbolID } = useUtils();

  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });

  const episodeNumber = ((link) => {
    return getLastSymbolID(link)
  });

  const characterID = ((url) => {
    return getLastSymbolID(url)
  });

  const heroStatus = computed(() => {
    switch (props.item.status) {
      case 'Alive':
        return 'Жив'
        break;
      case 'Dead':
        return 'Погиб'
        break;
      default:
        return 'Неизвестно'
        break;
    }
  });

  const heroStatusColor = computed(() => {
    switch (props.item.status) {
      case 'Alive':
        return 'bg-emerald-500'
        break;
      case 'Dead':
        return 'bg-red-500'
        break;
      default:
        return 'bg-stone-300'
        break;
    }
  });

  const getFiveEpisodes = ((episodes) => {
    return episodes.slice(0, 5);
  });

</script>