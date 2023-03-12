import { getPokemon } from '../api';

export const setPokemonsAction = (payload: PokemonDetail[]): Action => ({
  type: 'SET_POKEMONS',
  payload,
});

export const getPokemonsWithDetails =
  (pokemons: PokemonSummary[] = []): AppThunk =>
  async (dispatch) => {
    const pokemonDetails = await Promise.all(pokemons.map(getPokemon));
    dispatch(setPokemonsAction(pokemonDetails));
  };
