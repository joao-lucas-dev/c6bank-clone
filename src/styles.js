import { Animated, Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import brasilIcon from './assets/brasil.png';
import colors from './styles/themes/colors';
import fonts from './styles/themes/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.dark};
  align-items: center;
`;

export const ViewTitleBank = styled(Animated.View)`
  flex-direction: row;
  margin-top: ${Dimensions.get('window').height / 5}px;
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
  color: ${colors.light};
  font-family: ${fonts.regular};
`;

export const Name = styled.Text`
  font-size: 24px;
  font-family: ${fonts.bold};
  color: ${colors.light};
`;

export const ViewRight = styled.View``;

export const ViewAvatar = styled.View`
  width: 40px;
  height: 40px;
  background: ${colors.gray_soft};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const NameAvatar = styled.Text`
  color: ${colors.gray_dark};
  font-family: ${fonts.light};
`;

export const Main = styled.View`
  background: ${colors.light};
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
  border-radius: 20px;
  background: ${colors.gray_soft};
`;

export const ViewBalance = styled.View`
  width: 100%;
  height: 85px;
  background: ${colors.gray_soft};
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
  color: ${colors.gray_dark};
  font-family: ${fonts.light};
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
  height: 100%;
`;

export const Symbol = styled.Text`
  font-size: 12px;
  color: ${colors.gray_dark_light};
  margin-right: 5px;
  font-family: ${fonts.light};
`;

export const Balance = styled.Text`
  font-size: 28px;
  color: ${colors.dark};
  font-family: ${fonts.regular};
`;

export const ViewHidden = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin-left: 5px;
`;

export const Hidden = styled.View`
  width: 8px;
  height: 8px;
  background: ${colors.dark};
  border-radius: 5px;
  margin-right: 10px;
`;

export const BottomRight = styled.View``;

export const ButtonSee = styled(BorderlessButton)``;

export const See = styled.Text`
  font-size: 12px;
  text-decoration: underline;
  color: ${colors.gray_dark};
  font-family: ${fonts.regular};
  text-transform: uppercase;
`;

export const ViewListActions = styled.View`
  margin-top: 20px;
`;

export const ListActions = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
