// @ts-nocheck
import React from "react";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="container-title">Calcule tes économies</h1>
        <section>
          <h2>InputSection</h2>
          <div>
            <input type="text" placeholder="prix init" />
            <input type="text" placeholder="solde" />
            <div>
              <h2>pastilles</h2>
            </div>
            <input type="text" placeholder="prix remisé" />
            <p> tu economises 5€</p>
            <div>
              <h2>photo</h2>
            </div>
            <button>Enregistrer</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
