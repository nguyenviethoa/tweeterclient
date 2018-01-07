import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: 5
  },
  searchBar: {
    flex: .7,
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    height: 30,
    // paddingLeft: 10,
    // paddingRight: 10,
    backgroundColor: 'white',
    borderColor: Colors.coachColor
  },
  buttonMain: {
    height: 30,

  },
  buttonLeft: {
    flex: .15,
    paddingLeft: 5,
  },
  buttonRight: {
    flex: .15,
    paddingRight: 5
  },
  iconLeft: {
    fontSize: 40
  },
  badge: {
    
  }
});
