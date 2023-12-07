import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AppContext from "../contexts/appContext";

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

  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://route-map-api-brodrigues0ll.vercel.app/api/directions?origin=${origin}&destination=${destination}`,
        {
          headers: {
            authorization: process.env.EXPO_PUBLIC_API_SECRET,
          },
        }
      );

      const data = await response.json();
      setApiTime(data.routes[0].legs[0].duration.text);
      setApiDistance(
        data.routes[0].legs[0].distance.text.replace(/[^0-9.]/g, "")
      );
      setBtnWasClicked(true);
      setMarkerLat(data.routes[0].legs[0].end_location.lat);
      setMarkerLong(data.routes[0].legs[0].end_location.lng);
      setTimeout(() => {
        setBtnWasClicked(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (apiDistance !== "0") {
      setGasMoney(
        (apiDistance / kmLitro) * Number(rsLitro.replace(",", ".")) * 2
      );
    }
  }, [btnWasClicked]);

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => fetchApi()}>
      <Text style={styles.btnTxt}>CALCULAR</Text>
    </TouchableOpacity>
  );
};

export default CalcBtn;

const styles = StyleSheet.create({
  btnContainer: {
    width: "35%",
    height: "3.5%",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00FFFD",
    overflow: "scroll",
    alignSelf: "center",
    marginBottom: 15,
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#191919",
    letterSpacing: 2,
  },
});
