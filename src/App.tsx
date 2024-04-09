import React from "react";
import BaseScreen from "./screens/BaseScreen";
import StartScreen from "./screens/StartScreen";
import IntroductionScreen from "./screens/IntroductionScreen";
import GameScreen from "./screens/GameScreen";

type GameView = "StartScreen" | "IntroductionScreen" | "GameScreen";

const App = () => {
  const [gameView, setGameView] = React.useState<GameView>("StartScreen");

  const navigateTo = (view: GameView) => {
    setGameView(view);
  };

  return (
    <>
      <BaseScreen>
        {gameView === "StartScreen" && (
          <StartScreen onStartGame={() => navigateTo("IntroductionScreen")} />
        )}
        {gameView === "IntroductionScreen" && (
          <IntroductionScreen
            onCancel={() => navigateTo("StartScreen")}
            onEmbark={() => navigateTo("GameScreen")}
          />
        )}
        {gameView === "GameScreen" && <GameScreen />}
      </BaseScreen>
    </>
  );
};

export default App;
