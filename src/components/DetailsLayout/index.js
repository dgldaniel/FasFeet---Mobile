import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  PurpleBackground,
  WhiteBackground,
  Content,
} from './styles';

export default function DetailsLayout({ children }) {
  return (
    <Container>
      <PurpleBackground />
      <WhiteBackground />
      <Content>{children}</Content>
    </Container>
  );
}

DetailsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
