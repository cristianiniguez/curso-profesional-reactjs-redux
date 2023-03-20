import { FC } from 'react';
import { Badge, Card, Space } from 'antd';
import StarButton from './StarButton';
import { togglePokemonFavorite } from '../slices/pokemonsSlice';
import { useAppDispatch } from '../store';

type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
  favorite?: boolean;
};

const PokemonCard: FC<PokemonCardProps> = ({ id, name, image, types, favorite = false }) => {
  const dispatch = useAppDispatch();

  const cover = <img src={image} alt={name} />;

  const setFavorite = () => {
    dispatch(togglePokemonFavorite(id));
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
