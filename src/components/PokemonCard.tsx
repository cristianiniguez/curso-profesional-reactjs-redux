import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = () => {
  const cover = (
    <img
      src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
      alt='Ditto'
    />
  );

  return (
    <Card title='Ditto' cover={cover} extra={<StarOutlined />}>
      <Card.Meta description='fire, magic' />
    </Card>
  );
};

export default PokemonCard;
