import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import DetailsLayout from '~/components/DetailsLayout';

import {
  ContainerSpinner,
  Spinner,
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

import api from '~/services/api';

export default function DeliveryDetails() {
  const [order, setOrder] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();

  let address;
  let situation;
  let start_date;
  let end_date;

  function goToInformProblem() {
    navigation.navigate('InformProblem');
  }

  function goToShowProblem() {
    navigation.navigate('ShowProblem');
  }

  function goToConfirmDelivery() {
    navigation.navigate('ConfirmDelivery');
  }

  useEffect(() => {
    async function fetchOrder() {
      const { data } = await api.get(`/orders/${route.params.orderId}`);
      setOrder(data);
    }

    fetchOrder();
  }, [route.params.orderId]);

  if (order) {
    address = `${order.recipient.street}, ${order.recipient.number}, ${order.recipient.city} - ${order.recipient.state}, ${order.recipient.zip_code}`;
    situation = order.end_date ? 'Entregue' : 'Pendente';
    start_date = order.start_date
      ? format(new Date(order.start_date), 'dd/MM/yyyy')
      : '-- / -- / --';
    end_date = order.end_date
      ? format(new Date(order.end_date), 'dd/MM/yyyy')
      : '-- / -- / --';
  }

  return (
    <>
      {!order && (
        <ContainerSpinner>
          <Spinner />
        </ContainerSpinner>
      )}
      {order && (
        <DetailsLayout>
          <Container>
            <TitleInfo>
              <DeliveryTruckIcon name="truck-delivery" />
              <Title>Informações da Entrega</Title>
            </TitleInfo>

            <View>
              <ContentInfo>DESTINATÁRIO</ContentInfo>
              <ContentInfo>{order.recipient.name}</ContentInfo>
            </View>

            <ContainerAddress>
              <ContentInfo>ENDEREÇO DE ENTREGA</ContentInfo>
              <ContentInfo>{address}</ContentInfo>
            </ContainerAddress>

            <View>
              <ContentInfo>PRODUTO</ContentInfo>
              <ContentInfo>{order.product}</ContentInfo>
            </View>
          </Container>

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
      )}
    </>
  );
}
