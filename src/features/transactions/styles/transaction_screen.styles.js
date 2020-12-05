//@flow

import {StyleSheet} from 'react-native';

import {COLORS} from '../../../utils/colors';
import {rw} from '../../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GRAYISH_BLUE,
  },
  list: {
    paddingHorizontal: rw(10),
  },
});
