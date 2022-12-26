import axios from 'axios';

const pokeApi = axios.create({ baseURL: 'https://pokeapi.co/api/v2' });

export const getPokemons = async () => {
  const response = await pokeApi.get<GetPokemonsResponse>('/pokemon?limit=100&offset=0');
  return response.data.results;
};
