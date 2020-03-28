import React from 'react';

import DetailsLayout from '~/components/DetailsLayout';

import { OrderTitle, ContainerRecipient, RecipientInfo } from './styles';

export default function ShowProblem() {
  return (
    <DetailsLayout>
      <OrderTitle>Encomenda 01</OrderTitle>

      <ContainerRecipient>
        <RecipientInfo>Destinatário ausente</RecipientInfo>
        <RecipientInfo date>14/01/2020</RecipientInfo>
      </ContainerRecipient>

      <ContainerRecipient>
        <RecipientInfo>Destinatário ausente</RecipientInfo>
        <RecipientInfo date>15/01/2020</RecipientInfo>
      </ContainerRecipient>
    </DetailsLayout>
  );
}
