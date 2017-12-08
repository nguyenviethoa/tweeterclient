import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  list: {
    paddingTop: 60, //for viewing purpose only, remove soon
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 4,
    marginRight: 4,
  },
  row: {
    //flexDirection: 'row',
    //justifyContent: 'space-around',
    // backgroundColor: 'pink',
    //height: 190,
  },
  toyContainer: {
    borderWidth: 1,
  },
  toyHeader: {
    flexDirection: 'row',
    padding: 7,
  },
  toyTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    flex: 1,
  },
  toyStatus: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 3,
  },
  toyContent: {

  }
});
