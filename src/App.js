import "./App.css";
import Header from "./componets/Header";
import MapindData from "./componets/MapindData";
import FatchData from "./service/FatchData";
import Profile from "./componets/Profile";
import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Header />
      <div className="ayman">
        <MapindData />
        <MapindData />
      </div>
    </div>
  );
}

export default App;
