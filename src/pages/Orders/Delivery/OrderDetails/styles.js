import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  border: 1px solid #b2b2b2;
`;

export const NameOrderHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NameOrderText = styled.Text`
  color: #7159c1;
  font-weight: bold;
`;

export const DeliveryTruckIcon = styled(Icon).attrs({
  size: 30,
  color: '#7159c1',
})`
  margin-right: 5px;
`;

export const InfoOrderFooter = styled.View`
  padding: 20px 0;
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
