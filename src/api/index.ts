import axios from 'axios';

const pokeApi = axios.create({ baseURL: 'https://pokeapi.co/api/v2' });

export const getPokemons = async () => {
  const response = await pokeApi.get<GetPokemonsResponse>('/pokemon?limit=10&offset=0');
  return response.data.results;
};

export const getPokemon = async (pokemon: PokemonSummary) => {
  const response = await axios.get<GetPokemonReponse>(pokemon.url);
  return response.data;
};
