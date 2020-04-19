import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  AvatarUser,
  AvatarUserDefault,
  AvatarImage,
  ContainerInfo,
  InfoTitle,
  InfoContent,
  LogoutButton,
} from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  const dateCreatedAtFormated = format(
    new Date(profile.createdAt),
    'dd/MM/yyyy'
  );

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
      {!profile.avatar.url && (
        <AvatarUser>
          <AvatarUserDefault>{getNameInitial(profile.name)}</AvatarUserDefault>
        </AvatarUser>
      )}

      {!!profile.avatar.url && (
        <AvatarImage source={{ uri: profile.avatar.url }} />
      )}

      <View>
        <ContainerInfo>
          <InfoTitle>Nome Completo</InfoTitle>
          <InfoContent>{profile.name}</InfoContent>
        </ContainerInfo>

        <ContainerInfo>
          <InfoTitle>Email</InfoTitle>
          <InfoContent>{profile.email}</InfoContent>
        </ContainerInfo>

        <ContainerInfo>
          <InfoTitle>Data de cadastro</InfoTitle>
          <InfoContent>{dateCreatedAtFormated}</InfoContent>
        </ContainerInfo>
      </View>

      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}
