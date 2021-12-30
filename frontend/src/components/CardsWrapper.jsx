import { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

import { mainContext } from "../context/MainContext";
import Card from "./Card";

function CardsWrapper() {
    const { getFavoritePokemons, serchingPokemon, pokemonsType, cardsLayout } = useContext(mainContext);
    //graphQL
    const { data } = useQuery(POKEMONS_QUERY, {
        variables: {
            limit: 12,
            offset: 0,
            search: serchingPokemon,
            type: pokemonsType,
            isFavorite: getFavoritePokemons,
        },
    });

    data && console.log(data.pokemons.edges);

    return (
        <Container>
            <div id={cardsLayout === "row" ? "rowLayout" : "blockLayout"}>
                {data && data.pokemons.edges.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)}
            </div>
        </Container>
    );
}

const POKEMONS_QUERY = gql`
    query pokemons($limit: Int, $offset: Int, $search: String, $type: String, $isFavorite: Boolean) {
        pokemons(
            query: {
                limit: $limit
                offset: $offset
                search: $search
                filter: { type: $type, isFavorite: $isFavorite }
            }
        ) {
            edges {
                id
                image
                name
                types
                isFavorite
            }
        }
    }
`;

export default CardsWrapper;

const Container = styled.div`
    #rowLayout {
        width: 100%;
        padding: 10px;

        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
    }

    #blockLayout {
        width: 100%;
        padding: 10px;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
`;
