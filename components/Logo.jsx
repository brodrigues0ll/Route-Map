import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../images/LOGO.png')}
      />

      <View
        style={styles.hr}
      />

    </View>


  );
};

const styles = StyleSheet.create({
  logoContainer: {
    paddingTop: 30,
    alignItems: 'center',
    marginBottom: 10,
  },

  logo: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  hr: {
    height: 3,
    width: "90%",
    backgroundColor: '#00FFFD',
    borderRadius: 100,
  },


});
