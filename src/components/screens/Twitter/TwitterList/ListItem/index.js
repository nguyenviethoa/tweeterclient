import { ActivityIndicator,
         View, StatusBar, ScrollView, Text, ListView, RefreshControl, Image, Alert, TouchableOpacity, Button} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

class ListItem extends Component{
  render(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    console.log('data of listitem', this.props.data);
    if(this.props.data.length > 0) {
      content = <ListView
        dataSource={ds.cloneWithRows(this.props.data)}
        renderRow={(data) => <this.props.row {...data} />}
      />
    }
    return content
  }
}
export default ListItem;
