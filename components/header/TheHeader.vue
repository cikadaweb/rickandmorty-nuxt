<template>
  <header class="bg-emerald-400 text-slate-50 shadow-sm">
    <div class="container flex justify-between mx-auto p-4">
      <NuxtLink class="text-xl font-bold" to="/">Rick & Morty</NuxtLink>
      <nav>
        <ul class="flex items-center gap-4">
          <li><NuxtLink to="/">Главная</NuxtLink></li>
          <li><NuxtLink to="/about">Обо мне</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
  border-bottom: 2px solid white;
}
</style>