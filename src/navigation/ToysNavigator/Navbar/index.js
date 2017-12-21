import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation';

export class Navbar extends Component {
  render() {
    return(
      <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

