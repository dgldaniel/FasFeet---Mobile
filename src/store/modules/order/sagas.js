import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { ordersSuccess, ordersFailure } from './actions';

function* ordersRequest({ payload: { deliverymanId, status } }) {
  try {
    const { data: orders } = yield call(
      api.get,
      `/deliverymen/${deliverymanId}/orders`,
      { params: { order: status } }
    );

    yield put(ordersSuccess(orders));
  } catch (error) {
    Alert.alert(
      'Falha na solicitação',
      'Houve um erro ao procurar as encomendas'
    );

    yield put(ordersFailure());
  }
}

export default all([takeLatest('@order/DELIVERIES_REQUEST', ordersRequest)]);
