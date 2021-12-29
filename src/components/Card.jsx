import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { mainContext } from "../context/MainContext";
import PokemonIdentity from "./PokemonIdentity";

function Card() {
    const { cardsLayout } = useContext(mainContext);

    return (
        <Container>
            <div id={cardsLayout === "row" ? "rowLayoutCard" : "blockLayoutCard"}>
                <Link to="/about-pokemon/1">
                    <img className="pokemonImg" src="/images/pokemon.png" alt="pokemon" />
                </Link>
                <div className="identityWrapper">
                    <PokemonIdentity />
                </div>
            </div>
        </Container>
    );
}

export default Card;

const Container = styled.div`
    #blockLayoutCard {
        max-height: 315px;
        padding: 0;
        border: 1px solid #c5c5c5;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a {
            height: 100%;

            .pokemonImg {
                width: 100%;
                height: 100%;
            }
        }

        .identityWrapper {
            width: 100%;
            padding: 10px;
            background-color: #f1f1f1;
        }
    }

    #rowLayoutCard {
        height: 75px;
        padding: 0;
        border: 1px solid #c5c5c5;

        display: flex;
        justify-content: center;
        align-items: center;

        a {
            height: 100%;

            .pokemonImg {
                width: 100%;
                height: 100%;
            }
        }

        .identityWrapper {
            width: 100%;
            padding: 10px;
            background-color: #f1f1f1;
        }
    }
`;
