import React, { useContext, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import AppContext from "../contexts/appContext";
import * as Location from "expo-location";

const LocationBtn = () => {
  const {
    setOrigin,
    locationWasClicked,
    setLocationWasClicked,
    debug,
    setDebug,
  } = useContext(AppContext);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { granted } = await Location.requestBackgroundPermissionsAsync();

        if (!granted) {
          throw new Error("Location permission not granted");
        }

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

        const { latitude, longitude } = location.coords;

        setOrigin(`${latitude} ${longitude}`);

        setDebug("Latitude: " + latitude + "\nLongitude: " + longitude);
      } catch (error) {
        setDebug(error.message);
        console.log(error.message);
      }
    };

    if (locationWasClicked) {
      getLocation();
    }
  }, [locationWasClicked]);

  const handleLocationClick = () => {
    setLocationWasClicked(true);

    setTimeout(() => {
      setLocationWasClicked(false);
    }, 200);
  };

  return (
    <TouchableOpacity onPress={handleLocationClick}>
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
  },
});
