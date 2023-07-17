import { defineStore } from "pinia";
import { DefaultAPIInstance } from "@/api";

export const useEpisodesStore = defineStore("episodes", {
  state: () => {
    return {
      currentEpisode: {},
      currentEpisodeHeroes: [],
      loading: false,
    };
  },
  getters: {
    getCurrentEpisode() {
      return this.currentEpisode;
    },
    getCurrentEpisodeHeroes() {
      return this.currentEpisodeHeroes;
    },
    getLoading() {
      return this.loading;
    },
  },
  actions: {
    async fetchCurrentEpisode(episodeID) {
      this.setLoading(true);
      try {
        const response = await DefaultAPIInstance.get(
          `https://rickandmortyapi.com/api/episode/${episodeID}`
        );
        const episode = await response.data;
        const data = await episode;
        this.setCurrentEpisode(data);
        this.fetchEpisodeHeroesID();
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
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
      const response = await DefaultAPIInstance.get(
        `https://rickandmortyapi.com/api/character/${heroId}`
      );
      const data = await response;
      return data.data;
    },
    setCurrentEpisode(payload) {
      this.currentEpisode = payload;
    },
    setCurrentEpisodeHeroes(payload) {
      this.currentEpisodeHeroes = payload;
    },
    setLoading(payload) {
      this.loading = payload;
    },
  },
  persist: true,
});
