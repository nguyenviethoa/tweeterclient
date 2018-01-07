import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: 15,
    height: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'absolute',
    top: 0,
    right: 0,
  },
  text: {
    fontSize: 8,
    color: 'white',
    textAlign: 'center'
  }
});
