import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  list: {
  paddingTop: 60, //for viewing purpose only, remove soon
  flex: 1,
  flexDirection: 'column',
  marginLeft: 4,
  marginRight: 4,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    height: 100,
    flexDirection: 'row'
  },
  listFooter: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE"
  }
});
