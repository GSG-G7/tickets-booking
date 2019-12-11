import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import firebase from 'firebase';


import AppNavigator from './navigation/AppNavigator';
import { firebaseConfig } from './config';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);  
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  }
})
