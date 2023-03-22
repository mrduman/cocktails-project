import React, { useContext } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { AppContext } from "../context";

const CocktailList = () => {
  const data = useContext(AppContext);
  const { cocktail, loading } = data;

  if (loading) {
    return <Loading />;
  }
  if (cocktail.length > 1) {
    return (
      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">
          {cocktail.map((cocktail) => {
            return <Cocktail {...cocktail} key={cocktail.id} />;
          })}
        </div>
      </section>
    );
  }
};

export default CocktailList;
