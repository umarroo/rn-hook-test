import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { rw, rh, rbr } from '../../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    padding: rw(20),
    marginBottom: rh(2),
    alignItems: 'center'
  },
  row: {
    backgroundColor: COLORS.WHITE,
    margin: rw(5),
    alignItems: 'stretch'
  },
  copy_icon: {width: rw(15), height: rw(15), tintColor: COLORS.ORANGE_FLIP},
  detailContainer: {
    flexDirection: 'row',
    padding: rh(20),
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  log_bank: {
    flexDirection: 'row', 
    marginHorizontal: rw(20),
    paddingTop: rh(10)
  },
  log_bank_detail: {
    paddingRight: rw(50),
  },
  text_bold: {fontWeight: 'bold'},
  icon_arrow: {
    width: rw(20),
    height: rw(20),
    marginHorizontal: rw(5),
  },
})