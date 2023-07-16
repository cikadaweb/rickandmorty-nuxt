import { defineStore } from "pinia";
import axios from "axios";

export const useHeroesStore = defineStore("heroes", {
  state: () => {
    return {
      heroes: [],
      currentHero: {},
    };
  },
  getters: {
    getHeroes() {
      return this.heroes;
    },
    getCurrentHeroe() {
      return this.currentHero;
    },
  },
  actions: {
    async fetchHeroes() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        const heroes = await response.data;
        const data = await heroes;
        this.setHeroes(data.results);
      } catch (error) {
        console.log(error);
      }
    },
    async filterHeroes({ name, status }) {
      try {
        const params = new URLSearchParams();
        if (name) {
          params.append("name", name);
        }
        if (status) {
          params.append("status", status);
        }

        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?${params.toString()}`
        );
        const heroes = await response.data;
        const data = await heroes;
        this.setHeroes(data.results);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCurrentHeroe(characterID) {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${characterID}`
        );
        const heroe = await response.data;
        const data = await heroe;
        this.currentHero = data;
      } catch (error) {
        console.log(error);
      }
    },
    setHeroes(payload) {
      this.heroes = payload;
    },
  },
  persist: true,
});
