import { FC, useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonsAction } from './actions';
// components
import { Col, Row } from 'antd';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
// api
import { getPokemon, getPokemons } from './api';

const App: FC = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons);
  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    const pokemonSummaries = await getPokemons();
    const pokemonDetails = await Promise.all(pokemonSummaries.map(getPokemon));
    dispatch(setPokemonsAction(pokemonDetails));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <main>
      <Row style={{ padding: 24 }}>
        <Col span={4} offset={10}>
          <img src='logo.svg' alt='Pokedux Logo' />
        </Col>
      </Row>

      <Row style={{ padding: 24 }}>
        <Col span={8} offset={8}>
          <SearchBar />
        </Col>
      </Row>

      <Row style={{ padding: 24 }}>
        <Col span={22} offset={1}>
          <PokemonList pokemons={pokemons} />
        </Col>
      </Row>
    </main>
  );
};

export default App;
