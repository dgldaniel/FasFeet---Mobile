import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import OrderDetails from './OrderDetails';

import { deliveriesRequest } from '~/store/modules/delivery/actions';

import {
  Container,
  OrderContainer,
  StatusOrder,
  DeliveryText,
  StatusOrderText,
} from './styles';

export default function Delivery() {
  const [isNotRunning, setRunning] = useState(false);
  const [undelivered, setUndelivered] = useState(true);

  const deliveries = useSelector(state => state.delivery.deliveries);
  const profileId = useSelector(state => state.user.profile.id);

  const dispatch = useDispatch();

  useEffect(() => {
    const statusSearchAPI = undelivered ? 'undelivered' : 'delivered';

    if (isNotRunning) dispatch(deliveriesRequest(profileId, statusSearchAPI));
  }, [dispatch, isNotRunning, profileId, undelivered]);

  function ListEmpty() {
    return <Text>Sem Encomenda</Text>;
  }

  function setStatusDeliveries() {
    if (!isNotRunning) setRunning(true);

    setUndelivered(prevStatus => !prevStatus);
  }

  return (
    <Container>
      <OrderContainer>
        <DeliveryText>Entregas</DeliveryText>
        <StatusOrder>
          <TouchableOpacity onPress={setStatusDeliveries}>
            <StatusOrderText status={undelivered}>Pendentes</StatusOrderText>
          </TouchableOpacity>

          <TouchableOpacity onPress={setStatusDeliveries}>
            <StatusOrderText status={!undelivered}>Entregues</StatusOrderText>
          </TouchableOpacity>
        </StatusOrder>
      </OrderContainer>

      <FlatList
        data={deliveries}
        keyExtractor={delivery => String(delivery.id)}
        renderItem={({ item }) => <OrderDetails order={item} />}
        ListEmptyComponent={ListEmpty}
      />
    </Container>
  );
}
