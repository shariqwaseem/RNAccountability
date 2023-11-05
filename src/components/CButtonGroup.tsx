import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {ButtonGroup, ButtonGroupProps} from '@rneui/base';
import {TextStyles} from './CText';

const CButtonGroup = (props: ButtonGroupProps) => {
  return <ButtonGroup textStyle={styles.textStyle} {...props} />;
};

const styles = StyleSheet.create({
  textStyle: TextStyles.P2,
});
export default CButtonGroup;
