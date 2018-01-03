import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const bottomStyles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: Colors.coachColor,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },


  row: {
    flexDirection: 'row',
    width: '100%',

  },

});

export default bottomStyles;
