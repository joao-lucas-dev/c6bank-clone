import React, { useState, memo, useEffect } from 'react';
import { Platform, Dimensions, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import ActionItem from '../ActionItem';
import Balance from '../Balance';
import {
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
  ViewTop,
  ViewListActions,
  ListActions,
  Divider,
  ViewMyCards,
  TitleMyCards,
  CardCard,
  StatusCard,
  CircleCard,
  StatusName,
  ImageCard,
  InfoCard,
  InfoCardTitle,
  CardNumber,
  ViewInfoLeft,
  ViewInfoRight,
  ButtonCard,
  TitleButtonCard,
  ViewMyTransfers,
  TitleTransfers,
  ViewNoTransfer,
  ImageTransfer,
  NoTranfersTitle,
  ButtonAddCredit,
  ViewGradient,
  TitleAddCredit,
} from './styles';

function CardItem() {
  const heightMiddle = -Dimensions.get('window').height / 2;
  const heightAll =
    Platform.OS === 'ios'
      ? -Dimensions.get('window').height + getStatusBarHeight() + 20
      : -Dimensions.get('window').height + 20;

  const [data] = useState([
    {
      id: '1',
      name_icon: 'description',
      name: 'VER EXTRATO',
    },
    {
      id: '2',
      name_icon: 'credit-card',
      name: 'CARTÃO',
    },
    {
      id: '3',
      name_icon: 'attach-money',
      name: 'PAGAR',
    },
    {
      id: '4',
      name_icon: 'arrow-upward',
      name: 'TRANSFERIR',
    },
    {
      id: '5',
      name_icon: 'arrow-downward',
      name: 'TRAZER SALÁRIO',
    },
    {
      id: '6',
      name_icon: 'arrow-downward',
      name: 'DEPOSITAR',
    },
  ]);

  let offset = 0;

  const translateYCard = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateYCard,
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
        translateYCard.setValue(offset);
        translateYCard.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateYCard, {
        toValue: swiper ? heightAll : heightMiddle,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = swiper ? heightAll : heightMiddle;
        translateYCard.setOffset(offset);
        translateYCard.setValue(0);
      });
    }
  }

  useEffect(() => {
    Animated.sequence([
      Animated.spring(translateYCard, {
        toValue: heightMiddle,
        duration: 200,
        bounciness: 10,
        useNativeDriver: true,
      }),
    ]).start(() => {
      translateYCard.setOffset(heightMiddle);
      translateYCard.setValue(0);
    });
  }, [translateYCard, heightMiddle]);

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}
    >
      <Card
        style={{
          transform: [
            {
              translateY: translateYCard.interpolate({
                inputRange: [heightAll, heightMiddle, 0],
                outputRange: [heightAll, heightMiddle, 0],
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

          <ViewTop>
            <Balance />

            <ViewListActions>
              <ListActions
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ActionItem item={item} />}
              />
            </ViewListActions>
          </ViewTop>

          <Divider />

          <ViewMyCards>
            <TitleMyCards>Meus cartões</TitleMyCards>

            <CardCard>
              <StatusCard>
                <CircleCard />
                <StatusName>CARTÃO BLOQUEADO</StatusName>
              </StatusCard>

              <ImageCard />

              <InfoCard>
                <ViewInfoLeft>
                  <InfoCardTitle>N do cartão</InfoCardTitle>
                  <CardNumber>3421********7689</CardNumber>
                </ViewInfoLeft>

                <ViewInfoRight>
                  <ButtonCard>
                    <TitleButtonCard>GERENCIAR</TitleButtonCard>
                  </ButtonCard>
                </ViewInfoRight>
              </InfoCard>
            </CardCard>
          </ViewMyCards>

          <Divider />

          <ViewMyTransfers>
            <TitleTransfers>Últimas transações</TitleTransfers>

            <ViewNoTransfer>
              <ImageTransfer />

              <NoTranfersTitle>
                Você não tem transações recentes
              </NoTranfersTitle>

              <ButtonAddCredit>
                <ViewGradient>
                  <TitleAddCredit>FAZER UM DEPÓSITO</TitleAddCredit>
                </ViewGradient>
              </ButtonAddCredit>
            </ViewNoTransfer>
          </ViewMyTransfers>
        </Main>
      </Card>
    </PanGestureHandler>
  );
}

export default memo(CardItem);
