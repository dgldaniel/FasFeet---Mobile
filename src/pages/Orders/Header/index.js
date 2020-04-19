import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  InfoUser,
  AvatarUser,
  AvatarUserDefault,
  AvatarImage,
  WelcomeText,
  UserNameText,
  LogoutIcon,
} from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function getNameInitial(name) {
    return name
      .split(' ')
      .map(n => n[0])
      .join('');
  }

  const handleLogout = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <Container>
      <InfoUser>
        {!profile.avatar.url && (
          <AvatarUser>
            <AvatarUserDefault>
              {getNameInitial(profile.name)}
            </AvatarUserDefault>
          </AvatarUser>
        )}
        {!!profile.avatar.url && (
          <AvatarImage source={{ uri: profile.avatar.url }} />
        )}

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
