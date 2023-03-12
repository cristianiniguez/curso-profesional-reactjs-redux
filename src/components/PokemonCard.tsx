import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Badge, Card, Space } from 'antd';
import StarButton from './StarButton';
import { setFavoriteAction } from '../actions';

type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
  favorite?: boolean;
};

const PokemonCard: FC<PokemonCardProps> = ({ id, name, image, types, favorite = false }) => {
  const dispatch = useDispatch();

  const cover = <img src={image} alt={name} />;

  const setFavorite = () => {
    dispatch(setFavoriteAction(id));
  };

  const description = (
    <Space>
      {types.map(({ slot, type }) => (
        <Badge key={slot} text={type.name} color='#000' />
      ))}
    </Space>
  );

  return (
    <Card
      title={name}
      cover={cover}
      extra={<StarButton isFavorite={favorite} onClick={setFavorite} />}
    >
      <Card.Meta description={description} />
    </Card>
  );
};

export default PokemonCard;
