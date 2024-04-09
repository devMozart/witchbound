import { Grid } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import GameBox from "../components/GameBox";

interface BaseScreenProps {
  children: ReactNode;
}

const BaseScreen: React.FC<BaseScreenProps> = ({ children }) => {
  return (
    <Grid
      h="100vh"
      justifyContent="center"
      alignItems="center"
      background="linear-gradient(to bottom, #24243e, #302b63, #0f0c29)"
    >
      <GameBox>{children}</GameBox>
    </Grid>
  );
};

export default BaseScreen;
