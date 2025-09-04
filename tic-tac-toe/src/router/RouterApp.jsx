import { Route, Routes } from "react-router-dom";
import MenuPage from "../pages/MenuPage";
import GameBoardPage from "../pages/GameBoardPage";
import NotFound from "../pages/NotFound";
import ModoGamePage from "../pages/ModoGamePage";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/:modoGame" element={<ModoGamePage />} />
      <Route path="/:modoGame/game" element={<GameBoardPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterApp;
