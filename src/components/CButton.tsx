import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, ButtonProps} from '@rneui/base';
import {TextStyles} from './CText';

interface Props extends ButtonProps {
  variant?: 'small' | 'medium' | 'large';
}

const CButton = ({variant = 'medium', children, ...props}: Props) => {
  let style = styles.titleMedium;
  if (variant === 'large') {
    style = styles.titleLarge;
  } else if (variant === 'small') {
    style = styles.titleSmall;
  }

  return (
    <Button {...props} titleStyle={style}>
      {children}
    </Button>
  );
};
const styles = StyleSheet.create({
  titleSmall: {
    ...TextStyles.H4,
  },
  titleMedium: {
    ...TextStyles.H3,
  },
  titleLarge: {
    ...TextStyles.H2,
  },
});
export default CButton;
