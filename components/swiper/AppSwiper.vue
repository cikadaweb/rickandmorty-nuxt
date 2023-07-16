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
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="slide in items" :key="slide">
      <div class="relative pt-[300px] flex justify-center items-center">
        <img class="absolute top-0 left-0 w-full h-full object-cover" :src="slide.image" alt="avatar">
      </div>
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