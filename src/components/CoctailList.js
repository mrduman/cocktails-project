import React, { useContext } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { AppContext } from "../context";

const CocktailList = () => {
  const data = useContext(AppContext);
  const { cocktail } = data;
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div class="cocktails-center">
        {cocktail.map((cocktail) => {
          return <Cocktail {...cocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
