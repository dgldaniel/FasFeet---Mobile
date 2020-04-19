import React from 'react';
import { View } from 'react-native';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import {
  Container,
  TitleInfo,
  DeliveryTruckIcon,
  Title,
  ContentInfo,
  ContainerDate,
} from './styles';

export default function OrderSituation({ order }) {
  const situation = order.end_date ? 'Entregue' : 'Pendente';

  const start_date = order.start_date
    ? format(new Date(order.start_date), 'dd/MM/yyyy')
    : '-- / -- / --';

  const end_date = order.end_date
    ? format(new Date(order.end_date), 'dd/MM/yyyy')
    : '-- / -- / --';

  return (
    <Container>
      <TitleInfo>
        <DeliveryTruckIcon name="calendar" />
        <Title>Situação da Entrega</Title>
      </TitleInfo>

      <View>
        <ContentInfo>STATUS</ContentInfo>
        <ContentInfo>{situation}</ContentInfo>
      </View>

      <ContainerDate>
        <View>
          <ContentInfo>DATA DE RETIRADA</ContentInfo>
          <ContentInfo>{start_date}</ContentInfo>
        </View>
        <View>
          <ContentInfo>DATA DE ENTREGA</ContentInfo>
          <ContentInfo>{end_date}</ContentInfo>
        </View>
      </ContainerDate>
    </Container>
  );
}

OrderSituation.propTypes = {
  order: PropTypes.shape({
    start_date: PropTypes.string,
    end_date: PropTypes.string,
  }).isRequired,
};
