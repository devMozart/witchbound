import { Box, ButtonProps, Text } from "@chakra-ui/react";
import React from "react";

interface WitchButtonProps extends ButtonProps {}

const WitchButton: React.FC<WitchButtonProps> = ({
  children,
  isDisabled,
  ...props
}) => {
  const backgroundColor = isDisabled ? "grey" : "#26730f";
  const hoverColor = isDisabled ? "grey" : "#2e8f11";

  return (
    <Box
      className="parchmentBackground"
      w="100%"
      h={10}
      cursor={isDisabled ? "not-allowed" : "pointer"}
      borderRadius="sm"
      color="white"
      _hover={{
        backgroundColor: `${hoverColor}`,
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${backgroundColor}`,
        boxShadow: `0 0 30px #101D2B inset,
        0 0 0 1px #6D6D6D,
        0 0 0 2px #0B0B0B`,
        border: "2px solid #0B0B0B",
      }}
      {...props}
    >
      <Text
        fontSize="22px"
        fontWeight={500}
        sx={{
          textShadow: `
          -1px -1px 0 #000,  
           1px -1px 0 #000,
          -1px  1px 0 #000,
           1px  1px 0 #000`,
        }}
      >
        {children}
      </Text>
    </Box>
  );
};

export default WitchButton;
