import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {Ref, RefObject, useEffect, useRef} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList';
import CInput, {RNEInputRef} from '../components/CInput';
import CText from '../components/CText';
import CSelect from '../components/CSelect';

type Props = NativeStackScreenProps<RootStackParamList, 'AddItem'>;

const AddItem = (props: Props) => {
  const ref = useRef<RNEInputRef>(null);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.subContainer}>
        <View style={styles.innerRow}>
          <CText as="H3">I want to limit the occurance of</CText>
          <CInput ref={ref} placeholder="Enter title e.g. Buying shoes" />
        </View>
        <View style={styles.innerRow}>
          <CText as="H3">... to</CText>

          <View style={styles.inputRow2}>
            <CInput placeholder="e.g. 4000" />
            <CInput placeholder="e.g. dollars" />
          </View>
        </View>
        <View style={styles.innerRow}>
          <CText as="H3">... per</CText>

          <View style={styles.inputRow2}>
            <CInput placeholder="e.g. 25" />
            <CSelect />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {paddingHorizontal: 15, paddingTop: 20},
  subContainer: {rowGap: 25},
  inputRow2: {
    flexDirection: 'row',
    columnGap: 12,
  },
  innerRow: {
    rowGap: 10,
  },
});
export default AddItem;
