import React from "react";
import Header from "../componants/Header";
import InputSection from "../componants/InputSection";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="container-title">Calcule tes économies</h1>
        <InputSection />

        <p> tu economises 5€</p>
        <div>
          <h2>photo</h2>
        </div>
        <button>Enregistrer</button>
      </div>
    </div>
  );
};

export default Home;
