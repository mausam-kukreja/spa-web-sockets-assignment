import types from '../../action_types';

const initialStockState = {
  name: '',
  value: '',
  time: '',
  timeAgo: '',
};

const resultStockReducer = (state = initialStockState, action) => {
  switch (action.type) {
    case types.STOCK_UPDATE_RECIEVED: {
      return {
        ...state,
        name: action.payload.name || '',
        value: action.payload.value || '',
        time: action.payload.value || '',
        timeAgo: action.payload.value || '',
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
