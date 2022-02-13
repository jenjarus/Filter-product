import React from "react";

import './Styles/reset.css';
import './Styles/Style.scss';

import Header from "./Components/Header/Header";
import Catalog from "./Components/Catalog/Catalog";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
