import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Container from"./components/container";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Container />
    
    </div>
  );
}

export default App;
