import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const IconTextButton = ({ onPress, iconName, title, style }) => {
    return (
      <TouchableOpacity style={style} onPress={onPress.bind(this)} >
        <View style={styles.savebutton}>
          {iconName !== undefined ?
          <Icon
              name={iconName} backgroundColor='transparent' size={14}
              color='#294086' style={styles.buttonicon}
          /> : null
          }
          <Text style={styles.buttontext}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
};

export default IconTextButton;
