//@flow

import {StyleSheet} from 'react-native';

import {COLORS} from '../../../utils/colors';
import {rw, rbr} from '../../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: rbr(5),
    borderLeftColor: COLORS.MODERATE_CYAN_LIME_GREEN,
    borderLeftWidth: rw(5),
    backgroundColor: COLORS.WHITE,
    padding: rw(10),
    marginBottom: rw(10),
  },
  content: {flex: 4},
  status: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  status_container: {
    backgroundColor: COLORS.MODERATE_CYAN_LIME_GREEN,
    borderRadius: rbr(5),
    padding: rw(5),
  },
  text_status: {fontWeight: 'bold', color: COLORS.WHITE},
  log_bank: {flexDirection: 'row'},
  description: {flexDirection: 'row', alignItems: 'center'},
  text_bold: {fontWeight: 'bold'},
  icon_arrow: {
    width: rw(20),
    height: rw(20),
    marginHorizontal: rw(5),
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: COLORS.BLACK,
    marginHorizontal: rw(5),
  },
});
