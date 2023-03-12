import { getPokemon, getPokemons } from '../api';

export const getPokemonsAction = (): AppThunk => async (dispatch) => {
  dispatch({ type: 'GET_POKEMONS' });

  try {
    const pokemonSummaries = await getPokemons();
    const pokemonDetails = await Promise.all(pokemonSummaries.map(getPokemon));
    dispatch({ type: 'GET_POKEMONS_SUCCESS', payload: pokemonDetails });
  } catch (error) {
    dispatch({ type: 'GET_POKEMONS_FAILURE' });
  }
};

export const setFavoriteAction = (pokemonId: number): Action => ({
  type: 'SET_POKEMON_FAVORITE',
  payload: { id: pokemonId },
});
