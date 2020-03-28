import React from 'react';

import {
  ContainerImage,
  ContainerCameraIcon,
  CameraIcon,
  SubmitButton,
} from './styles';

import DetailsLayout from '~/components/DetailsLayout';

export default function ConfirmDelivery() {
  return (
    <DetailsLayout>
      <ContainerImage>
        <ContainerCameraIcon onPress={() => {}}>
          <CameraIcon name="camera" />
        </ContainerCameraIcon>
      </ContainerImage>

      <SubmitButton onPress={() => {}}>Enviar</SubmitButton>
    </DetailsLayout>
  );
}
