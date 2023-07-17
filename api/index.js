import axios from "axios";

const defaultConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const DefaultAPIInstance = axios.create(defaultConfig);
