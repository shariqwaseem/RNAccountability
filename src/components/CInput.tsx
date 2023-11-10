import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {RefObject, forwardRef, useEffect} from 'react';
import {Input as BaseInput, Input, InputProps} from '@rneui/base';
import CText, {TextStyles} from './CText';
import palette from '../theme/colors';
export type RNEInputRef = TextInput & BaseInput;
interface CustomInputProps extends TextInputProps {
  containerStyles?: StyleProp<ViewStyle>;
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

const CInput = forwardRef<TextInput, CustomInputProps>(
  ({label, containerStyles, style, error, errorMessage, ...rest}, ref) => {
    return (
      <View style={[styles.containerStyles, containerStyles]}>
        {label && <CText>{label}</CText>}
        <TextInput
          ref={ref}
          {...rest}
          placeholderTextColor={palette.grey}
          style={[styles.textInput, error ? styles.textInputError : [], style]}
        />
      </View>
    );
  },
);
const styles = StyleSheet.create({
  containerStyles: {},
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: palette.grey,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 12,
    ...TextStyles.P1,
  },

  textInputError: {
    borderColor: palette.red,
  },
});

export default CInput;
