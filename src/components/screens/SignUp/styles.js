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
        marginTop: 40,
        marginBottom: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        marginTop: 80,
        marginBottom: 125,
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
    login:{
      flexDirection: 'row',
    },
    text: {
        marginLeft: 100,
        padding: 15,
        fontSize: 16,
        color: '#fff',
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
    loginClick:{
      color: '#fff',
    },
    colorText:{
      color: '#fff',
      fontWeight: 'bold',
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
    }
});
