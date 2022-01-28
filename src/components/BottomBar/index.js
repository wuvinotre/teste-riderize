import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomContainer,
  IconsContainer,
  IconsButton,
  Button,
  IconButton,
  TextButton,
} from "./styled";

export default function BottomBar() {
  const navigation = useNavigation();

  return (
    <BottomContainer>
      <IconsContainer>
        <IconsButton>
          <Ionicons name="git-branch-outline" size={28} />
        </IconsButton>
        <IconsButton>
          <Ionicons name="bicycle-outline" size={28} />
        </IconsButton>
        <IconsButton>
          <Ionicons name="stats-chart-outline" size={28} />
        </IconsButton>
        <IconsButton>
          <Ionicons name="browsers-outline" size={28} />
        </IconsButton>
      </IconsContainer>
      <Button
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Recorder")}
      >
        <TextButton>Iniciar Atividade</TextButton>
        <IconButton>
          <Ionicons name="arrow-forward-outline" size={25} color="#fff" />
        </IconButton>
      </Button>
    </BottomContainer>
  );
}
