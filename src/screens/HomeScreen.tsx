import {
  View,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ListComponent from '../components/HomeScreen/ListComponent';
import {EntryType} from '../types/EntryType';
import colorPalette from '../theme/colors';
import {FAB} from '@rneui/themed';
import {TextStyles} from '../components/CText';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const [data] = useState<EntryType[]>([{id: '1'}, {id: '2'}]);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android'
            ? ({highlighted}) => (
                <View
                  style={[styles.separator, highlighted && {marginLeft: 0}]}
                />
              )
            : null
        }
        data={data}
        renderItem={({item, index, separators}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ViewEntry')}>
            <ListComponent entry={item} />
          </TouchableOpacity>
        )}
      />
      <FAB
        visible={true}
        titleStyle={{...TextStyles.H3}}
        placement="right"
        title="Add"
        color={colorPalette.terracottalight}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  separator: {backgroundColor: colorPalette.greyLight, height: 1},
  mainContainer: {
    display: 'flex',
    flex: 1,
  },
});
export default HomeScreen;
