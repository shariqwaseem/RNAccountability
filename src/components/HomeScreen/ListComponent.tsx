import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ItemType} from '../../types/ItemType';
import CText from '../CText';

interface ListComponentProps {
  item: ItemType;
}
const ListComponent = ({item}: ListComponentProps) => {
  return (
    <View style={styles.mainContainer}>
      <CText>{JSON.stringify(item)}</CText>
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
