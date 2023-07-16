<template>
  <ul class="flex flex-col gap-4">
    <HeroItem 
      v-for="(hero, idx) in items" :key="idx"
      :item="hero"
    />
  </ul>
</template>

<script setup>
import HeroItem from '@/components/heroes-page/HeroItem.vue';

  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
  });
</script>