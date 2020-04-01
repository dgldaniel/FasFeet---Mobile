import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

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
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }
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

      <TouchableOpacity onPress={handleLogout}>
        <LogoutIcon name="logout" />
      </TouchableOpacity>
    </Container>
  );
}
