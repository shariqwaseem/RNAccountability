import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {BarChart} from 'react-native-gifted-charts';
import CButtonGroup from '../CButtonGroup';

const data = [
  {value: 50},
  {value: 80},
  {value: 90},
  {value: 70},
  {value: 10},
  {value: 70},
  {value: 20},
  {value: 30},
];
const HistoryChart = () => {
  const {height, width} = useWindowDimensions();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  return (
    <View>
      <CButtonGroup
        buttons={['Week', 'Month', 'Year']}
        selectedIndex={selectedIndex}
        onPress={value => {
          setSelectedIndex(value);
        }}
        containerStyle={styles.buttonGroupContainer}
      />
      <BarChart
        barWidth={10}
        noOfSections={4}
        barBorderRadius={4}
        frontColor="lightgray"
        data={data}
        width={width}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroupContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 30,
  },
});
export default HistoryChart;
