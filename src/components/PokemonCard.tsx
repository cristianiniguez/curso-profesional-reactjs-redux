import { FC } from 'react';
import { Badge, Card, Space } from 'antd';
import { StarOutlined } from '@ant-design/icons';

type PokemonCardProps = {
  name: string;
  image: string;
  types: { slot: number; type: PokemonTypeSummary }[];
};

const PokemonCard: FC<PokemonCardProps> = ({ name, image, types }) => {
  const cover = <img src={image} alt={name} />;

  const description = (
    <Space>
      {types.map(({ slot, type }) => (
        <Badge key={slot} text={type.name} color='#000' />
      ))}
    </Space>
  );

  return (
    <Card title={name} cover={cover} extra={<StarOutlined />}>
      <Card.Meta description={description} />
    </Card>
  );
};

export default PokemonCard;
