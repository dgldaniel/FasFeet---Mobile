import React from 'react';

import Header from './Header';
import Delivery from './Delivery';

import { Container } from './styles';

export default function Orders() {
  return (
    <Container>
      <Header />
      <Delivery />
    </Container>
  );
}
