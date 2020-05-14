import React from "react";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import "./App.css";
import NavBar from "./SortingVisualizer/NavBar";
import SortingManager from "./SortingVisualizer/SortingManager";

function App() {
  return (
    <div className="App">
      <SortingManager></SortingManager>
    </div>
  );
}

export default App;
