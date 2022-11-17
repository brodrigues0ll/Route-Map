import React, { useContext } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import AppContext from '../contexts/appContext';


const Destination = () => {
  const { setDestination, destination } = useContext(AppContext);



  return (
    <View style={styles.destinationContainer}>

      <Image
        style={styles.destinationImage}
        source={require('../images/destination.png')}
      />

      <TextInput
        value={destination}
        onChangeText={(text) => setDestination(text)}
        style={styles.destinationInput}
        placeholder='Endereço, Cidade, Estado'
      />
    </View>
  );
};


export default Destination;

const styles = StyleSheet.create({
  destinationContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    left: -23,

  },

  destinationImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',

  },

  destinationInput: {
    backgroundColor: 'white',
    width: '60%',
    height: 45,
    borderRadius: 100,
    padding: 10,
    fontSize: 16,
    marginLeft: 10,

  },


});