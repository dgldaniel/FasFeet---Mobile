import React, { useState, useEffect, useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import DetailsLayout from '~/components/DetailsLayout';

import OrderInfo from './OrderInfo';
import OrderSituation from './OrderSituation';
import OrderMenu from './OrderMenu';

import { ContainerSpinner, Spinner } from './styles';

import api from '~/services/api';

export default function OrderDetails() {
  const [order, setOrder] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const fetchOrder = useCallback(() => {
    async function handleFetch() {
      const { data } = await api.get(`/orders/${route.params.orderId}`);
      setOrder(data);
    }

    handleFetch();
  }, [route.params.orderId]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder, route.params.orderId]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchOrder();
    });

    return unsubscribe;
  }, [fetchOrder, navigation, route.params.orderId]);

  return (
    <>
      {!order && (
        <ContainerSpinner>
          <Spinner />
        </ContainerSpinner>
      )}
      {order && (
        <DetailsLayout>
          <OrderInfo order={order} />

          <OrderSituation order={order} />

          <OrderMenu order={order} />
        </DetailsLayout>
      )}
    </>
  );
}
