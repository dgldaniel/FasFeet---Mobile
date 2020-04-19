import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { isNull } from 'lodash';
import { format } from 'date-fns';

import {
  ContainerImage,
  ContainerCameraIcon,
  SignatureImage,
  CameraIcon,
  SubmitButton,
} from './styles';

import DetailsLayout from '~/components/DetailsLayout';

import api from '~/services/api';

export default function ConfirmOrder() {
  const [loading, setLoading] = useState(false);

  const profileId = useSelector(state => state.user.profile.id);
  const uri = useSelector(state => state.order.uri);

  const navigation = useNavigation();
  const route = useRoute();

  function showCameraModal() {
    navigation.navigate('CameraModal');
  }

  async function uploadSignature() {
    try {
      const data = new FormData();

      data.append('file', {
        uri,
        type: 'image/jpeg',
        name: `${uri}_${profileId}.jpg`,
      });

      const {
        data: { id },
      } = await api.post('/files', data);

      return id;
    } catch (error) {
      Alert.alert('Erro', 'Erro no Upload de Imagem');

      return null;
    }
  }

  async function handleConfirmOrder() {
    try {
      const signatureId = await uploadSignature();

      const dataStatus = {
        end_date: format(Date.now(), 'yyyy-MM-dd HH:mm:ss'),
        signature_id: signatureId,
        order_id: route.params.orderId,
      };

      setLoading(true);
      await api.put(`/deliverymen/${profileId}/status`, dataStatus);
      setLoading(false);

      Alert.alert('Sucesso', 'Confirmação Recebida');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Erro na Requisição');
    }
  }

  return (
    <DetailsLayout>
      <ContainerImage>
        {!isNull(uri) && <SignatureImage source={{ uri }} />}
        <ContainerCameraIcon onPress={showCameraModal}>
          <CameraIcon name="camera" />
        </ContainerCameraIcon>
      </ContainerImage>

      <SubmitButton loading={loading} onPress={handleConfirmOrder}>
        Enviar
      </SubmitButton>
    </DetailsLayout>
  );
}
