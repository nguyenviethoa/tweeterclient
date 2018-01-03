import { StyleSheet } from 'react-native';
import Fonts from '../../../../../constants/fonts';

const styles = StyleSheet.create({
    buttonMain: {
        flexDirection: 'row',
        justifyContent:'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 12,
        borderRadius: 3,
        paddingTop:11,
        paddingBottom:11,

    },

    buttonText: {
        fontFamily: Fonts.latoBold,
        fontSize: 16,
        textAlign: 'center',
        color:'white',
    },
});

export default styles;
