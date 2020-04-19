export function ordersRequest(deliverymanId, status) {
  return {
    type: '@order/DELIVERIES_REQUEST',
    payload: { deliverymanId, status },
  };
}

export function ordersSuccess(orders) {
  return {
    type: '@order/DELIVERIES_SUCCESS',
    payload: { orders },
  };
}

export function ordersFailure() {
  return {
    type: '@order/DELIVERIES_FAILURE',
  };
}

export function showSignatureImage(uri) {
  return {
    type: '@order/SHOW_SIGNATURE_IMAGE',
    payload: { uri },
  };
}
