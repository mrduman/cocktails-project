import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context";

const SearchForm = () => {
  const data = useContext(AppContext);
  const { setSearchTerm } = data;

  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = (e) => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div class="form-control">
          <label for="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
