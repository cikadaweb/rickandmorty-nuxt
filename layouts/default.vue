<template>
  <div class="h-full bg-gray-100 min-w-[330px]">
    <TheHeader />
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/header/TheHeader.vue'

</script>