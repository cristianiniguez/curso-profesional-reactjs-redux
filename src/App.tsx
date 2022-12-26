import { Col, Row } from 'antd';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <main>
      <Row style={{ padding: 24 }}>
        <Col span={8} offset={8}>
          <SearchBar />
        </Col>
      </Row>
      <PokemonList />
    </main>
  );
}

export default App;
