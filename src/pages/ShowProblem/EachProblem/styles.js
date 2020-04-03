import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px 0;
`;

export const ContainerRecipient = styled.View`
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;

  flex-direction: row;
  justify-content: space-between;
`;

export const RecipientInfo = styled.Text`
  color: #ddd;
  font-size: ${props => (props.date ? 12 : 15)}px;
`;
