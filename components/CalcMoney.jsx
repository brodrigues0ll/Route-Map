import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppContext from '../contexts/appContext';

const CalcMoney = () => {
  const { gasMoney } = useContext(AppContext);


  return (
    <View style={styles.resultMoney}>
      <Image
        style={styles.resultIcon}
        source={require('../images/money-sm.png')}
      />
      <Text style={styles.resultTxt}>{gasMoney.toFixed(2).replace('.', ',')}</Text>
    </View>
  );
};

export default CalcMoney;

const styles = StyleSheet.create({
  resultMoney: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    width: "30%",
  },

  resultIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
    marginTop: -15,

  },

  resultTxt: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -20,
  },
});