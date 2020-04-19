import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const AvatarUser = styled.View`
  background-color: #f4effc;
  width: 160px;
  height: 160px;
  border-radius: 80px;

  justify-content: center;
  align-items: center;
`;

export const AvatarUserDefault = styled.Text`
  color: #a28fd0;
  font-size: 60px;
`;

export const AvatarImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;

export const InfoUser = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeText = styled.Text`
  font-size: 15px;
  color: #b2b2b2;
`;

export const UserNameText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const LogoutIcon = styled(Icon).attrs({
  size: 30,
  color: '#ed6f6f',
})``;
