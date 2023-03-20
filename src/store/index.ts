import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonsReducer } from '../slices/pokemonsSlice';
import { logger } from './middlewares';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = <Selected>(
  ...args: Parameters<typeof useSelector<RootState, Selected>>
) => useSelector<RootState, Selected>(...args);

export const useAppDispatch = () => useDispatch<AppDispatch>();
