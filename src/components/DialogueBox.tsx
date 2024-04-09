import { Box, BoxProps, Fade } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HeadingBox, { HeadingDirection } from "./HeadingBox";
import LefClickIndicator from "./LeftClickIndicator";
import DialogueOptionsBox from "./DialogueOptionsBox";

interface Option {
  text: string;
  onSelect: () => void;
}

interface DialogueBoxProps extends BoxProps {
  text: string;
  heading: string;
  headingDirection: HeadingDirection;
  options: Option[];
  showClick: boolean;
}

const DialogueBox: React.FC<DialogueBoxProps> = ({
  text,
  heading,
  headingDirection,
  options,
  showClick,
  ...props
}) => {
  const [currentText, setCurrentText] = useState(text);
  const [fadeInText, setFadeInText] = useState(false);
  const [fadeInIcon, setFadeInIcon] = useState(false);

  useEffect(() => {
    setFadeInText(false);
    const timerText = setTimeout(() => {
      setCurrentText(text);
      setFadeInText(true);
    }, 200);

    setFadeInIcon(false);
    const timerIcon = setTimeout(() => {
      setFadeInIcon(true);
    }, 1000);

    return () => {
      clearTimeout(timerText);
      clearTimeout(timerIcon);
    };
  }, [text]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      {...props}
    >
      <Box
        w="100%"
        h="70%"
        borderRadius="sm"
        color="#2e1a02"
        fontWeight={500}
        textAlign="center"
        zIndex={1}
        cursor={showClick ? "pointer" : ""}
        _hover={{
          backgroundColor: showClick ? "#ad9d87" : "",
        }}
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "0.5em 1em",
          backgroundColor: "#a48d70",
          boxShadow: `0 0 30px #8f5922 inset,
                    0 0 0 2px #6a593d,
                    0 0 0 3px #31210e`,
          border: "1px solid #31210e",
        }}
      >
        <HeadingBox heading={heading} headingDirection={headingDirection} />
        <Fade in={fadeInIcon} transition={{ enter: { duration: 1 } }}>
          {showClick && <LefClickIndicator />}
        </Fade>
        <Fade
          in={fadeInText}
          transition={{ enter: { duration: 1 }, exit: { duration: 0 } }}
        >
          {currentText}
        </Fade>
      </Box>
      {options.length > 0 && <DialogueOptionsBox options={options} />}
    </Box>
  );
};

export default DialogueBox;
