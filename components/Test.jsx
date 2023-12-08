import React, { useContext } from "react";
import { Text, View } from "react-native";
import AppContext from "../contexts/appContext";

const Test = () => {
  const { debug } = useContext(AppContext);

  // console.debug('Api Distance = ' + apiDistance + '\n');

  return (
    <Text
      style={{
        color: "white",
        paddingLeft: 30,
      }}
    >
      {debug}
    </Text>
  );
};

export default Test;
