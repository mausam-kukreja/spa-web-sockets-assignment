import types from '../../action_types';
import localCache from '../../localCache';
import decorators from '../../decorators';

export default params => (dispatch, getState) => {
  const { data } = params;
  const key = 'mySavedStocks';
  let payload = localCache.read(key) || {};
  if (data) {
    payload = {
      ...payload,
      ...decorators.stockData(undefined, data),
    };
  }
  localCache.write(key, payload, 3600 * 4);
  dispatch({ type: types.STOCK_UPDATE_RECIEVED, payload });
  return null;
};
