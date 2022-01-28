import React from "react";
import { Container, Icon } from "./styled";
import { Ionicons } from "@expo/vector-icons";

export default function FabButton() {
  return (
    <Container>
      <Icon>
        <Ionicons name="layers-outline" size={28} />
      </Icon>
      <Icon>
        <Ionicons name="locate-outline" size={28} />
      </Icon>
    </Container>
  );
}
