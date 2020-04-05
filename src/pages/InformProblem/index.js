import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import DetailsLayout from '~/components/DetailsLayout';

import { InputProblem, SubmitButton } from './styles';

import api from '~/services/api';

export default function InformProblem() {
  const [description, setDescription] = useState('');

  const profileId = useSelector(state => state.user.profile.id);

  const navigation = useNavigation();
  const route = useRoute();

  async function sendProblem() {
    try {
      await api.post(`/delivery/${profileId}/problems`, {
        delivery_id: route.params.orderId,
        description,
      });

      navigation.goBack();

      Alert.alert('Sucesso', 'Problema Enviado com Sucesso');
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro na requisição');
    }
  }
  return (
    <DetailsLayout>
      <InputProblem onChangeText={setDescription} value={description} />

      <SubmitButton onPress={sendProblem}>Enviar</SubmitButton>
    </DetailsLayout>
  );
}
