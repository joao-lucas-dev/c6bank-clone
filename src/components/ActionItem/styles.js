import styled from 'styled-components/native';

import colors from '../../styles/themes/colors';
import fonts from '../../styles/themes/fonts';

export const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

export const Title = styled.Text`
  font-size: 10px;
  margin-top: 8px;
  color: ${colors.gray_dark};
  font-family: ${fonts.light};
`;
