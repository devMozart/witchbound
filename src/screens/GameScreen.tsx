import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import DialogueBox from "../components/DialogueBox";
import sceneData from "../data/scene1.json";

type Direction = "left" | "right";

interface Choice {
  text: string;
  leadsTo: string;
}

interface SceneNode {
  sceneImage?: string;
  text: string;
  character: string;
  characterImage?: string;
  characterSide: Direction;
  choices: Choice[];
  leadsTo?: string;
  endOfBranch?: boolean;
}

interface Scene {
  [key: string]: SceneNode;
}

interface GameScreenProps {}

const GameScreen: React.FC<GameScreenProps> = () => {
  const [currentSceneId, setCurrentSceneId] = React.useState<string>("start");
  const scene: Scene = sceneData as Scene;
  const currentScene = scene[currentSceneId];

  const [sceneImage, setSceneImage] = React.useState<string | undefined>(
    currentScene.sceneImage
  );

  if (currentScene.sceneImage && sceneImage !== currentScene.sceneImage) {
    setSceneImage(currentScene.sceneImage);
  }

  const [characterImage, setCharacterImage] = React.useState<
    string | undefined
  >(currentScene.characterImage);

  if (
    currentScene.characterImage &&
    characterImage !== currentScene.characterImage
  ) {
    setCharacterImage(currentScene.characterImage);
  }

  return (
    <Grid
      templateRows="1fr auto"
      borderRadius="10px"
      position="relative"
      sx={{
        backgroundImage: `url(./images/scene1/${sceneImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box />
      {characterImage && (
        <Image
          src={`./images/scene1/${characterImage}`}
          position="absolute"
          h={400}
          right={currentScene.characterSide === "right" ? "0" : ""}
          left={currentScene.characterSide === "left" ? "0" : ""}
        />
      )}
      <Box p={2}>
        <DialogueBox
          text={currentScene.text}
          heading={currentScene.character}
          headingDirection={currentScene.characterSide}
          options={currentScene.choices.map((c) => {
            return {
              text: c.text,
              onSelect: () => setCurrentSceneId(c.leadsTo),
            };
          })}
          showClick={currentScene.choices.length === 0}
          h={["100%", null, 150]}
          w="100%"
          onClick={() =>
            currentScene.leadsTo && setCurrentSceneId(currentScene.leadsTo)
          }
        />
      </Box>
    </Grid>
  );
};

export default GameScreen;
