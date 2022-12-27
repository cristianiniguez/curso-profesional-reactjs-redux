const initialState: PokemonsState = {
  pokemons: [],
};

export const pokemonsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};
