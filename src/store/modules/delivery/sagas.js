import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { deliveriesSuccess, deliveriesFailure } from './actions';

function* deliveriesRequest({ payload: { deliverymanId, status } }) {
  try {
    const { data: deliveries } = yield call(
      api.get,
      `/deliverymen/${deliverymanId}/orders`,
      { params: { order: status } }
    );

    yield put(deliveriesSuccess(deliveries));
  } catch (error) {
    Alert.alert(
      'Falha na solicitação',
      'Houve um erro ao procurar as encomendas'
    );

    console.tron.log('error', error.message);

    yield put(deliveriesFailure());
  }
}

export default all([
  takeLatest('@delivery/DELIVERIES_REQUEST', deliveriesRequest),
]);
