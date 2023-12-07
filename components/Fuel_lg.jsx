import React, { useContext } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import AppContext from "../contexts/appContext";

const Fuel_lg = () => {
  const { setRsLitro, rsLitro } = useContext(AppContext);

  const formatCurrency = (rawValue) => {
    // remove os separadores existentes
    let value = rawValue.replace(/\./g, "").replace(/,/g, "");

    // limita a quantidade de caracteres
    if (value.length > 15) {
      value = value.slice(0, 15);
    }

    // formata o valor como moeda brasileira
    let formattedValue = (+value / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    if (formattedValue === "NaN") {
      formattedValue = "";
    }

    setRsLitro(formattedValue);
  };

  const handleChange = (text) => {
    // remove todos os caracteres que não são números, pontos ou vírgulas
    const filteredValue = text.replace(/[^\d.,]/g, "");

    formatCurrency(filteredValue.replace(",", "."));
  };

  return (
    <View style={styles.fuel_lgContainer}>
      <Image
        style={styles.fuel_lgImage}
        source={require("../images/fuel_lg.png")}
      />

      <TextInput
        keyboardType="numeric"
        style={styles.fuel_lgInput}
        placeholder="R$"
        value={rsLitro.toString()}
        onChangeText={handleChange}
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
