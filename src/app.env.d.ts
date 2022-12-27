type Pokemon = {
  name: string;
};

type GetPokemonsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

// store

type PokemonsState = {
  pokemons: Pokemon[];
};

type RootState = PokemonsState;

// actions

type Action = { type: 'SET_POKEMONS'; payload: Pokemon[] };
