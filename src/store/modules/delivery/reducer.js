import produce from 'immer';

const INITIAL_STATE = {
  deliveries: null,
  loading: false,
  uri: null,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@delivery/DELIVERIES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/DELIVERIES_SUCCESS': {
        draft.loading = false;
        draft.deliveries = action.payload.deliveries;
        break;
      }
      case '@delivery/DELIVERIES_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@delivery/SHOW_SIGNATURE_IMAGE': {
        draft.uri = action.payload.uri;
        break;
      }
      default:
    }
  });
}
