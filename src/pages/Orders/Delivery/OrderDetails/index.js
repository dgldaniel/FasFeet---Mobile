import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Steps from 'react-native-steps';

import {
  configsStep,
  Container,
  ContentOrder,
  NameOrderHeader,
  NameOrderText,
  DeliveryTruckIcon,
  InfoOrderFooter,
  InfoOrderTitle,
  InfoOrderContent,
  LinkViewDetails,
} from './styles';

const labels = ['Aguardando Retirada', 'Retirada', 'Entregue'];

export default function OrderDetails() {
  const navigation = useNavigation();

  function goToDeliveryDetails() {
    navigation.navigate('DeliveryDetails');
  }

  return (
    <Container>
      <ContentOrder>
        <NameOrderHeader>
          <DeliveryTruckIcon name="truck-delivery" />
          <NameOrderText>Encomenda 1</NameOrderText>
        </NameOrderHeader>

        <Steps configs={configsStep} current={1} labels={labels} count={3} />
      </ContentOrder>

      <InfoOrderFooter>
        <View>
          <InfoOrderTitle>Data:</InfoOrderTitle>
          <InfoOrderContent>15/01/2020</InfoOrderContent>
        </View>
        <View>
          <InfoOrderTitle>Cidade:</InfoOrderTitle>
          <InfoOrderContent>Rio do Sul</InfoOrderContent>
        </View>

        <TouchableOpacity onPress={goToDeliveryDetails}>
          <LinkViewDetails>Ver Detalhes</LinkViewDetails>
        </TouchableOpacity>
      </InfoOrderFooter>
    </Container>
  );
}
