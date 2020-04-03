import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import { Container, ContainerRecipient, RecipientInfo } from './styles';

export default function EachProblem({ problem }) {
  const dateFormated = format(new Date(problem.updatedAt), 'dd/MM/yyyy');

  return (
    <Container>
      <ContainerRecipient>
        <RecipientInfo>{problem.description}</RecipientInfo>
        <RecipientInfo date>{dateFormated}</RecipientInfo>
      </ContainerRecipient>
    </Container>
  );
}

EachProblem.propTypes = {
  problem: PropTypes.shape({
    updatedAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
