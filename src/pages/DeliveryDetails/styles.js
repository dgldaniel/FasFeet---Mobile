import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '~/components/Button';

export const Container = styled.View`
  background-color: #fff;
  padding: 10px;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const TitleInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #7159c1;
  font-weight: bold;
  font-size: 18px;
`;

export const DeliveryTruckIcon = styled(Icon).attrs({
  size: 30,
  color: '#7159c1',
})`
  margin-right: 5px;
`;

export const ContainerAddress = styled.View`
  margin: 10px 0;
`;

export const ContainerDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ContentInfo = styled.Text`
  color: #999;
  font-size: 15px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled(Button)`
  width: 30%;
  background-color: #f8f9fd;
`;

export const ActionButtonText = styled.Text`
  color: #999;
  font-size: 15px;
  margin-top: 5px;
`;

export const CloseButtonIcon = styled(Icon).attrs({
  size: 25,
  color: '#E74343',
})``;

export const InfoIcon = styled(Icon).attrs({
  size: 25,
  color: '#EDD186',
})``;

export const ConfirmIcon = styled(Icon).attrs({
  size: 25,
  color: '#7159c1',
})``;
