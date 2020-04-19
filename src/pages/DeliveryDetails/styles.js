import styled from 'styled-components/native';

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
