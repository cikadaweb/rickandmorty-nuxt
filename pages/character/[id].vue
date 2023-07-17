<template>
  <div 
    v-if="!heroesStore.getLoading && heroesStore.getCurrentHeroe" 
    class="character bg-slate-50 p-8 shadow-lg rounded-xl"
  >
    <img class="character__image m-auto rounded-full transition duration-300 ease-in-out hover:scale-110" :src="heroesStore.getCurrentHeroe.image" alt="avatar">
    <div class="flex items-center justify-between mt-3">
      <div class="text-4xl">Досье:</div>
      <AppBadge :bgColor="heroStatusColor" textColor="text-slate-50">{{ heroStatus }}</AppBadge>
    </div>
    <div class="my-3 border-b-2 border-slate-300"></div>
    <ul class="text-xl">
      <li>Имя персонажа: {{ heroesStore.getCurrentHeroe.name }}</li>
      <li>Пол: {{ heroesStore.getCurrentHeroe.gender }}</li>
      <li>Вид: {{ heroesStore.getCurrentHeroe.species }}</li>
      <li>Локация: {{ heroesStore.getCurrentHeroe.location.name }}</li>
    </ul>
  </div>

  <div v-else-if="!heroesStore.getLoading && !heroesStore.getCurrentHeroe" class="text-2xl font-bold text-center mt-8">По данному запросу ничего не найдено!</div>

  <div v-else>
    <AppSpinner fullscreen />
  </div>
</template>

<script setup>
import AppBadge from '@/components/badge/AppBadge.vue';
import AppSpinner from '@/components/loader/AppSpinner.vue';
import { useHeroesStore } from '@/store/heroes'

  const route = useRoute();

  const heroesStore = useHeroesStore();
  heroesStore.fetchCurrentHeroe(route.params.id)

    const heroStatus = computed(() => {
      switch (heroesStore.getCurrentHeroe.status) {
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
      switch (heroesStore.getCurrentHeroe.status) {
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
</script>