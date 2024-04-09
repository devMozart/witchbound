import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface Option {
  text: string;
  onSelect: () => void;
}

interface DialogueOptionsBoxProps {
  options: Option[];
}

const DialogueOptionsBox: React.FC<DialogueOptionsBoxProps> = ({ options }) => {
  return (
    <MotionBox
      w="95%"
      h="30%"
      borderRadius="sm"
      color="#2e1a02"
      fontWeight={500}
      textAlign="center"
      position="relative"
      display="grid"
      gridTemplateColumns={options.length === 1 ? "1fr" : "1fr 1fr"}
      alignItems="center"
      sx={{
        padding: "0.5em 1em",
        backgroundColor: "#a48d70",
        boxShadow: `0 0 30px #8f5922 inset,
                    0 0 0 2px #6a593d,
                    0 0 0 3px #31210e`,
        border: "1px solid #31210e",
      }}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 1, ease: "easeOut" }}
    >
      {options.map((option, index) => (
        <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
          <Text
            fontSize="14px"
            cursor="pointer"
            color="#EFE5CC"
            _hover={{ color: "white" }}
            fontWeight={400}
            sx={{
              textShadow: `
        -1px -1px 0 #000,  
         1px -1px 0 #000,
        -1px  1px 0 #000,
         1px  1px 0 #000`,
            }}
            onClick={option.onSelect}
          >
            {option.text}
          </Text>
        </Box>
      ))}
    </MotionBox>
  );
};

export default DialogueOptionsBox;
