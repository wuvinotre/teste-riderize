import React from "react";
import {
  BottomRecorder,
  RecorderContainer,
  Title,
  Stopwatch,
  ContainerColumn,
  ContainerRow,
  Texto,
  TextBold,
  Button,
  TextButton,
} from "./styled";

export default function BottomRec() {
  return (
    <BottomRecorder>
      <RecorderContainer>
        <Title>Tempo</Title>
        <Stopwatch>00:00:02</Stopwatch>
      </RecorderContainer>
      <ContainerRow>
        <ContainerColumn>
          <Texto>Distância</Texto>
          <TextBold>00:00:02</TextBold>
        </ContainerColumn>
        <ContainerColumn>
          <Texto>Velocidade (km/h)</Texto>
          <TextBold>31.1</TextBold>
        </ContainerColumn>
      </ContainerRow>
      <Button>
        <TextButton>Parar</TextButton>
      </Button>
    </BottomRecorder>
  );
}
