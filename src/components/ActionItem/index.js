import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

export default function ActionItem({ item }) {
  return (
    <Container>
      <Icon name={item.name_icon} size={30} color="#000" />
      <Title>{item.name}</Title>
    </Container>
  );
}
