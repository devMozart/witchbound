import { Box, Text } from "@chakra-ui/react";
import React from "react";

export type HeadingDirection = "left" | "right" | "none";

interface HeadingBoxProps {
  heading: string;
  headingDirection: HeadingDirection;
}

const HeadingBox: React.FC<HeadingBoxProps> = ({
  heading,
  headingDirection,
}) => {
  const headingPosition = {
    top: "-0.7em",
    right: headingDirection === "right" ? "0.5em" : "",
    left: headingDirection === "left" ? "0.5em" : "",
  };

  return (
    <>
      {headingDirection !== "none" && (
        <Box
          h={6}
          borderRadius="sm"
          textAlign="center"
          sx={{
            position: "absolute",
            top: `${headingPosition.top}`,
            left: `${headingPosition.left}`,
            right: `${headingPosition.right}`,
            display: "flex",
            alignItems: "center",
            padding: "0.5em 0.7em",
            backgroundColor: "#1C344C",
            boxShadow: `0 0 30px #101D2B inset,
                    0 0 0 1px #6D6D6D,
                    0 0 0 2px #0B0B0B`,
            border: "2px solid #0B0B0B",
          }}
        >
          <Text
            fontSize="14px"
            color="white"
            fontWeight={500}
            textTransform="uppercase"
            sx={{
              textShadow: `
          -1px -1px 0 #000,  
           1px -1px 0 #000,
          -1px  1px 0 #000,
           1px  1px 0 #000`,
            }}
          >
            {heading}
          </Text>
        </Box>
      )}
    </>
  );
};

export default HeadingBox;
