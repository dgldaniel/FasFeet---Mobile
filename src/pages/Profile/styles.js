import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  padding: 15px;
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
  width: 160px;
  height: 160px;
  border-radius: 80px;
`;

export const ContainerInfo = styled.View`
  margin: 5px 0;
`;

export const InfoTitle = styled.Text`
  font-size: 15px;
  color: #b2b2b2;
`;

export const InfoContent = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  width: 50%;
  margin-top: 20px;
  background-color: #e74040;
`;
