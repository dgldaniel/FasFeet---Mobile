import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  TitleInfo,
  ContentInfo,
  ContainerAddress,
  Title,
  DeliveryTruckIcon,
} from './styles';

export default function OrderInfo({ order }) {
  const {
    recipient: { name, street, number, city, state, zip_code: zipCode },
    product,
  } = order;

  const address = `${street}, ${number}, ${city} - ${state}, ${zipCode}`;

  return (
    <Container>
      <TitleInfo>
        <DeliveryTruckIcon name="truck-delivery" />
        <Title>Informações da Entrega</Title>
      </TitleInfo>

      <View>
        <ContentInfo>DESTINATÁRIO</ContentInfo>
        <ContentInfo>{name}</ContentInfo>
      </View>

      <ContainerAddress>
        <ContentInfo>ENDEREÇO DE ENTREGA</ContentInfo>
        <ContentInfo>{address}</ContentInfo>
      </ContainerAddress>

      <View>
        <ContentInfo>PRODUTO</ContentInfo>
        <ContentInfo>{product}</ContentInfo>
      </View>
    </Container>
  );
}

OrderInfo.propTypes = {
  order: PropTypes.shape({
    product: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.number,
      city: PropTypes.string,
      state: PropTypes.string,
      zip_code: PropTypes.string,
    }),
  }).isRequired,
};
