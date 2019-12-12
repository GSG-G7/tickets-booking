import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

export default class Booking extends React.Component{
  state = {
    movieName: '',
    daySelected: '',
    timeSelected: '',
  }
  selectDay = (day) => {
    this.setState({daySelected:day})
  }
  selectTime = (time) => {
    this.setState({timeSelected:time})
  }
  handleBooking = async (title, genre, poster, times, days) => {
    const userId = await firebase.auth().currentUser.uid;
    const { daySelected, timeSelected } = this.state;
    await firebase.firestore().collection(userId).doc(title).set({
      title,
      genre,
      poster,
      daySelected,
      timeSelected
    })
    this.props.navigation.navigate('Movies')
  }
  render(){
    const isSelected = '#3366ff';
    const {navigation:{state:{params:{movie:{title, genre, poster, times, days }}}}} = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.close} onPress={() => this.props.navigation.navigate('App')}>
        <Ionicons name='md-close-circle' size={40} color='#3366ff' />
        </TouchableHighlight>
        <View style={styles.imageContainer}>
          <Image source={{uri: poster}} style={styles.image}/>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.genre}>{genre}</Text>
        <Text style={styles.timeText}>
          Day
        </Text>
        <View>
          <ScrollView horizontal={true} contentContainerStyle={styles.timeButton} showsHorizontalScrollIndicator={false}>
            {days.map(day => <TouchableOpacity style={[styles.timeOption, {backgroundColor: day === this.state.daySelected ? isSelected : '#fff'}]} onPress={()=>this.selectDay(day)}><Text style={{color: day === this.state.daySelected ? '#fff' : '#000'}}>{day}</Text></TouchableOpacity>)}
          </ScrollView>
        </View>
        <Text style={styles.timeText}>
          Showtime
        </Text>
        <View>
          <ScrollView horizontal={true} contentContainerStyle={styles.timeButton} showsHorizontalScrollIndicator={false}>
            {times.map(time => <TouchableOpacity style={[styles.timeOption,{backgroundColor: time === this.state.timeSelected ? isSelected : '#fff'}]} onPress={()=>this.selectTime(time)}><Text style={{color: time === this.state.timeSelected ? '#fff' : '#000'}}>{time}</Text></TouchableOpacity>)}
          </ScrollView>
        </View>
        <TouchableHighlight style={styles.book} onPress={() => this.handleBooking(title, genre, poster, times, days)}>
        <Text style={styles.buttonText}>Book My Tickets</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
  },
  close: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 5,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    borderRadius: 15,
    width: 250,
    height: 280,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: "center"
  },
  genre: {
    color: '#BBBBBB',
    fontSize: 14,
    textAlign: "center",
  },
  timeText: {
    color: '#808080'
  },
  timeButton: {
    padding:10,
  },
  timeOption: {
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10
  },
  book: {
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#3366ff',
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
});
