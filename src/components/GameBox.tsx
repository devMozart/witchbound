import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface GameBoxProps {
  children: ReactNode;
}

const GameBox: React.FC<GameBoxProps> = ({ children }) => {
  return (
    <Box
      width={["90vw", 400, 750]}
      maxWidth={["100%", null, 750]}
      minHeight={["90vh", null, 450]}
      background="black"
      borderRadius="10px"
      display="grid"
      boxShadow="rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
    >
      {children}
    </Box>
  );
};

export default GameBox;
