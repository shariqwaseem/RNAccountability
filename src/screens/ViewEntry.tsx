import {View, StyleSheet, ScrollView, FlatList, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';
import CText from '../components/CText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList';
import SummaryText from '../components/ViewEntry/SummaryText';
import HistoryChart from '../components/ViewEntry/HistoryChart';
import palette from '../theme/colors';
import HistoryListItem from '../components/ViewEntry/HistoryListItem';
import CButton from '../components/CButton';

type Props = NativeStackScreenProps<RootStackParamList, 'ViewEntry'>;

const ViewEntry = (props: Props) => {
  const [data] = useState(new Array(100));
  const Header = useCallback(() => {
    return (
      <>
        <SummaryText
          render={() => <CText>You have 2 orders remaining</CText>}
          style={styles.remainingTextContainer}
        />
        <SummaryText
          render={() => <CText>You can resume on 11/23/123</CText>}
          style={styles.resumeActivityContainer}
        />
        <HistoryChart />
        <CText style={styles.header} as="P2">
          History
        </CText>
      </>
    );
  }, []);
  const Footer = useCallback(() => {
    return (
      <View style={styles.footer}>
        <CButton color="secondary">Remove entry</CButton>
      </View>
    );
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ListHeaderComponent={Header}
        ListFooterComponent={<Footer />}
        data={data}
        style={styles.subPadding}
        ItemSeparatorComponent={
          Platform.OS !== 'android'
            ? ({highlighted}) => (
                <View
                  style={[styles.separator, highlighted && {marginLeft: 0}]}
                />
              )
            : null
        }
        renderItem={({item, index, separators}) => <HistoryListItem />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
  },
  subPadding: {
    paddingHorizontal: 12,
  },
  footer: {
    marginTop: 20,
    marginBottom: 20,
  },
  remainingTextContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  resumeActivityContainer: {
    marginTop: 10,
  },
  separator: {backgroundColor: palette.greyLight, height: 1},
  header: {
    marginTop: 20,
    marginBottom: 8,
    color: palette.grey,
  },
});
export default ViewEntry;
