import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktail, setCocktail] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");
  const [loading, toggleLoading] = useState(false);

  const fetchData = useCallback(async () => {
    toggleLoading(true);

    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCotails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktail(newCotails);
      } else {
        setCocktail([]);
      }
      toggleLoading(false);
    } catch (error) {
      console.log(error);
      toggleLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider
      value={{ cocktail, setSearchTerm, searchTerm, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
