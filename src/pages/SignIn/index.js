import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import logoFastFeet from '~/assets/images/fastfeet-logo.png';

import { Container, Logo, Form, FormInput, SubmitButton } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [deliverymanId, setDeliverymanId] = useState(null);

  const dispatch = useDispatch();

  function goToDashboard() {
    dispatch(signInRequest(deliverymanId));
  }

  return (
    <Container>
      <Logo source={logoFastFeet} />

      <Form>
        <FormInput
          placeholder="Informe seu ID de Cadastro"
          onChangeText={setDeliverymanId}
        />
        <SubmitButton onPress={goToDashboard}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
