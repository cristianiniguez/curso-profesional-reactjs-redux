type Pokemon = {
  name: string;
};

type GetPokemonsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};
