import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { styles } from './styles';

export class TwitterItem extends Component {
  state = {
    isTwitterSelected: false,
  }
  selectToy = () => {
    this.setState({ isTwitterSelected: !this.state.isTwitterSelected });
  }
  render() {
    return (
      <View style={[styles.toyContainer, this.props.style]}>
        <View style={styles.toyHeader} >
          <View style={styles.toyStatus} />
          <Text style={styles.toyTitle}>{this.props.toyDetail.title}</Text>
        </View>
        <Image source={{ uri: this.props.toyDetail.urlImage }}
          style={{ width: '100%', height: 150 }} />
        <View style={styles.toyFooter} >
          <Button
            title={this.state.isTwitterSelected ? 'Remove Toy' : 'Add Toy'}
            color="#841584"
            onPress={this.selectToy} />
          {
            this.state.isTwitterSelected ? (
              <Image
                source={require('../../../../../../assets/icons/ok.png')}
                style={styles.checkbox} />) : <Text></Text>
          }
        </View>
      </View>
    );
  }
}
