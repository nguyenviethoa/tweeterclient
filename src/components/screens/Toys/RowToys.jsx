import React, { Component } from 'react';
import { Text} from 'react-native';
import { ToysView } from 'ToysView';

class RowToys extends Component {
  render() {
    return (
      <Text>This component renders either 2 ToysView component 
        if toys are small or 1 ToysView component if toys are big</Text>
    );
  }
}

export default RowToys;