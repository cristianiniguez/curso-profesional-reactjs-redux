import { FC, PropsWithChildren } from 'react';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { logger } from '../middlewares';
import { pokemonsReducer } from '../reducers/pokemons';

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk, logger));

const store = createStore(pokemonsReducer, composedEnhancers);

const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
