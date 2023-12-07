import React, { useContext } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import AppContext from '../contexts/appContext';

const Km = () => {
  const { setKmLitro, kmLitro } = useContext(AppContext);

  return (
    <View style={styles.kmContainer}>

      <Image
        style={styles.kmImage}
        source={require('../images/km.png')}
      />

      <TextInput
        onChangeText={(kmLitro) => setKmLitro(Number(kmLitro))}
        keyboardType='numeric'
        style={styles.kmInput}
        placeholder='Km / litro'
      />
    </View>
  );
};


export default Km;

const styles = StyleSheet.create({
  kmContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },

  kmImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginRight: 2,

  },

  kmInput: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
    fontSize: 16,
    width: "50%",

  },


});