import React, { useContext, useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import AppContext from "../contexts/appContext";
import * as Location from "expo-location";

const LocationBtn = () => {
  const { setOrigin, locationWasClicked, setLocationWasClicked } =
    useContext(AppContext);

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        if (locationWasClicked) {
          setOrigin(`${location.coords.latitude} ${location.coords.longitude}`);
        }
      } catch (error) {
        console.error("Error getting location:", error);
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
