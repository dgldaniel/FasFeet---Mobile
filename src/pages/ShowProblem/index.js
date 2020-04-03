import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import DetailsLayout from '~/components/DetailsLayout';
import EachProblem from './EachProblem';

import { OrderTitle, ContainerSpinner, Spinner } from './styles';

import api from '~/services/api';

export default function ShowProblem() {
  const [problems, setProblem] = useState(null);

  const route = useRoute();

  useEffect(() => {
    async function fetchProblem() {
      const { data } = await api.get(
        `/delivery/${route.params.orderId}/problems`
      );

      console.tron.log('data', data);

      setProblem(data);
    }

    fetchProblem();
  }, [route.params.orderId]);

  function ListEmpty() {
    return <Text>Sem Problemas</Text>;
  }

  return (
    <>
      {!problems && (
        <ContainerSpinner>
          <Spinner />
        </ContainerSpinner>
      )}
      {problems && (
        <DetailsLayout>
          <OrderTitle>{route.params.product}</OrderTitle>

          <FlatList
            data={problems}
            keyExtractor={problem => String(problem.id)}
            renderItem={({ item }) => <EachProblem problem={item} />}
            ListEmptyComponent={ListEmpty}
          />
        </DetailsLayout>
      )}
    </>
  );
}
