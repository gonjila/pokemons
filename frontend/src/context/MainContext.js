import { createContext, useState } from "react";

export const mainContext = createContext();

function MainContext({ children }) {
  const [getFavoritePokemons, setGetFavoritePokemons] = useState(false);
  const [serchingPokemon, setSearchingPokemon] = useState("");
  const [pokemonsType, setPokemonsType] = useState("");
  const [cardsLayout, setCardsLayout] = useState("block");

  return (
    <mainContext.Provider
      value={{
        getFavoritePokemons,
        setGetFavoritePokemons,
        serchingPokemon,
        setSearchingPokemon,
        pokemonsType,
        setPokemonsType,
        cardsLayout,
        setCardsLayout,
      }}
    >
      {children}
    </mainContext.Provider>
  );
}

export default MainContext;
