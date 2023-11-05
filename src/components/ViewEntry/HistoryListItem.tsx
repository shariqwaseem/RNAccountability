import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CText from '../CText';

const HistoryListItem = () => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <CText>HistoryListItem</CText>
      <CText as="P3">HistoryListItem Sub text</CText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
  },
});

export default HistoryListItem;
