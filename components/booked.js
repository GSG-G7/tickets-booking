import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Movies extends React.Component {

  render(){  
const { movie: { poster, title, genre, daySelected, timeSelected } } = this.props
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: poster}} style={styles.image}/>
      </View>
      <View style={styles.bookedText}>
      <Text style={styles.title}>{ title }</Text>
      <Text style={styles.genre}>{ genre }</Text>
      <Text>Day: {daySelected}</Text>
      <Text>Time: {timeSelected} </Text>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 130,
    padding:5,
    backgroundColor: '#fff',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: 'center',
    
  },
  imageContainer: {
    width:'25%'
  },
  image: {
    borderRadius:10,
    width: 100,
    height: 100
  },
  bookedText:{
    // paddingLeft: 50,
    width: '50%'

  },
  title: {
    fontWeight: '700',
    fontSize: 14,
  },
  genre: {
    color: '#808080',
    fontSize: 12,
  }
});
