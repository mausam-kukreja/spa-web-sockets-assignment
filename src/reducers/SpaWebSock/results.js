import types from '../../action_types';
import stock from './stock';

const initialState = {
  stocks: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    case types.STOCK_UPDATE_RECIEVED: {
      return {
        ...state,
        stocks: stock(state, action),
      };
    }
    default:
      return state;
  }
}
