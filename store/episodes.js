import { defineStore } from "pinia";
import axios from "axios";

export const useEpisodesStore = defineStore("episodes", {
  state: () => {
    return {
      currentEpisode: {},
      currentEpisodeHeroes: [],
    };
  },
  getters: {
    getCurrentEpisode() {
      return this.currentEpisode;
    },
    getCurrentEpisodeHeroes() {
      return this.currentEpisodeHeroes;
    },
  },
  actions: {
    async fetchCurrentEpisode(episodeID) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode/${episodeID}`
      );
      const episode = await response.data;
      const data = await episode;
      this.setCurrentEpisode(data);
      this.fetchEpisodeHeroesID();
    },
    setCurrentEpisode(payload) {
      this.currentEpisode = payload;
    },
    async fetchEpisodeHeroesID() {
      const { getLastSymbolID } = useUtils();
      const heroesID = this.currentEpisode.characters.map((url) => {
        return getLastSymbolID(url);
      });
      const heroesData = await Promise.all(
        heroesID.map((id) => this.fetchHeroesData(id))
      );
      this.setCurrentEpisodeHeroes(heroesData);
    },
    async fetchHeroesData(heroId) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${heroId}`
      );
      const data = await response;
      return data.data;
    },
    setCurrentEpisodeHeroes(payload) {
      this.currentEpisodeHeroes = payload;
    },
  },
});
