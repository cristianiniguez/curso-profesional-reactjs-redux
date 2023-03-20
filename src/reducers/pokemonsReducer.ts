import { combineReducers, Reducer } from 'redux';

const dataReducer: Reducer<PokemonDetail[], Action> = (state = [], action) => {
  switch (action.type) {
    case 'GET_POKEMONS_SUCCESS':
      return action.payload;
    case 'SET_POKEMON_FAVORITE':
      return state.map((pokemon) => {
        if (action.payload.id !== pokemon.id) return pokemon;
        return { ...pokemon, favorite: !pokemon.favorite };
      });
    default:
      return state;
  }
};

const loadingReducer: Reducer<boolean, Action> = (state = false, action) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      return true;
    case 'GET_POKEMONS_SUCCESS':
    case 'GET_POKEMONS_FAILURE':
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer,
  loading: loadingReducer,
});
