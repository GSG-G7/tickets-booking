import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Movies extends React.Component {

  render(){  
const { movie: { poster, title, genre },handleClick } = this.props
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <View style={styles.imageContainer}>
        <Image source={{uri: poster}} style={styles.image}/>
      </View>
      <Text style={styles.title}>{ title }</Text>
      <Text style={styles.genre}>{ genre }</Text>
    </TouchableOpacity>
  );
}
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 200,
    padding:5,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex:1,
  },
  image: {
    borderRadius:10,
    width: 150,
    height: 150
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
