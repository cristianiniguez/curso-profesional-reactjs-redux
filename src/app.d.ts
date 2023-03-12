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
  loading: boolean;
  pokemons: PokemonDetail[];
};

type RootState = PokemonsState;

// actions

type Action =
  | { type: 'GET_POKEMONS' }
  | { type: 'GET_POKEMONS_SUCCESS'; payload: PokemonDetail[] }
  | { type: 'GET_POKEMONS_FAILURE' };

type AppDispatch = ThunkDispatch<RootState, any, Action>;

type AppThunk<ReturnType = void> = import('redux-thunk').ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
