<template>
  <div 
    v-if="!episodeStore.getLoading && episodeStore.getCurrentEpisode"
    class="episode bg-slate-50 p-8 shadow-lg rounded-xl">
    <h1 class="text-4xl">Эпизод: {{ episodeStore.getCurrentEpisode.name }} -{{ episodeStore.getCurrentEpisode.episode }}</h1>
    <div class="my-3 border-b-2 border-slate-300"></div>
    <h2 class="text-3xl mt-5">Дата премьеры: {{ episodeStore.getCurrentEpisode.air_date }}</h2>
    <div class="text-xl text-center mt-5">Герои эпизода</div>
    <AppSwiper :items="episodeStore.getCurrentEpisodeHeroes"/>
  </div>

  <div v-else-if="!episodeStore.getLoading && !episodeStore.getCurrentHeroe" class="text-2xl font-bold text-center mt-8">По данному запросу ничего не найдено!</div>

  <div v-else>
    <AppSpinner fullscreen />
  </div>
</template>

<script setup>
import AppSwiper from '@/components/swiper/AppSwiper.vue'
import AppSpinner from '@/components/loader/AppSpinner.vue'
import { useEpisodesStore } from '@/store/episodes'

  const route = useRoute();

  const episodeStore = useEpisodesStore();

  episodeStore.fetchCurrentEpisode(route.params.id);
</script>