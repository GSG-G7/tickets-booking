import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'

export default class Profile extends React.Component {

  handleLogout = () => {
    firebase.auth().signOut();
  }

  render(){
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.formButton} onPress={this.handleLogout}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formButton: {
    backgroundColor: '#3366ff',
    width:150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText:{
    color: '#fff',
    fontSize: 30,
    textAlign:"center",
    padding:5,
  }
  
});