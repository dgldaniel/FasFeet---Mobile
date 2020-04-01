import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  InfoUser,
  AvatarUser,
  // AvatarDefault,
  WelcomeText,
  UserNameText,
  LogoutIcon,
} from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <InfoUser>
        <AvatarUser source={{ uri: profile.avatar.url }}>
          {/* <AvatarDefault>GA</AvatarDefault> */}
        </AvatarUser>

        <View>
          <WelcomeText>Bem vindo de volta,</WelcomeText>
          <UserNameText>{profile.name}</UserNameText>
        </View>
      </InfoUser>

      <TouchableOpacity onPress={handleLogout}>
        <LogoutIcon name="logout" />
      </TouchableOpacity>
    </Container>
  );
}
