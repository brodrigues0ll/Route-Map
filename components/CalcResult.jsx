import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppContext from '../contexts/appContext';


const CalcResult = () => {
  const { apiDistance, apiTime, gasMoney } = useContext(AppContext);


  return (
    <View style={styles.resultsContainer}>

      <View style={styles.resultTime}>
        <Image
          style={styles.resultIcon}
          source={require('../images/time-sm.png')}
        />
        <Text style={styles.resultTxt}>
          {apiTime
            .replace('hours', 'h')
            .replace('mins', 'm')
            .replace(' ', '')
            .replace(' ', '')
            .replace(' ', '')
          }
        </Text>
      </View>

      <View style={styles.resultRoad}>
        <Image
          style={styles.resultIcon}
          source={require('../images/road-sm.png')}
        />
        <Text style={styles.resultTxt}>{apiDistance + ' ' + 'Km'}</Text>
      </View>

      <View style={styles.resultFuel}>
        <Image
          style={styles.resultIcon}
          source={require('../images/fuel-sm.png')}
        />
        <Text style={styles.resultTxt}>
          {
            `R$${gasMoney.toFixed(2).replace('.', ',')}`
          }
        </Text>
      </View>

      <View style={styles.resultPedagio}>
        <Image
          style={styles.resultIcon}
          source={require('../images/pedagio-sm.png')}
        />
        <Text style={styles.resultTxt}>R$00,00</Text>
      </View>

    </View>
  );
};

export default CalcResult;

const styles = StyleSheet.create({
  resultsContainer: {
    // backgroundColor: 'red',
    width: '55%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 25,
  },

  resultTime: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginBottom: 20,
  },

  resultRoad: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  resultFuel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 20,
  },

  resultPedagio: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  resultIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },

  resultTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',

  }

});