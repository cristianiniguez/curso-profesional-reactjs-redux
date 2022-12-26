import { FC } from 'react';
import { Col, Row } from 'antd';
import PokemonCard from './PokemonCard';

type PokemonListProps = {
  pokemons?: any[];
};

const PokemonList: FC<PokemonListProps> = ({ pokemons = Array(10).fill('') }) => {
  return (
    <Row gutter={[16, 16]}>
      {pokemons.map(() => (
        <Col span={6}>
          <PokemonCard />
        </Col>
      ))}
    </Row>
  );
};

export default PokemonList;
