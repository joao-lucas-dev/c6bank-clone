import React, { useState } from 'react';
import { Platform, Dimensions, StatusBar, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import {
  Container,
  Card,
  ViewInfo,
  ViewLeft,
  Salutation,
  Name,
  ViewRight,
  ViewAvatar,
  NameAvatar,
  Main,
  ViewLine,
  Line,
  ViewBalance,
  Top,
  Nationality,
  TitleBalance,
  Bottom,
  BottomLeft,
  Symbol,
  Balance,
  BottomRight,
  ButtonSee,
  See,
} from './styles';

const height =
  Platform.OS === 'ios'
    ? -(Dimensions.get('window').height / 2.5 - getStatusBarHeight() - 20)
    : -(Dimensions.get('window').height / 2.5 - 20);

export default function App() {
  const [visible, setVisible] = useState(false);

  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let swiper = false;

      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY <= -50) {
        swiper = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: swiper ? height : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = swiper ? height : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" color="#000" />
      <Container>
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [height, 0],
                    outputRange: [height, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <ViewInfo>
              <ViewLeft>
                <Salutation>Bom dia</Salutation>
                <Name>João</Name>
              </ViewLeft>

              <ViewRight>
                <ViewAvatar>
                  <NameAvatar>JS</NameAvatar>
                </ViewAvatar>
              </ViewRight>
            </ViewInfo>
            <Main>
              <ViewLine>
                <Line />
              </ViewLine>

              <ViewBalance>
                <Top>
                  <Nationality />
                  <TitleBalance>Saldo</TitleBalance>
                </Top>

                <Bottom>
                  <BottomLeft>
                    <Symbol>R$</Symbol>
                    {visible ? (
                      <Balance>1.234.876,00</Balance>
                    ) : (
                      <Balance>******</Balance>
                    )}
                  </BottomLeft>

                  <BottomRight>
                    <ButtonSee onPress={() => setVisible(!visible)}>
                      {visible ? <See>Ocultar</See> : <See>Exibir</See>}
                    </ButtonSee>
                  </BottomRight>
                </Bottom>
              </ViewBalance>
            </Main>
          </Card>
        </PanGestureHandler>
      </Container>
    </>
  );
}