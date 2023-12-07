import React, { useContext } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import AppContext from "../contexts/appContext";

const Fuel_lg = () => {
  const { setRsLitro, rsLitro } = useContext(AppContext);

  return (
    <View style={styles.fuel_lgContainer}>
      <Image
        style={styles.fuel_lgImage}
        source={require("../images/fuel_lg.png")}
      />

      <TextInput
        onChangeText={(rsLitro) => setRsLitro(Number(rsLitro))}
        keyboardType="numeric"
        style={styles.fuel_lgInput}
        placeholder="Km / litro"
      />
    </View>
  );
};

export default Fuel_lg;

const styles = StyleSheet.create({
  fuel_lgContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  fuel_lgImage: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },

  fuel_lgInput: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 10,
    fontSize: 16,
    width: "50%",
  },
});
