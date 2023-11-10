import {View, Text, Switch, SwitchProps, StyleSheet} from 'react-native';
import React from 'react';
import CText from './CText';

interface Props extends SwitchProps {
  label: string;
}
const CSwitch = ({label, ...props}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <CText as="H3">{label}</CText>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={props.value ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CSwitch;
