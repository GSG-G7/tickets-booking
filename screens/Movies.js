import React from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import  firebase from 'firebase';
import 'firebase/firestore';

import MovieCard from '../components/MovieCard';



export default class Movies extends React.Component {
  state= {
    loading: true,
    movies: [],
  }

  handleBooking = (movie) => {
    this.props.navigation.navigate('Booking',{
      movie
    });
    
  }

  componentDidMount() {
    let cloned = [];
    firebase.firestore().collection('data').get()
    .then(snapshot => {
      snapshot.forEach(doc => {cloned.push({id: doc.id, ...doc.data()})})
    }).then(()=> this.setState({movies: [...cloned[0].movies],loading: false}))
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  render() {
    const { loading, movies } = this.state;
    if(loading) return  <ActivityIndicator size="large" color="#0000ff" style={{justifyContent:"center",flex:1,alignItems:"center"}}/>
    return (
      <View>
      <ScrollView contentContainerStyle={styles.movies}>
        {movies.map(movie => <MovieCard movie={movie} handleClick={() => this.handleBooking(movie)}/>)}
      </ScrollView>
      </View>
    )
  }
}
 

const styles = StyleSheet.create({
  movies: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: "wrap",
  },
});
