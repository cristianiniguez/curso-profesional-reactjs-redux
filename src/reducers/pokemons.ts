const initialState: PokemonsState = {
  loading: false,
  pokemons: [],
};

export const pokemonsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      return { ...state, loading: true };
    case 'GET_POKEMONS_SUCCESS':
      return { ...state, loading: false, pokemons: action.payload };
    case 'GET_POKEMONS_FAILURE':
      return { ...state, loading: false };
    case 'SET_POKEMON_FAVORITE':
      return {
        ...state,
        pokemons: state.pokemons.map((pokemon) => {
          if (action.payload.id !== pokemon.id) return pokemon;
          return { ...pokemon, favorite: !pokemon.favorite };
        }),
      };
    default:
      return state;
  }
};
