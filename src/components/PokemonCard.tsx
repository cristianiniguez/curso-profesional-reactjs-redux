import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { FC } from 'react';

type PokemonCardProps = {
  name: string;
};

const PokemonCard: FC<PokemonCardProps> = ({ name }) => {
  const cover = (
    <img
      src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
      alt='Ditto'
    />
  );

  return (
    <Card title={name} cover={cover} extra={<StarOutlined />}>
      <Card.Meta description='fire, magic' />
    </Card>
  );
};

export default PokemonCard;
