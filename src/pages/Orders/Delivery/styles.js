import styled from 'styled-components/native';

export const Container = styled.View``;

export const OrderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatusOrder = styled.View`
  flex-direction: row;
`;

export const DeliveryText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const StatusOrderText = styled.Text`
  margin: 0 5px;
  color: #7159c1;
  font-weight: ${props => (props.status ? 'bold' : 'normal')};
`;

export const ListDelivery = styled.FlatList``;
