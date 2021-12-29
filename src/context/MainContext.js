import { createContext, useState } from "react";

export const mainContext = createContext();

function MainContext({ children }) {
    const [favoritePokemons, setFavoritePokemons] = useState([]);
    const [cardsLayout, setCardsLayout] = useState("block");

    return (
        <mainContext.Provider value={{ favoritePokemons, setFavoritePokemons, cardsLayout, setCardsLayout }}>
            {children}
        </mainContext.Provider>
    );
}

export default MainContext;
