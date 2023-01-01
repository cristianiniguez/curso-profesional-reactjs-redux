import type { Middleware } from 'redux';

export const logger: Middleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring: Middleware = (store) => (next) => (actionInfo) => {
  const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
  const updatedAction = { ...actionInfo, action: { ...actionInfo.action, payload: featured } };
  next(updatedAction);
};
