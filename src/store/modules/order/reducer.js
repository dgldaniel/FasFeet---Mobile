import produce from 'immer';

const INITIAL_STATE = {
  orders: null,
  loading: false,
  uri: null,
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@order/DELIVERIES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@order/DELIVERIES_SUCCESS': {
        draft.loading = false;
        draft.orders = action.payload.orders;
        break;
      }
      case '@order/DELIVERIES_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@order/SHOW_SIGNATURE_IMAGE': {
        draft.uri = action.payload.uri;
        break;
      }
      default:
    }
  });
}
