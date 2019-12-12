import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'

export default class Login extends React.Component {

  state = {
    email: '',
    password: '',
    error: '',
  }
  handleLogin = () => {
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password).catch(err => this.setState({error: err.message}))
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.error}>{this.state.error}</Text>
        <TextInput style={styles.formInput} placeholder="Email" autoCapitalize="none" onChangeText={(email) => this.setState({email})}/>
        <TextInput style={styles.formInput} placeholder="Password" autoCapitalize="none" secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
        <TouchableOpacity style={styles.formButton} onPress={this.handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
      <Text>If you don't have account </Text>
      <TouchableOpacity style={styles.signupButton} onPress={() => this.props.navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
      </View>
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
  signupContainer:{
    flexDirection: "row",
    flexWrap: 'wrap',
  },
  header: {
    marginBottom: 20,
    fontSize: 50,
    fontWeight: "bold"
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  formInput: {
    width: 250,
    height:40,
    borderWidth: 1,
    borderColor: '#808080',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    fontSize: 20,
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
  },
  signupText:{
    color: '#3366ff',
    textDecorationLine: 'underline',
  }
});