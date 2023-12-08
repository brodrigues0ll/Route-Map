import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import AppContext from "../contexts/appContext";
import * as Location from "expo-location";

const Map = () => {
  const { markerLat, markerLong } = useContext(AppContext);

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  // console.debug(lat);
  // console.debug(long);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLat(location.coords.latitude);
      setLong(location.coords.longitude);
    })();
  }, []);

  return (
    <View>
      <Text>Map</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -20.67809350237682,
          longitude: -47.059388401777625,
          latitudeDelta: 30.0522,
          longitudeDelta: 20.0421,
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: markerLat,
            longitude: markerLong,
          }}
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "56%",
  },
});
