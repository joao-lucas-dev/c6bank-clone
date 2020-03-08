import { BorderlessButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import brasilIcon from '../../assets/brasil.png';
import colors from '../../styles/themes/colors';
import fonts from '../../styles/themes/fonts';

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
