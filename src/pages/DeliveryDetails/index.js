import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DetailsLayout from '~/components/DetailsLayout';

import {
  Container,
  TitleInfo,
  Title,
  DeliveryTruckIcon,
  ContainerAddress,
  ContentInfo,
  ContainerDate,
  ContainerButton,
  ActionButton,
  ActionButtonText,
  CloseButtonIcon,
  InfoIcon,
  ConfirmIcon,
} from './styles';

export default function DeliveryDetails() {
  const navigation = useNavigation();

  function goToInformProblem() {
    navigation.navigate('InformProblem');
  }

  function goToShowProblem() {
    navigation.navigate('ShowProblem');
  }

  function goToConfirmDelivery() {
    navigation.navigate('ConfirmDelivery');
  }

  return (
    <DetailsLayout>
      <Container>
        <TitleInfo>
          <DeliveryTruckIcon name="truck-delivery" />
          <Title>Informações da Entrega</Title>
        </TitleInfo>

        <View>
          <ContentInfo>DESTINATÁRIO</ContentInfo>
          <ContentInfo>Ludwig van Beethoven</ContentInfo>
        </View>

        <ContainerAddress>
          <ContentInfo>ENDEREÇO DE ENTREGA</ContentInfo>
          <ContentInfo>
            Rua Beethoven, 1729, Diadema - SP, 09960-580
          </ContentInfo>
        </ContainerAddress>

        <View>
          <ContentInfo>PRODUTO</ContentInfo>
          <ContentInfo>Yamaha SX7</ContentInfo>
        </View>
      </Container>

      <Container>
        <TitleInfo>
          <DeliveryTruckIcon name="calendar" />
          <Title>Situação da Entrega</Title>
        </TitleInfo>

        <View>
          <ContentInfo>STATUS</ContentInfo>
          <ContentInfo>Pendente</ContentInfo>
        </View>

        <ContainerDate>
          <View>
            <ContentInfo>DATA DE RETIRADA</ContentInfo>
            <ContentInfo>14 / 01 / 2020</ContentInfo>
          </View>
          <View>
            <ContentInfo>DATA DE ENTREGA</ContentInfo>
            <ContentInfo>-- / -- / -- </ContentInfo>
          </View>
        </ContainerDate>
      </Container>

      <ContainerButton>
        <ActionButton onPress={goToInformProblem}>
          <CloseButtonIcon name="close-circle-outline" />
          <ActionButtonText>Informar Problema</ActionButtonText>
        </ActionButton>
        <ActionButton onPress={goToShowProblem}>
          <InfoIcon name="information-outline" />
          <ActionButtonText>Visualizar Problema</ActionButtonText>
        </ActionButton>
        <ActionButton onPress={goToConfirmDelivery}>
          <ConfirmIcon name="check-circle-outline" />
          <ActionButtonText>Confirmar Entrega</ActionButtonText>
        </ActionButton>
      </ContainerButton>
    </DetailsLayout>
  );
}
