import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

import Booked from '../components/booked';

export default class Profile extends React.Component {
  state = {
    bookedMovies: [],
    loading: true,
  }

  async componentDidMount() {
    const userId = await firebase.auth().currentUser.uid;
    let cloned = [];
    firebase.firestore().collection(userId).get()
    .then(snapshot => {
      snapshot.forEach(doc => {cloned.push({id: doc.id, ...doc.data()})})
    }).then(()=> this.setState({bookedMovies: [...cloned],loading: false}) )
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  handleLogout = () => {
    firebase.auth().signOut();
  }

  render(){
    const { loading, bookedMovies } = this.state;
    if(loading) return  <ActivityIndicator size="large" color="#0000ff" style={{justifyContent:"center",flex:1,alignItems:"center"}}/>
    return (
      <View style={styles.container}>
        <View style={{alignItems:'flex-end'}}>
      <TouchableOpacity style={styles.formButton} onPress={this.handleLogout}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
        </View>
      {bookedMovies.map(movie => <Booked movie={movie}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  formButton: {
    backgroundColor: '#3366ff',
    width:150,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
    textAlign:"center",
    padding:5,
  }
  
});