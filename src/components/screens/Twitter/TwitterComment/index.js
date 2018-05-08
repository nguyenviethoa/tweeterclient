import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Comment extends Component {
  static navigationOptions = { title: 'Comment', header: null };
  constructor(props) {
    super(props);
    this.onSideBarPress = this.onSideBarPress.bind(this);
    this.onCreateComment = this.onCreateComment.bind(this);
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  onSideBarPress() {
    console.log('on sidebar pressed');
    this.props.navigation.navigate('DrawerOpen');
  }

  onCreateComment(){
    console.log('on create comment');
    this.props.navigation.navigate('CreateComment');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={this.onSideBarPress} style={styles.boxMenu}>
              <Icon name="menu" style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onCreateComment} style={styles.boxCmt}>
            <Icon name="comment" style={styles.msg} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.boxContent}>
            <View style={styles.avata}>
              <Image source={{uri: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/86.png'}} style={styles.avataIMG} />
            </View>
            <View style={styles.user}>
              <View style={styles.username}>
                <Text style={styles.name}>Andy Matthews</Text>
                <Text style={styles.date}>14:30</Text>
              </View>
              <View style={styles.comment}>
                <Text style={styles.contain}>
                  It was great to see you again earlier. Let's definitely get that coffee nex ...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.boxContent}>
            <View style={styles.avata}>
              <Image source={{uri: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'}} style={styles.avataIMG} />
            </View>
            <View style={styles.user}>
              <View style={styles.username}>
                <Text style={styles.name}>Narek Gevorgyan</Text>
                <Text style={styles.date}>Wed</Text>
              </View>
              <View style={styles.comment}>
                <Text style={styles.contain}>
                  It was great to see you again earlier. Let's definitely get that coffee nex ...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.boxContent}>
            <View style={styles.avata}>
              <Image source={{uri: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/5.png'}} style={styles.avataIMG} />
            </View>
            <View style={styles.user}>
              <View style={styles.username}>
                <Text style={styles.name}>Matt Chevy</Text>
                <Text style={styles.date}>Tue</Text>
              </View>
              <View style={styles.comment}>
                <Text style={styles.contain}>
                  It was great to see you again earlier. Let's definitely get that coffee nex ...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.boxContent}>
            <View style={styles.avata}>
              <Image source={{uri: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png'}} style={styles.avataIMG} />
            </View>
            <View style={styles.user}>
              <View style={styles.username}>
                <Text style={styles.name}>Alexa Andrzejewski</Text>
                <Text style={styles.date}>20/09</Text>
              </View>
              <View style={styles.comment}>
                <Text style={styles.contain}>
                  It was great to see you again earlier. Let's definitely get that coffee nex ...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.boxContent}>
            <View style={styles.avata}>
              <Image source={{uri: 'http://www.nretnil.com/avatar/LawrenceEzekielAmos.png'}} style={styles.avataIMG} />
            </View>
            <View style={styles.user}>
              <View style={styles.username}>
                <Text style={styles.name}>Anna Pickard</Text>
                <Text style={styles.date}>01/09</Text>
              </View>
              <View style={styles.comment}>
                <Text style={styles.contain}>
                  It was great to see you again earlier. Let's definitely get that coffee nex ...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.boxContent}>
            <View style={styles.avata}>
              <Image source={{uri: 'http://www.nretnil.com/avatar/slevin.jpg'}} style={styles.avataIMG} />
            </View>
            <View style={styles.user}>
              <View style={styles.username}>
                <Text style={styles.name}>Kerem Suer</Text>
                <Text style={styles.date}>21/12/14</Text>
              </View>
              <View style={styles.comment}>
                <Text style={styles.contain}>
                  It was great to see you again earlier. Let's definitely get that coffee nex ...
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Comment;
