import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from './';

const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
