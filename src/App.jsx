import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {/*NAVBAR START */}
      <Navbar />
      {/*NAVBAR END */}

      {/*MAINCONTENT START */}
      <MainContent />
      {/*MAINCONTENT END */}

      {/*FOOTER START */}
      <Footer />
      {/*FOOTER END */}
    </>
  );
}

export default App;
