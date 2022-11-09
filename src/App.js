import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/pages/homepages/header";
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
      <Header />
    </div>
  );
}

export default App;
