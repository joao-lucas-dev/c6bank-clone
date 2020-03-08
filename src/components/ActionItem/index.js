import React, { memo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { Container, Title } from './styles';

function ActionItem({ item }) {
  return (
    <Container>
      <Icon name={item.name_icon} size={30} color="#000" />
      <Title>{item.name}</Title>
    </Container>
  );
}

export default memo(ActionItem);

ActionItem.propTypes = {
  item: PropTypes.oneOf([PropTypes.object, PropTypes.array]).isRequired,
};
