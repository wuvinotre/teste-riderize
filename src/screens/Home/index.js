import React from "react";
import { Container } from "./styled";
import FabButton from "../../components/FabButton";
import BottomBar from "../../components/BottomBar";
import Map from "../../components/Map";

export default function Home() {
  return (
    <Container>
      <Map />
      <FabButton />
      <BottomBar />
    </Container>
  );
}
