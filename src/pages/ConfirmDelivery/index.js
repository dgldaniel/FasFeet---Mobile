import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { isNull } from 'lodash';

import {
  ContainerImage,
  ContainerCameraIcon,
  SignatureImage,
  CameraIcon,
  SubmitButton,
} from './styles';

import DetailsLayout from '~/components/DetailsLayout';

export default function ConfirmDelivery() {
  const uri = useSelector(state => state.delivery.uri);
  const navigation = useNavigation();

  function showCameraModal() {
    navigation.navigate('CameraModal');
  }

  return (
    <DetailsLayout>
      <ContainerImage>
        {!isNull(uri) && <SignatureImage source={{ uri }} />}
        <ContainerCameraIcon onPress={showCameraModal}>
          <CameraIcon name="camera" />
        </ContainerCameraIcon>
      </ContainerImage>

      <SubmitButton onPress={() => {}}>Enviar</SubmitButton>
    </DetailsLayout>
  );
}
