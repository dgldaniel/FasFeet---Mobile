import React from 'react';

import logoFastFeet from '~/assets/images/fastfeet-logo.png';

import { Container, Logo, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Logo source={logoFastFeet} />

      <Form>
        <FormInput placeholder="Informe seu ID de Cadastro" />
        <SubmitButton onPress={() => {}}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
