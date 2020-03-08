import { Animated, Dimensions } from 'react-native';

import styled from 'styled-components/native';

import colors from './styles/themes/colors';
import fonts from './styles/themes/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.dark};
  align-items: center;
`;

export const ViewTitleBank = styled(Animated.View)`
  flex-direction: row;
  top: ${Dimensions.get('window').height / 5}px;
`;

export const TitleBankLeft = styled.Text`
  font-size: 34px;
  color: ${colors.light};
  font-family: ${fonts.bold};
`;

export const TitleBankRight = styled.Text`
  font-size: 34px;
  font-family: ${fonts.light};
  color: ${colors.light};
`;
