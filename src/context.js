import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktail, setCocktail] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");

  const fetchData = useCallback(async () => {
    const response = await fetch(`${url}${searchTerm}`);
    const data = await response.json();

    const { drinks } = data;
    const newCotails = drinks.map((item) => {
      const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
      };
    });

    setCocktail(newCotails);
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider value={{ cocktail, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
