import {View, Text} from 'react-native';
import React from 'react';
import {TextProps} from 'react-native';
import {TextType} from '../types/FontTypes';
import {StyleSheet} from 'react-native';

export const PRIMARY_FONT_REGULAR = 'Nunito-Regular';
export const PRIMARY_FONT_SEMIBOLD = 'Nunito-SemiBold';
export const PRIMARY_FONT_BOLD = 'Nunito-Bold';
export const PRIMARY_FONT_LIGHT = 'Nunito-Light';

interface CTextProps extends TextProps {
  as?: TextType;
}

const CText = ({as = 'P1', style, children, ...restProps}: CTextProps) => (
  <Text style={[styles.base, styles[as], style]} {...restProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  base: {color: 'black'},
  H1: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 34,
  },
  H2: {
    fontFamily: PRIMARY_FONT_SEMIBOLD,
    fontSize: 24,
  },
  H3: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 16,
  },
  H4: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 14,
  },
  P1: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 16,
  },
  P2: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 14,
  },
  P3: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 10,
  },
});
export const TextStyles = styles;

export default CText;
