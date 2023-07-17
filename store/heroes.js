import { defineStore } from "pinia";
import { DefaultAPIInstance } from "@/api";

export const useHeroesStore = defineStore("heroes", {
  state: () => {
    return {
      heroes: [],
      currentHero: {},
      loading: false,
    };
  },
  getters: {
    getHeroes() {
      return this.heroes;
    },
    getCurrentHeroe() {
      return this.currentHero;
    },
    getLoading() {
      return this.loading;
    },
  },
  actions: {
    async fetchHeroes() {
      this.setLoading(true);
      try {
        const response = await DefaultAPIInstance.get(
          "https://rickandmortyapi.com/api/character"
        );
        const heroes = await response.data;
        const data = await heroes;
        this.setHeroes(data.results);
      } catch (error) {
        this.setHeroes([]);
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
    async filterHeroes({ name, status }) {
      this.setLoading(true);
      try {
        const params = new URLSearchParams();
        if (name) {
          params.append("name", name);
        }
        if (status) {
          params.append("status", status);
        }

        const response = await DefaultAPIInstance.get(
          `https://rickandmortyapi.com/api/character/?${params.toString()}`
        );
        const heroes = await response.data;
        const data = await heroes;
        this.setHeroes(data.results);
      } catch (error) {
        this.setHeroes([]);
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
    async fetchCurrentHeroe(characterID) {
      this.setLoading(true);
      try {
        const response = await DefaultAPIInstance.get(
          `https://rickandmortyapi.com/api/character/${characterID}`
        );
        const heroe = await response.data;
        const data = await heroe;
        this.currentHero = data;
        this.setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
    setHeroes(payload) {
      this.heroes = payload;
    },
    setLoading(payload) {
      this.loading = payload;
    },
  },
  persist: true,
});
