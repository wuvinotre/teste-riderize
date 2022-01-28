import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

export default function Map() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return null;
      }
      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      });
    })();
  }, []);

  return (
    <MapView
      style={styles.map}
      initialRegion={location}
      loadingEnabled={true}
      showsUserLocation={true}
    ></MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
