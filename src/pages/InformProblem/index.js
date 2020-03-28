import React from 'react';

import DetailsLayout from '~/components/DetailsLayout';

import { InputProblem, SubmitButton } from './styles';

export default function InformProblem() {
  return (
    <DetailsLayout>
      <InputProblem />

      <SubmitButton onPress={() => {}}>Enviar</SubmitButton>
    </DetailsLayout>
  );
}
