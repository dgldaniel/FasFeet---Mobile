import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import {
  ContainerButton,
  ActionButton,
  ActionButtonText,
  CloseButtonIcon,
  InfoIcon,
  ConfirmIcon,
} from './styles';

export default function OrderMenu({ order }) {
  const navigation = useNavigation();

  function goToInformProblem() {
    navigation.navigate('InformProblem', {
      orderId: order.id,
    });
  }

  function goToShowProblem() {
    navigation.navigate('ShowProblem', {
      orderId: order.id,
      product: order.product,
    });
  }

  function goToConfirmOrder() {
    navigation.navigate('ConfirmOrder', {
      orderId: order.id,
    });
  }

  return (
    <ContainerButton>
      <ActionButton onPress={goToInformProblem}>
        <CloseButtonIcon name="close-circle-outline" />
        <ActionButtonText>Informar Problema</ActionButtonText>
      </ActionButton>

      <ActionButton onPress={goToShowProblem}>
        <InfoIcon name="information-outline" />
        <ActionButtonText>Visualizar Problema</ActionButtonText>
      </ActionButton>

      <ActionButton onPress={goToConfirmOrder}>
        <ConfirmIcon name="check-circle-outline" />
        <ActionButtonText>Confirmar Entrega</ActionButtonText>
      </ActionButton>
    </ContainerButton>
  );
}

OrderMenu.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
  }).isRequired,
};
