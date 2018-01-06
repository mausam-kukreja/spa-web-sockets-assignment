import types from '../../action_types';

const initialState = {
  loading: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.STOCK_UPDATE_RECIEVED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
