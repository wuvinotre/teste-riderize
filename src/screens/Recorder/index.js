import React from "react";
import { StyleSheet } from "react-native";
import { Container } from "./styled";
import FabButton from "../../components/FabButton";
import Map from "../../components/Map";
import BottomRec from "../../components/BottomRecorder";

export default function Recorder() {
  return (
    <Container>
      <Map />
      <FabButton />
      <BottomRec />
    </Container>
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
