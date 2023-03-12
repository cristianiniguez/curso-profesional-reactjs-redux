import { FC, useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsAction } from './actions';
// components
import { Col, Row, Spin } from 'antd';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';

const App: FC = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons);
  const loading = useSelector((state: RootState) => state.loading);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPokemonsAction());
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
        {loading ? (
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col>
        ) : (
          <Col span={22} offset={1}>
            <PokemonList pokemons={pokemons} />
          </Col>
        )}
      </Row>
    </main>
  );
};

export default App;
