import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Origin from './components/Origin';
import CalcBtn from './components/CalcBtn';
import CalcMoney from './components/CalcMoney';
import CalcResult from './components/CalcResult';
import Destination from './components/Destination';
import Fuel_lg from './components/Fuel_lg';
import Km from './components/Km';
import Logo from './components/Logo';
import AppProvider from './contexts/appProvider';
import Map from './components/Map';


export default function App() {

  return (
    <AppProvider>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#191919"
          barStyle="light-content"
        />

        <Logo />

        <Origin />

        <Destination />

        <View style={styles.fuelKm} >
          <Fuel_lg />
          <Km />
        </View>

        <CalcBtn />

        <View style={styles.finalResult}>
          <CalcResult />

          <CalcMoney />
        </View>

        <Map />


      </View>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height: '100%',
  },

  fuelKm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 3,
    padding: 10,
    // backgroundColor: '#666',
  },

  finalResult: {
    display: 'flex',
    flexDirection: 'row',
  },

});
