import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext.jsx";
import { ResultsProvider } from "./context/ResultsContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <PlayerProvider>
        <ResultsProvider>
          <App />
        </ResultsProvider>
      </PlayerProvider>
    </BrowserRouter>
  </>
);
