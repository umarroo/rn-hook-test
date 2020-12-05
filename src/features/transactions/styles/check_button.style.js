import {StyleSheet} from 'react-native';
import {rw} from '../../../utils/responsive';

export const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  alignStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxLabel: {
    marginLeft: rw(5),
    marginRight: rw(5)
  }
});
