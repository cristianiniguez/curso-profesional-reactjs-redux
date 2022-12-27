import { FC, PropsWithChildren } from 'react';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import { pokemonsReducer } from '../reducers/pokemons';

const store = createStore(pokemonsReducer);

const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
