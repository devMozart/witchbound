import { Box, Image } from "@chakra-ui/react";
import React from "react";

const LefClickIndicator: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "0.5em",
        bottom: "0.5em",
        display: "flex",
        columnGap: "6px",
        alignItems: "center",
        color: "#6a593d",
      }}
    >
      ...
      <Image src="/images/leftClick.webp" h={5} />
    </Box>
  );
};

export default LefClickIndicator;
