import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ContainerButton = styled.View`
  flex: 1;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 33%;
  background-color: #f8f9fd;
  align-items: center;
  justify-content: center;
  height: 55%;
  border-radius: 5px;
`;

export const ActionButtonText = styled.Text`
  color: #999;
  font-size: 15px;
  margin-top: 5px;
  text-align: center;
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
