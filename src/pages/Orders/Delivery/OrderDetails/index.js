import React from 'react';
import { View } from 'react-native';
import Steps from 'react-native-steps';

import {
  Container,
  NameOrderHeader,
  NameOrderText,
  DeliveryTruckIcon,
  InfoOrderFooter,
  InfoOrderTitle,
  InfoOrderContent,
  LinkViewDetails,
} from './styles';

const labels = ['Aguardando Retirada', 'Retirada', 'Entregue'];
const configs = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#7159c1',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#7159c1',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#7159c1',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#7159c1',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#7159c1',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#7159c1',
};

export default function OrderDetails() {
  return (
    <Container>
      <NameOrderHeader>
        <DeliveryTruckIcon name="truck-delivery" />
        <NameOrderText>Encomenda 1</NameOrderText>
      </NameOrderHeader>

      <Steps configs={configs} current={1} labels={labels} count={3} />

      <InfoOrderFooter>
        <View>
          <InfoOrderTitle>Data:</InfoOrderTitle>
          <InfoOrderContent>15/01/2020</InfoOrderContent>
        </View>
        <View>
          <InfoOrderTitle>Cidade:</InfoOrderTitle>
          <InfoOrderContent>Rio do Sul</InfoOrderContent>
        </View>

        <LinkViewDetails>Ver Detalhes</LinkViewDetails>
      </InfoOrderFooter>
    </Container>
  );
}
