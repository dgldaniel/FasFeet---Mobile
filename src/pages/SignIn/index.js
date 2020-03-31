import React from 'react';
import { useNavigation } from '@react-navigation/native';

import logoFastFeet from '~/assets/images/fastfeet-logo.png';

import { Container, Logo, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  function goToDashboard() {
    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <Logo source={logoFastFeet} />

      <Form>
        <FormInput placeholder="Informe seu ID de Cadastro" />
        <SubmitButton onPress={goToDashboard}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
