import {StyleSheet} from 'react-native';
import {rh, rw} from '../../../utils/responsive';

import {COLORS} from '../../../utils/colors';

export const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 30,
	},
	circle: {
		height: rh(20),
		width: rw(20),
		borderRadius: 50,
		borderWidth: 2,
		borderColor: COLORS.ORANGE_FLIP,
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkedCircle: {
		width: rw(14),
		height: rh(14),
		borderRadius: 50,
		backgroundColor: COLORS.ORANGE_FLIP,
  },
  text: {
    paddingLeft: rw(5)
  }
});
