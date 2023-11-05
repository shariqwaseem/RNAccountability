import {View, StyleSheet} from 'react-native';
import React from 'react';
import palette from '../../theme/colors';
import CText from '../CText';

type ViewProps = React.ComponentProps<typeof View>;

interface Props extends ViewProps {
  render: () => JSX.Element;
}

const SummaryText = ({style, render}: Props) => {
  return <View style={[style, styles.mainContainer]}>{render()}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: palette.white,
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});
export default SummaryText;
