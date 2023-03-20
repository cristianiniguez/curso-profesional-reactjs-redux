type PokemonTypeSummary = {
  name: string;
  url: string;
};

type PokemonSummary = {
  name: string;
  url: string;
};

type PokemonType = { slot: number; type: PokemonTypeSummary };

type PokemonDetail = {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: PokemonType[];
  favorite?: boolean;
};

type GetPokemonsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
};

type GetPokemonReponse = PokemonDetail;
