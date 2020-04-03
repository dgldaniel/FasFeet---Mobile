import styled from 'styled-components/native';

export const Container = styled.View``;

export const OrderTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const ContainerSpinner = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#7159c1',
})``;
