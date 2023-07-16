<template>
  <div class="episode bg-slate-50 p-8 shadow-lg rounded-xl">
    <h1 class="text-4xl">Эпизод: {{ episodeStore.getCurrentEpisode.name }} -{{ episodeStore.getCurrentEpisode.episode }}</h1>
    <div class="my-3 border-b-2 border-slate-300"></div>
    <h2 class="text-3xl mt-5">Дата премьеры: {{ episodeStore.getCurrentEpisode.air_date }}</h2>
    <div class="text-xl text-center mt-5">Герои эпизода</div>
    <Swiper
      class="mt-5"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="hero in episodeStore.getCurrentEpisodeHeroes" :key="hero">
        <div class="relative pt-[600px] flex justify-center items-center">
          <img class="absolute top-0 left-0 w-full h-full object-cover" :src="hero.image" alt="avatar">
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { useEpisodesStore } from '@/store/episodes'

  const route = useRoute();

  const episodeStore = useEpisodesStore();

  episodeStore.fetchCurrentEpisode(route.params.id);
</script>