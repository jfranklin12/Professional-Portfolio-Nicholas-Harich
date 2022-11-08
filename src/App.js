import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/pages/homepages/header";
import MyNavbar from './components/pages/homepages/navbar';


function App() {
  return (
    <div>
      <MyNavbar />
      <Header />
    </div>
  );
}

export default App;
