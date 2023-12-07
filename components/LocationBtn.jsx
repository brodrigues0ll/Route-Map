import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppContext from "../contexts/appContext";
import * as Location from "expo-location";

const LocationBtn = () => {
  const { setOrigin, locationWasClicked, setLocationWasClicked } =
    useContext(AppContext);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      if (locationWasClicked === true) {
        setOrigin(`${location.coords.latitude} ${location.coords.longitude}`);
      }
    })();
  }, [locationWasClicked]);

  function handleLocationClick() {
    setLocationWasClicked(true);

    setTimeout(() => {
      setLocationWasClicked(false);
    }, 200);
  }

  return (
    <TouchableOpacity onPress={() => handleLocationClick()}>
      <Image
        style={styles.locationImage}
        source={require("../images/location.png")}
      />
    </TouchableOpacity>
  );
};

export default LocationBtn;

const styles = StyleSheet.create({
  locationImage: {
    height: 40,
    width: 40,
    resizeMode: "contain",
    // position: 'absolute',
    // top: -28,
    // right: -20,
    // backgroundColor: 'white',
  },
});
