import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    borderBottomWidth: 1,
    backgroundColor: '#113166',
    borderBottomColor: '#fff',
  },
  text:{
    flexDirection: 'row',
    flex:1,
    justifyContent:'center',
  },
  textTitle:{
    paddingTop:10,
    textAlign: 'center',
    fontSize: 17,
    paddingRight: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerClose:{
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 15,
    paddingTop:12,
    paddingBottom:10,
    fontSize: 20,
    color: '#fff'
  },
});
