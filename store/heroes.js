import { defineStore } from "pinia";

export const useHeroesStore = defineStore("heroes", {
  state: () => {
    return {
      heroes: [
        {
          id: 1,
          name: "Джесси Пинкман",
        },
      ],
    };
  },
  actions: {},
  getters: {},
  persist: true,
});
