import React from "react";
import "./App.css";
import Aud from "./components/Aud";
import Syno from "./components/Syno";

function App() {
  return (
    <div className="container">
      <Aud></Aud>
      <Syno />
    </div>
  );
}

export default App;
