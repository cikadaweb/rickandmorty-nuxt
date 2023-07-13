<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink class="font-bold" to="/">Rick & Morty</NuxtLink>
        <ul class="flex items-center gap-4">
          <li>
            <NuxtLink to="/">Main</NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn" to="/about">About me</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>