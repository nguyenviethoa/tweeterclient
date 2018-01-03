// import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   ScrollView,
//   Image
// } from 'react-native';
// import { Button } from 'native-base';
// import { styles } from './styles';

// export default class SignUp extends Component {
//   static navigationOptions = { title: 'SignUp', header: null };
//   render() {
//     return (
//         <View style={styles.container}>
//           <Text style={styles.title}>Sign Up</Text>
//           <View style={styles.wrapper1}>
//             <Image
//               style={{ width: 250, height: 250 }}
//               source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-iUxuYHv8vHDwKDp4oKdCTn5aF6cpTWgvU7Lpu6LmqjYg5VeaA' }} />
//           </View>
//           <Text>Username</Text>
//           <Text>Email</Text>
//           <Text>Password</Text>
//           <View style={styles.wrapper1}>
//             <Button block style={styles.loginButton}>
//               <Text style={styles.loginButtonText}>Sign Up</Text>
//             </Button>
//             <Text style={styles.text}>Already Have An Account? Sign In</Text>
//           </View>
//         </View>
//     );
//   }
// }