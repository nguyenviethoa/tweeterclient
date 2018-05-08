import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu:{
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#113166',
  },
  boxMenu:{
    flex: .45,
  },
  menuIcon:{
    fontSize: 30,
    color: '#fff',
  },
  msg:{
    color: '#33e89c',
    fontSize: 26,
  },
  boxCmt:{
    justifyContent: 'center',
    flex: .50,
  },
  boxContent:{
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#bec2c4"
  },
  avata:{
    alignItems: 'center',
    marginRight: 10,
  },
  avataIMG:{
    borderRadius: 50,
    width: 50,
    height: 50,
    marginTop: 8,
  },
  user:{
    width: 300,
  },
  username:{
    flexDirection: 'row',
  },
  name:{
    flex: .95,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  date:{
    fontSize: 14,
  },
  comment:{
    marginTop: 5,
  },
  contain:{
    fontSize: 14,
  }
});
