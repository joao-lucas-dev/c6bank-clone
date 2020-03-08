import React from 'react';
import { StatusBar, Animated, Text } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

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
} from './styles';

export default function App() {
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

      if (translationY <= -80) {
        swiper = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: swiper ? -400 : 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        offset = swiper ? -400 : 0;
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
                    inputRange: [-400, 0],
                    outputRange: [-400, 0],
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
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                ex temporibus eius nesciunt porro error odio reiciendis dolores
                aliquid at qui nobis praesentium repellendus, ad, cum illo ullam
                ut. Repellat! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sint ex temporibus eius nesciunt porro error
                odio reiciendis dolores aliquid at qui nobis praesentium
                repellendus, ad, cum illo ullam ut. Repellat! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Sint ex temporibus eius
                nesciunt porro error odio reiciendis dolores aliquid at qui
                nobis praesentium repellendus, ad, cum illo ullam ut. Repellat!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                ex temporibus eius nesciunt porro error odio reiciendis dolores
                aliquid at qui nobis praesentium repellendus, ad, cum illo ullam
                ut. Repellat! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sint ex temporibus eius nesciunt porro error
                odio reiciendis dolores aliquid at qui nobis praesentium
                repellendus, ad, cum illo ullam ut. Repellat! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Sint ex temporibus eius
                nesciunt porro error odio reiciendis dolores aliquid at qui
                nobis praesentium repellendus, ad, cum illo ullam ut. Repellat!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                ex temporibus eius nesciunt porro error odio reiciendis dolores
                aliquid at qui nobis praesentium repellendus, ad, cum illo ullam
                ut. Repellat! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sint ex temporibus eius nesciunt porro error
                odio reiciendis dolores aliquid at qui nobis praesentium
                repellendus, ad, cum illo ullam ut. Repellat! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Sint ex temporibus eius
                nesciunt porro error odio reiciendis dolores aliquid at qui
                nobis praesentium repellendus, ad, cum illo ullam ut. Repellat!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                ex temporibus eius nesciunt porro error odio reiciendis dolores
                aliquid at qui nobis praesentium repellendus, ad, cum illo ullam
                ut. Repellat! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sint ex temporibus eius nesciunt porro error
                odio reiciendis dolores aliquid at qui nobis praesentium
                repellendus, ad, cum illo ullam ut. Repellat! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Sint ex temporibus eius
                nesciunt porro error odio reiciendis dolores aliquid at qui
                nobis praesentium repellendus, ad, cum illo ullam ut. Repellat!
              </Text>
            </Main>
          </Card>
        </PanGestureHandler>
      </Container>
    </>
  );
}
