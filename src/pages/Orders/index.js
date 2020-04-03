import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Delivery from './Delivery';

import { Container } from './styles';

import { deliveriesRequest } from '~/store/modules/delivery/actions';

export default function Orders() {
  const profileId = useSelector(state => state.user.profile.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deliveriesRequest(profileId, 'undelivered'));
  }, [dispatch, profileId]);

  return (
    <Container>
      <Header />
      <Delivery />
    </Container>
  );
}
