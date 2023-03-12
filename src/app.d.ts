type PokemonTypeSummary = {
  name: string;
  url: string;
};

type PokemonSummary = {
  name: string;
  url: string;
};

type PokemonDetail = {
  name: string;
  sprites: { front_default: string };
  types: { slot: number; type: PokemonTypeSummary }[];
};

type GetPokemonsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
};

type GetPokemonReponse = PokemonDetail;

// store

type PokemonsState = {
  pokemons: PokemonDetail[];
};

type RootState = PokemonsState;

// actions

type Action = { type: 'SET_POKEMONS'; payload: Pokemon[] };

type AppThunk<ReturnType = void> = import('redux-thunk').ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
