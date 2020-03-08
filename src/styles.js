import { Animated, Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import brasilIcon from './assets/brasil.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;

export const Card = styled(Animated.View)`
  position: absolute;
  top: ${Dimensions.get('window').height / 2.5}px;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${Dimensions.get('window').height}px;
`;

export const ViewInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 0 20px;
`;

export const ViewLeft = styled.View``;

export const Salutation = styled.Text`
  font-size: 14px;
  margin-bottom: 2px;
  color: #fff;
  font-weight: 500;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const ViewRight = styled.View``;

export const ViewAvatar = styled.View`
  width: 40px;
  height: 40px;
  background: #eee;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const NameAvatar = styled.Text`
  color: #555;
`;

export const Main = styled.View`
  background: #fff;
  padding: 0 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: ${Dimensions.get('window').height}px;
`;

export const ViewLine = styled.View`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  width: 50px;
  height: 5px;
  background: #eee;
`;

export const ViewBalance = styled.View`
  width: 100%;
  height: 85px;
  background: #eee;
  border-radius: 5px;
  padding: 12px 20px;
`;

export const Top = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Nationality = styled.Image.attrs({
  source: brasilIcon,
})`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-right: 5px;
`;

export const TitleBalance = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: 300;
`;

export const Bottom = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BottomLeft = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Symbol = styled.Text`
  font-size: 12px;
  color: #333;
  font-weight: 300;
  margin-right: 5px;
`;

export const Balance = styled.Text`
  font-size: 28px;
  color: #000;
  font-weight: bold;
`;

export const BottomRight = styled.View``;

export const ButtonSee = styled(BorderlessButton)``;

export const See = styled.Text`
  font-size: 12px;
  text-decoration: underline;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
`;
