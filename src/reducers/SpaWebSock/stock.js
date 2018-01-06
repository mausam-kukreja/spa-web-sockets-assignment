import types from '../../action_types';

const initialStockState = {
  name: '',
  value: null,
  time: null,
  timeAgo: '',
};

const resultStockReducer = (state = initialStockState, action) => {
  switch (action.type) {
    case types.STOCK_UPDATE_RECIEVED: {
      const { name = '', value = null, time = null } = action.payload;
      return {
        ...state,
        name,
        value,
        time,
        timeAgo: '',
      };
    }
    default:
      return state;
  }
};

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case types.STOCK_UPDATE_RECIEVED: {
      const stocks = Object.keys(action.payload).map(sto => resultStockReducer(undefined, { ...action, payload: action.payload[sto] }));
      return stocks;
    }
    default:
      return state;
  }
}
