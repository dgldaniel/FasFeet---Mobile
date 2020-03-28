import styled from 'styled-components/native';

export const Container = styled.View``;

export const OrderTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const ContainerRecipient = styled.View`
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 5px;

  flex-direction: row;
  justify-content: space-between;
`;

export const RecipientInfo = styled.Text`
  color: #ddd;
  font-size: ${props => (props.date ? 12 : 15)}px;
`;
