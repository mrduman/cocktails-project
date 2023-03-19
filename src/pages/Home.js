import React from "react";
import CocktailList from "../components/CoctailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
