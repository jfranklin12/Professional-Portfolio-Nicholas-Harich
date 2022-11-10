import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/pages/homepages/hero";
import MyNavbar from './components/pages/homepages/navbar';
import backgroundImage from "./images/backgroundImage.jpg"


function App() {

  const myStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundImage: "repeat",
  };
  return (
    <div>
      <MyNavbar />
      <Hero />
    </div>
  );
}

export default App;
