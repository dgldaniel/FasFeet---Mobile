import React from 'react';
import { View } from 'react-native';

import {
  Container,
  AvatarUser,
  AvatarUserDefault,
  ContainerInfo,
  InfoTitle,
  InfoContent,
  LogoutButton,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <AvatarUser>
        <AvatarUserDefault>GA</AvatarUserDefault>
      </AvatarUser>

      <View>
        <ContainerInfo>
          <InfoTitle>Nome Completo</InfoTitle>
          <InfoContent>Gaspar Antunes</InfoContent>
        </ContainerInfo>

        <ContainerInfo>
          <InfoTitle>Email</InfoTitle>
          <InfoContent>example@rocketseat.com.br</InfoContent>
        </ContainerInfo>

        <ContainerInfo>
          <InfoTitle>Data de cadastro</InfoTitle>
          <InfoContent>10/01/2021</InfoContent>
        </ContainerInfo>
      </View>

      <LogoutButton onPress={() => {}}>Logout</LogoutButton>
    </Container>
  );
}
