import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Order from './Order';

import { Container } from './styles';

import { ordersRequest } from '~/store/modules/order/actions';

export default function Orders() {
  const profileId = useSelector(state => state.user.profile.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ordersRequest(profileId, 'undelivered'));
  }, [dispatch, profileId]);

  return (
    <Container>
      <Header />
      <Order />
    </Container>
  );
}
