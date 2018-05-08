import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#008fff',
    },
    title: {
        marginTop: 15,
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        marginTop: 60,
        marginBottom: 75,
        height: 30,
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: '#fff',
        width: 320,
        height: 40,
        borderRadius: 15,
        marginTop: 20,
    },
    text: {
        marginLeft: 115,
        padding: 15,
        fontSize: 16,
        color: '#fff',
    },
    box:{
      height: 320,
      flex: 1,
      flexDirection: 'row',
      marginTop: 50,
    },
    boxIconF:{
      flexDirection: 'row',
    },
    boxIconG:{
      flexDirection: 'row',
      paddingLeft: 110,
    },
    icon:{
      fontSize: 16,
      color: '#fff',
      marginRight: 5,
    },
    textIcon:{
      fontSize: 12,
      fontWeight: 'bold',
      color: '#fff',
    },
    buttonLoginFacebook:{
      backgroundColor: '#3333ff',
      width: 150,
      height: 40,
      justifyContent: 'center',
      borderRadius: 15,
      marginRight: 20,
    },
    buttonLoginGmail:{
      backgroundColor: '#ff0000',
      width: 150,
      height: 40,
      justifyContent: 'center',
      borderRadius: 15,
    },
    buttonLogin:{
      flexDirection: 'row',
    },
    successContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    successBox: {
      width: 50,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FAFAFA',
      borderRadius: 12,
    },
    successIcon: {
      color: '#97a1b2',
      fontSize: 33,
    },
});
