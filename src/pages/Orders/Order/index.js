import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import OrderDetails from './OrderDetails';

import { ordersRequest } from '~/store/modules/order/actions';

import {
  Container,
  OrderContainer,
  StatusOrder,
  OrderText,
  StatusOrderText,
  Spinner,
} from './styles';

export default function Order() {
  const [isNotRunning, setRunning] = useState(false);
  const [undelivered, setUndelivered] = useState(true);

  const orders = useSelector(state => state.order.orders);
  const loadingOrder = useSelector(state => state.order.loading);
  const profileId = useSelector(state => state.user.profile.id);

  const dispatch = useDispatch();

  useEffect(() => {
    const statusSearchAPI = undelivered ? 'undelivered' : 'delivered';

    if (isNotRunning) dispatch(ordersRequest(profileId, statusSearchAPI));
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
        <OrderText>Entregas</OrderText>
        <StatusOrder>
          <TouchableOpacity onPress={setStatusDeliveries}>
            <StatusOrderText status={undelivered}>Pendentes</StatusOrderText>
          </TouchableOpacity>

          <TouchableOpacity onPress={setStatusDeliveries}>
            <StatusOrderText status={!undelivered}>Entregues</StatusOrderText>
          </TouchableOpacity>
        </StatusOrder>
      </OrderContainer>

      {loadingOrder && <Spinner />}

      {!loadingOrder && (
        <FlatList
          data={orders}
          keyExtractor={order => String(order.id)}
          renderItem={({ item }) => <OrderDetails order={item} />}
          ListEmptyComponent={ListEmpty}
        />
      )}
    </Container>
  );
}
