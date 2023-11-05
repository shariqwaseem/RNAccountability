import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ListComponent from '../components/HomeScreen/ListComponent';
import {EntryType} from '../types/EntryType';
import colorPalette from '../theme/colors';
import {FAB} from '@rneui/themed';
import CText, {TextStyles} from '../components/CText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList';
import SummaryText from '../components/AddEntry/SummaryText';

type Props = NativeStackScreenProps<RootStackParamList, 'ViewEntry'>;

const ViewEntry = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <SummaryText
        render={() => <CText>You have 2 orders remaining</CText>}
        style={styles.remainingTextContainer}
      />
      <SummaryText
        render={() => <CText>You can resume on 11/23/123</CText>}
        style={styles.resumeActivityContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  remainingTextContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  resumeActivityContainer: {
    marginTop: 10,
  },
});
export default ViewEntry;
