import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

export const OrderTruckIcon = styled(Icon).attrs({
  size: 30,
  color: '#7159c1',
})`
  margin-right: 5px;
`;

export const ContentInfo = styled.Text`
  color: #999;
  font-size: 15px;
`;

export const ContainerDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
