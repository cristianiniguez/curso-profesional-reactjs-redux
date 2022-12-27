import { FC, useEffect, useState } from 'react';
// redux
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { setPokemonsAction } from './actions';
// components
import { Col, Row } from 'antd';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
// api
import { getPokemons } from './api';

type AppStateProps = { pokemons: Pokemon[] };
type AppDispatchProps = { setPokemons: (payload: Pokemon[]) => void };
type AppOwnProps = {};
type AppProps = AppStateProps & AppDispatchProps & AppOwnProps;

const App: FC<AppProps> = ({ pokemons, setPokemons }) => {
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
};

const mapStateToProps: MapStateToProps<AppStateProps, AppOwnProps, RootState> = (
  state: RootState,
) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps: MapDispatchToProps<AppDispatchProps, AppOwnProps> = (dispatch) => ({
  setPokemons: (payload: Pokemon[]) => dispatch(setPokemonsAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
