import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import { GameStateProvider } from "./contexts/GameStateContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <GameStateProvider>
        <App />
      </GameStateProvider>
    </ChakraProvider>
  </React.StrictMode>
);
