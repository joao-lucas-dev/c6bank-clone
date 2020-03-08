import { Animated, Dimensions } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;

export const Card = styled(Animated.View)`
  position: absolute;
  top: ${Dimensions.get('window').height / 2}px;
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
`;

export const ViewLine = styled.View`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  width: 50px;
  height: 5px;
  background: #eee;
`;
