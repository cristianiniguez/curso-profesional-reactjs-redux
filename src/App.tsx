import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import { getPokemons } from './api';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons().then(setPokemons);
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
}

export default App;
