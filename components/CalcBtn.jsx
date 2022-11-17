import React, { useContext, useEffect } from 'react';
import axios from "axios";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppContext from '../contexts/appContext';

const CalcBtn = () => {
  const {
    origin,
    destination,
    setApiDistance,
    apiDistance,
    setApiTime,
    rsLitro,
    kmLitro,
    setGasMoney,
    btnWasClicked,
    setBtnWasClicked,
    setMarkerLat,
    setMarkerLong,
  } = useContext(AppContext);

  async function fetchApi() {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyCGT6i7AFLTWNQH1cK-YLUesC_EW1fUr84`;
    axios.get(url)
      .then((response) => {
        setApiTime(response.data.routes[0].legs[0].duration.text);
        setApiDistance(response.data.routes[0].legs[0].distance.text.replace(/[^0-9.]/g, ''));
        setBtnWasClicked(true);
        setMarkerLat(response.data.routes[0].legs[0].end_location.lat);
        setMarkerLong(response.data.routes[0].legs[0].end_location.lng);
        setTimeout(() => { setBtnWasClicked(false); }, 2000);
      });
  }

  // fetchApi();

  useEffect(() => {
    if (apiDistance !== '0') {
      setGasMoney((apiDistance / kmLitro) * rsLitro * 2);
    }
  }, [btnWasClicked]);

  return (

    <TouchableOpacity
      onPress={() => fetchApi()}
      style={styles.btnContainer}
    >
      <Text style={styles.btnTxt}>CALCULAR</Text>
    </TouchableOpacity>

  );
};

export default CalcBtn;

const styles = StyleSheet.create({
  btnContainer: {
    width: '35%',
    height: "3.5%",
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FFFD',
    overflow: 'scroll',
    alignSelf: 'center',
    marginBottom: 15,
    visibility: 'hidden',
  },

  btnTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#191919',
    letterSpacing: 2,

  },
});