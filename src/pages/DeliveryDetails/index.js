import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import DetailsLayout from '~/components/DetailsLayout';

import OrderInfo from './OrderInfo';
import OrderSituation from './OrderSituation';
import OrderMenu from './OrderMenu';

import { ContainerSpinner, Spinner } from './styles';

import api from '~/services/api';

export default function DeliveryDetails() {
  const [order, setOrder] = useState(null);

  const route = useRoute();

  useEffect(() => {
    async function fetchOrder() {
      const { data } = await api.get(`/orders/${route.params.orderId}`);
      setOrder(data);
    }

    fetchOrder();
  }, [route.params.orderId]);

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
