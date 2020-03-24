import React from 'react';

import OrderDetails from './OrderDetails';

import {
  Container,
  OrderContainer,
  StatusOrder,
  DeliveryText,
  StatusOrderText,
} from './styles';

export default function Delivery() {
  return (
    <Container>
      <OrderContainer>
        <DeliveryText>Entregas</DeliveryText>
        <StatusOrder>
          <StatusOrderText>Pendentes</StatusOrderText>
          <StatusOrderText>Entregues</StatusOrderText>
        </StatusOrder>
      </OrderContainer>

      <OrderDetails />
    </Container>
  );
}
