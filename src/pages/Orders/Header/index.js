import React from 'react';
import { View } from 'react-native';

import {
  Container,
  InfoUser,
  AvatarUser,
  AvatarDefault,
  WelcomeText,
  UserNameText,
  LogoutIcon,
} from './styles';

export default function Header() {
  return (
    <Container>
      <InfoUser>
        <AvatarUser>
          <AvatarDefault>GA</AvatarDefault>
        </AvatarUser>

        <View>
          <WelcomeText>Bem vindo de volta,</WelcomeText>
          <UserNameText>Gaspar Antunes</UserNameText>
        </View>
      </InfoUser>

      <LogoutIcon name="logout" />
    </Container>
  );
}
