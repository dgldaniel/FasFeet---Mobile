export function deliveriesRequest(deliverymanId) {
  return {
    type: '@delivery/DELIVERIES_REQUEST',
    payload: { deliverymanId },
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
