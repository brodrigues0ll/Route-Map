import React, { useState } from "react";
import AppContext from "./appContext";

function AppProvider({ children }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [rsLitro, setRsLitro] = useState("");
  const [kmLitro, setKmLitro] = useState("");
  const [apiDistance, setApiDistance] = useState("0");
  const [apiTime, setApiTime] = useState("0 h 00 m");
  const [gasMoney, setGasMoney] = useState(0);
  const [btnWasClicked, setBtnWasClicked] = useState(false);
  const [locationWasClicked, setLocationWasClicked] = useState(false);
  const [markerLat, setMarkerLat] = useState(0);
  const [markerLong, setMarkerLong] = useState(0);

  const contextValue = {
    origin,
    setOrigin,
    destination,
    setDestination,
    rsLitro,
    setRsLitro,
    kmLitro,
    setKmLitro,
    apiDistance,
    setApiDistance,
    apiTime,
    setApiTime,
    gasMoney,
    setGasMoney,
    btnWasClicked,
    setBtnWasClicked,
    locationWasClicked,
    setLocationWasClicked,
    markerLat,
    setMarkerLat,
    markerLong,
    setMarkerLong,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
