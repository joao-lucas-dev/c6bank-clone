import React, { useEffect } from 'react';
import { StatusBar, Animated } from 'react-native';

import CardItem from './components/Card';
import {
  Container,
  ViewTitleBank,
  TitleBankLeft,
  TitleBankRight,
} from './styles';

export default function App() {
  const translateYTitle = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(translateYTitle, {
      toValue: 150,
      duration: 200,
    }).start();
  }, [translateYTitle]);

  return (
    <>
      <StatusBar barStyle="light-content" color="#000" />
      <Container>
        <ViewTitleBank
          style={{
            top: translateYTitle,
          }}
        >
          <TitleBankLeft>C6</TitleBankLeft>
          <TitleBankRight>BANK</TitleBankRight>
        </ViewTitleBank>

        <CardItem />
      </Container>
    </>
  );
}
