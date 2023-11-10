import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker, {
  DropDownPickerProps,
  ValueType,
} from 'react-native-dropdown-picker';
import {TextStyles} from './CText';
import palette from '../theme/colors';
type Props = DropDownPickerProps<string> & {
  error?: boolean;
};
const CSelect = ({error, ...rest}: Props) => {
  return (
    <View style={{flex: 1, zIndex: 2000}}>
      <DropDownPicker
        zIndex={2000}
        dropDownDirection="TOP"
        textStyle={styles.textStyle}
        style={[styles.dropDownPicker, error ? styles.errorDropdown : []]}
        dropDownContainerStyle={styles.dropDownContainer}
        placeholderStyle={styles.placeHolderStyles}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  dropDownPicker: {
    borderWidth: 1,
    borderColor: palette.grey,
    backgroundColor: 'white',
  },
  dropDownContainer: {
    borderWidth: 1,
    borderColor: palette.grey,
    backgroundColor: 'white',
  },
  errorDropdown: {
    borderColor: palette.red,
  },
  textStyle: {
    ...TextStyles.P1,
  },
  placeHolderStyles: {
    color: 'grey',
  },
});
export default CSelect;
