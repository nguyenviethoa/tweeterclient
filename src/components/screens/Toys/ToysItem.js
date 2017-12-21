import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { styles } from './styles';
import { CheckBox } from 'native-base';

export default class ToysItem extends Component {
  state = {
    isToySelected: false,
  }
  selectToy = () => {
    this.setState({ isToySelected: !this.state.isToySelected });
  }
  render() {
    return (
      <View style={[styles.toyContainer, this.props.style]}>
        <View style={styles.toyHeader} >
          <View style={styles.toyStatus} />
          <Text style={styles.toyTitle}>{this.props.toyDetail.title}</Text>
        </View>
        <Image source={{ uri: this.props.toyDetail.imgUrl }}
          style={{ width: '100%', height: 150 }} />
        <View style={styles.toyFooter} >
          <Button
            title={this.state.isToySelected ? 'Remove Toy' : 'Add Toy'}
            color="#841584"
            onPress={this.selectToy} />
          {/* <CheckBox style={{ marginRight: 14 }} checked={this.state.isToySelected} /> */}
        </View>
      </View>
    );
  }
}
// export default ToysItem;