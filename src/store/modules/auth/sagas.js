import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
// import { navigate } from '~/services/RootNavigation';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { deliverymanId } = payload;

    const response = yield call(api.get, `/deliverymen/${deliverymanId}`);

    const { data: deliveryman } = response.data;

    yield put(signInSuccess(deliveryman));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
