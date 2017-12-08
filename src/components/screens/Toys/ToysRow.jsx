import React, { Component } from 'react';
import { Text } from 'react-native';
import { ToysItem } from 'ToysItem';

class ToysRow extends Component {
  render() {
    const toyData = [{
      title: 'Đồ chơi 1',
      imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
      toys_type: 'small'
    }, {
      title: 'Đồ chơi 2',
      imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
      toys_type: 'big'
    }, {
      title: 'Đồ chơi 3',
      imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
      toys_type: 'small'
    }];
    const rowType;
    if (rowType === 'small') {
      return ( //2 toys nhỏ
        <View>
          <ToysItem />
          <ToysItem />
        </View>
      );
    } else {
      return ( // 1 toy lớn
        <View>
          <ToysItem />
        </View>
      );
    }
  }
}

export default ToysRow;