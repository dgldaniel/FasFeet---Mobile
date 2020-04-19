import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const configsStep = {
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

export const Container = styled.View`
  border: 1px solid #b2b2b2;
  margin: 10px 0;
`;

export const ContentOrder = styled.View`
  padding: 10px;
`;

export const NameOrderHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NameOrderText = styled.Text`
  color: #7159c1;
  font-weight: bold;
`;

export const OrderTruckIcon = styled(Icon).attrs({
  size: 30,
  color: '#7159c1',
})`
  margin-right: 5px;
`;

export const InfoOrderFooter = styled.View`
  padding: 20px;
  flex-direction: row;
  background-color: #f7f7f7;
  justify-content: space-between;
`;

export const InfoOrderTitle = styled.Text``;

export const InfoOrderContent = styled.Text`
  font-weight: bold;
`;

export const LinkViewDetails = styled.Text`
  font-weight: bold;
  color: #7159c1;
`;
