<template>
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
        translate: ['-100%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="slide in items" :key="slide">
      <img class="w-[300px] text-center" :src="slide.image" alt="avatar">
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
  const props = defineProps({
    items: {
      type: Array,
      default() {
        return []
      }
    },
  });
</script>

<style scoped>
.swiper-slide {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important; 
}
</style>