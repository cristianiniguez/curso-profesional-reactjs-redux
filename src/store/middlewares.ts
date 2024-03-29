import type { Middleware } from 'redux';

export const logger: Middleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
