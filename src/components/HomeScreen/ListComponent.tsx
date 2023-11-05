import {StyleSheet, View} from 'react-native';
import React from 'react';
import {EntryType} from '../../types/EntryType';
import CText from '../CText';

interface ListComponentProps {
  entry: EntryType;
}
const ListComponent = ({entry}: ListComponentProps) => {
  return (
    <View style={styles.mainContainer}>
      <CText>List Component {entry?.id} </CText>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
});

export default ListComponent;
