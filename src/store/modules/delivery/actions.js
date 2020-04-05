export function deliveriesRequest(deliverymanId, status) {
  return {
    type: '@delivery/DELIVERIES_REQUEST',
    payload: { deliverymanId, status },
  };
}

export function deliveriesSuccess(deliveries) {
  return {
    type: '@delivery/DELIVERIES_SUCCESS',
    payload: { deliveries },
  };
}

export function deliveriesFailure() {
  return {
    type: '@delivery/DELIVERIES_FAILURE',
  };
}

export function showSignatureImage(uri) {
  return {
    type: '@delivery/SHOW_SIGNATURE_IMAGE',
    payload: { uri },
  };
}
