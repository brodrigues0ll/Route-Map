import React, { useState } from "react";
import AppContext from "./appContext";

function AppProvider({ children }) {
  const [origin, setOrigin] = useState("Macaé, RJ");
  const [destination, setDestination] = useState("Córrego do Ouro, RJ");
  const [rsLitro, setRsLitro] = useState(5);
  const [kmLitro, setKmLitro] = useState(11);
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
