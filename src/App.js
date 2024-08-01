import React from "react";
import LoadingScreen from "./components/header/LoadingScreen.js";
import Header from "./components/header/header.js";
import MainTitle from "./components/body/MainTitle.js";
import MainIntroduce from "./components/body/MainIntroduce.js";
import MainWorks from "./components/body/MainWorks.js";
import MainCallToAction from "./components/body/MainCallToAction.js";
import "./App.css";
// import BlurEffect from "./components/animation/blurEffect.js";

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Header />
      <MainTitle />
      <MainIntroduce />
      <MainWorks />
      <MainCallToAction />
    </div>
  );
}

export default App;
