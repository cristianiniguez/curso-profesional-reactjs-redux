import { FC } from 'react';
import { Col, Row } from 'antd';
import PokemonCard from './PokemonCard';

type PokemonListProps = {
  pokemons: PokemonDetail[];
};

const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <Row gutter={[16, 16]} style={{ paddingInline: 24 }}>
      {pokemons.map((pokemon) => (
        <Col key={pokemon.name} span={6}>
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            favorite={pokemon.favorite}
          />
        </Col>
      ))}
    </Row>
  );
};

export default PokemonList;
