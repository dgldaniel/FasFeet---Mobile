import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Steps from 'react-native-steps';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { isNull } from 'lodash';

import {
  configsStep,
  Container,
  ContentOrder,
  NameOrderHeader,
  NameOrderText,
  OrderTruckIcon,
  InfoOrderFooter,
  InfoOrderTitle,
  InfoOrderContent,
  LinkViewDetails,
} from './styles';

const labels = ['Aguardando Retirada', 'Retirada', 'Entregue'];

export default function OrderDetails({ order }) {
  const navigation = useNavigation();

  function goToOrderDetails() {
    navigation.navigate('OrderDetails', {
      orderId: order.id,
    });
  }

  function countStep() {
    const { start_date, end_date } = order;

    if (isNull(start_date)) {
      return 1;
    }

    if (!isNull(start_date) && !end_date) {
      return 2;
    }

    if (!isNull(start_date) && end_date) {
      return 3;
    }

    return null;
  }

  const currentCount = countStep();
  const deliveyCreatedDate = format(new Date(order.createdAt), 'dd/MM/yyyy');

  return (
    <Container>
      <ContentOrder>
        <NameOrderHeader>
          <OrderTruckIcon name="truck-delivery" />
          <NameOrderText>{order.product}</NameOrderText>
        </NameOrderHeader>

        <Steps
          configs={configsStep}
          current={currentCount}
          labels={labels}
          count={3}
        />
      </ContentOrder>

      <InfoOrderFooter>
        <View>
          <InfoOrderTitle>Data:</InfoOrderTitle>
          <InfoOrderContent>{deliveyCreatedDate}</InfoOrderContent>
        </View>
        <View>
          <InfoOrderTitle>Cidade:</InfoOrderTitle>
          <InfoOrderContent>{order.recipient.city}</InfoOrderContent>
        </View>

        <TouchableOpacity onPress={goToOrderDetails}>
          <LinkViewDetails>Ver Detalhes</LinkViewDetails>
        </TouchableOpacity>
      </InfoOrderFooter>
    </Container>
  );
}

OrderDetails.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    recipient: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
