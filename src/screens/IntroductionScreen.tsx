import { Box, Grid, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import WitchButton from "../components/WitchButton";
import logo from "/images/witchbound.webp";
import backgroundImage from "/images/characterSelect.webp";
import { useGameState } from "../contexts/useGameState";

interface IntroductionScreenProps {
  onCancel: () => void;
  onEmbark: () => void;
}

const IntroductionScreen: React.FC<IntroductionScreenProps> = ({
  onCancel,
  onEmbark,
}) => {
  const { playerName, setPlayerName } = useGameState();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

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
          rowGap="0.5em"
          textAlign="center"
          p={3}
        >
          <Text color="white" fontWeight={700}>
            What is your name?
          </Text>
          <Input
            value={playerName}
            onChange={handleNameChange}
            color="white"
            placeholder="Enter your name"
            variant="outline"
          />
          <Grid templateColumns="1fr 1fr" columnGap="1em">
            <WitchButton
              onClick={onCancel}
              aria-label="Start the game Witchbound"
              background="white"
            >
              Cancel
            </WitchButton>
            <WitchButton
              onClick={onEmbark}
              aria-label="Start the game Witchbound"
              isDisabled={playerName.length === 0}
            >
              Embark
            </WitchButton>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default IntroductionScreen;
