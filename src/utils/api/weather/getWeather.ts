import axios from 'axios';
import { Search } from 'models/Search';

export const getWeatherData = (postcode: string): Promise<Search[]> => (
  axios.get(`
    ${import.meta.env.VITE_APP_API_URL}/search.json?q=${postcode}&key=${import.meta.env.VITE_APP_API_KEY}`)
    .then(res => res.data)
);