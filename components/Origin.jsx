import React, { useContext } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import AppContext from "../contexts/appContext";
import LocationBtn from "./LocationBtn";

const Origin = () => {
  const { setOrigin, origin } = useContext(AppContext);

  return (
    <View style={styles.originContainer}>
      <Image
        style={styles.originImage}
        source={require("../images/origin.png")}
      />

      <TextInput
        value={origin}
        onChangeText={(text) => setOrigin(text)}
        style={styles.originInput}
        placeholder="Endereço, Cidade, Estado"
      />

      <LocationBtn />
    </View>
  );
};

export default Origin;

const styles = StyleSheet.create({
  originContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },

  originImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center",
  },

  originInput: {
    backgroundColor: "white",
    width: "60%",
    height: 45,
    borderRadius: 100,
    padding: 10,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },
});
