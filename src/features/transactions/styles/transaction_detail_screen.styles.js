import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { rw, rh, rbr } from '../../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    padding: rw(10),
    marginBottom: rw(10),
  },
  row: {
    paddingTop: rw(20),
    backgroundColor: COLORS.WHITE,
    margin: rw(20)
  },
  detailContainer: {
    flexDirection: "row",
  }
})