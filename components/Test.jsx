import React, { useContext } from 'react';
import { View } from 'react-native';
import AppContext from '../contexts/appContext';

const Test = () => {
  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    rsLitro,
    setRsLitro,
    kmLitro,
    setKmLitro,
    apiDistance,
    gasMoney

  } = useContext(AppContext);

  // console.debug('Api Distance = ' + apiDistance + '\n');

  return (
    <View>

    </View>
  );
};

export default Test;