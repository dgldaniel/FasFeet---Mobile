import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OrderDetails from './OrderDetails';

import { deliveriesRequest } from '~/store/modules/delivery/actions';

import {
  Container,
  OrderContainer,
  StatusOrder,
  DeliveryText,
  StatusOrderText,
  ListDelivery,
} from './styles';

export default function Delivery() {
  const deliveries = useSelector(state => state.delivery.deliveries);
  const profileId = useSelector(state => state.user.profile.id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (deliveries === null) {
      dispatch(deliveriesRequest(profileId));
    }
  }, [deliveries, dispatch, profileId]);

  return (
    <Container>
      <OrderContainer>
        <DeliveryText>Entregas</DeliveryText>
        <StatusOrder>
          <StatusOrderText status>Pendentes</StatusOrderText>
          <StatusOrderText>Entregues</StatusOrderText>
        </StatusOrder>
      </OrderContainer>

      <ListDelivery
        data={deliveries}
        keyExtractor={delivery => String(delivery.id)}
        renderItem={({ item }) => <OrderDetails order={item} />}
      />
    </Container>
  );
}
