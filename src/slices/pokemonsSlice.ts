import { createSlice } from '@reduxjs/toolkit';

type PokemonsState = {
  data: PokemonDetail[];
  loading: boolean;
};

const initialState: PokemonsState = {
  data: [],
  loading: false,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemons: (state, action) => {
      state.loading = true;
    },
    getPokemonsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getPokemonsFailure: (state, action) => {
      state.loading = false;
    },
    togglePokemonFavorite: (state, action) => {
      const pokemonIndex = state.data.findIndex((pokemon) => pokemon.id === action.payload.id);

      if (pokemonIndex >= 0) {
        const isFavorite = state.data[pokemonIndex].favorite;
        state.data[pokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { getPokemons, getPokemonsFailure, getPokemonsSuccess, togglePokemonFavorite } =
  pokemonsSlice.actions;

export const pokemonsReducer = pokemonsSlice.reducer;
