<template>
  <section class="hero">
    <div class="hero__row flex flex-col gap-4">
      <div class="hero__column flex justify-left md:justify-end items-end flex-wrap gap-4">
        <AppInput 
          v-model:value="heroName"
          name="heroName"
          label="Поиск героя по имени:"
          placeholder="Введите имя героя"
          width="300px"
        />
        <AppSelect
          :options="heroStatuses"
          v-model:value="heroStatus"
          width="300px"
        />
      </div>
      <div class="hero__column">
        <HeroesList
          v-if="isShowHeroesList" 
          :items="heroesStore.getHeroes"
        />
        <div v-else class="text-2xl font-bold text-center mt-8">По данному запросу ничего не найдено!</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppInput from '@/components/input/AppInput.vue';
import AppSelect from '@/components/select/AppSelect.vue';
import HeroesList from '@/components/heroes-page/HeroesList.vue'
import {useHeroesStore} from '@/store/heroes'

  const heroesStore = useHeroesStore();

  heroesStore.fetchHeroes()

  
  const heroName = ref('');
  const heroStatus = ref('Выбрать');

  const heroStatuses = ref([
    { name: 'Жив', value: 'alive' },
    { name: 'Погиб', value: 'dead' },
    { name: 'Неизвестно', value: 'unknown' },
  ]);

  const heroStatusConver = (statusText) => {
    switch (statusText) {
      case 'Жив':
        return 'alive'
        break;
      case 'Погиб':
        return 'dead'
        break;
      case 'Неизвестно':
        return 'unknown'
        break;
      default:
        return null
        break;
    }
  };
  const isShowHeroesList = computed(() => {
    if (heroesStore.getHeroes.length > 0) {
      return true;
    } else {
      return false;
    }
  });

  watch([heroName, heroStatus], ([heroName, heroStatus]) => {
    heroesStore.filterHeroes({
      name: heroName,
      status: heroStatusConver(heroStatus)
    });
  });
</script>