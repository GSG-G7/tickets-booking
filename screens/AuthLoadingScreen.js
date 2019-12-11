import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

export default class AuthLoadingScreen extends React.Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      this.props.navigation.navigate(user ? 'App' : 'Auth')
    })
    // this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> loading...</Text>
        <ActivityIndicator size="large" color="#0000ff" style={{justifyContent:"center"}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  }
})