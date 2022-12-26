import { FC } from 'react';
import { Col, Row } from 'antd';
import PokemonCard from './PokemonCard';

type PokemonListProps = {
  pokemons: Pokemon[];
};

const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
  console.log('🚀 ~ file: PokemonList.tsx:10 ~ pokemons', pokemons);

  return (
    <Row gutter={[16, 16]} style={{ paddingInline: 24 }}>
      {pokemons.map((pokemon) => (
        <Col key={pokemon.name} span={6}>
          <PokemonCard name={pokemon.name} />
        </Col>
      ))}
    </Row>
  );
};

export default PokemonList;
