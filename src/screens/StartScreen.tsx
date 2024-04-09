import { Box, Grid, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import WitchButton from "../components/WitchButton";
import backgroundImage from "/images/splash.webp";
import logo from "/images/witchbound.webp";

interface StartScreenProps {
  onStartGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartGame }) => {
  return (
    <Grid
      gridTemplateColumns={["1fr", null, "auto 1fr"]}
      gridTemplateRows={["auto 1fr", null, "1fr"]}
    >
      <Box
        display="grid"
        borderRadius={["10px 10px 0 0", null, "10px 0 0 10px"]}
      >
        <Image
          h={[410, null, 450]}
          borderRadius="xl"
          src={logo}
          alt="Witchbound"
        />
      </Box>
      <Box
        display="grid"
        gridTemplateRows={["1fr", null, "auto 1fr"]}
        borderRadius={["0 0 10px 10px", null, "0 10px 10px 0"]}
      >
        <Image
          display={["none", null, "unset"]}
          borderRadius="0 10px 0 0"
          src={backgroundImage}
          alt="The mysterious village of Ravenwood"
        />
        <Box
          display="grid"
          gridTemplateRows="auto 1fr auto"
          rowGap={["1em", null, 0]}
          textAlign="center"
          p={3}
        >
          <Text color="white" fontWeight={700}>
            Uncover the truth in the village of Ravenwood
          </Text>
          <Text color="white" fontSize="14px">
            A game by{" "}
            <Link
              href="https://github.com/devMozart"
              color="#f7be5c"
              isExternal
            >
              Amadeus
            </Link>
          </Text>
          <WitchButton
            onClick={onStartGame}
            aria-label="Start the game Witchbound"
          >
            Start Game
          </WitchButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default StartScreen;
