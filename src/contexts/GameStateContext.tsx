import React, { createContext, useState, ReactNode } from "react";

interface GameStateContextProps {
  playerName: string;
  setPlayerName: (name: string) => void;
}

export const GameStateContext = createContext<
  GameStateContextProps | undefined
>(undefined);

interface GameStateProviderProps {
  children: ReactNode;
}

export const GameStateProvider: React.FC<GameStateProviderProps> = ({
  children,
}) => {
  const [playerName, setPlayerName] = useState<string>("");

  return (
    <GameStateContext.Provider value={{ playerName, setPlayerName }}>
      {children}
    </GameStateContext.Provider>
  );
};
