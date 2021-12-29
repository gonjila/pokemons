import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import { mainContext } from "../context/MainContext";

function ControlBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { setCardsLayout } = useContext(mainContext);
    const [allPokemonPage, setAllPokemonPage] = useState(true);

    useEffect(() => {
        if (location.pathname === "/") {
            setAllPokemonPage(true);
        } else if (location.pathname === "/favorite-pokemons") {
            setAllPokemonPage(false);
        }
    }, [location.pathname]);

    const changePageToAll = () => {
        navigate("/");
    };
    const changePageToFavorites = () => {
        navigate("/favorite-pokemons");
    };

    const onRowLayout = () => {
        setCardsLayout("row");
    };
    const onBlockLayout = () => {
        setCardsLayout("block");
    };

    return (
        <Container className="controler">
            <div id="pageSwitchers">
                <button
                    onClick={changePageToAll}
                    style={
                        allPokemonPage ? { backgroundColor: "#67b997", color: "#fff" } : { color: "#67b997" }
                    }
                >
                    All
                </button>
                <button
                    onClick={changePageToFavorites}
                    style={
                        !allPokemonPage ? { backgroundColor: "#67b997", color: "#fff" } : { color: "#67b997" }
                    }
                >
                    Favorite
                </button>
            </div>

            <div id="filterPokemons">
                <input id="searchPokemons" type="search" placeholder="Search" />
                <input id="pokemonType" type="search" placeholder="Type" list="pokemonTypeslist" />
                {/* TODO უნდა ჩავსვა სავარაუდო ტიპები */}
                <datalist id="pokemonTypeslist">
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                    <option value="4" />
                </datalist>

                <div id="layoutBtnWrapper">
                    {/* TODO ღილაკებზე დაჭერისას უნდა შეიცვალოს განლაგება */}
                    <button onClick={onRowLayout}>
                        <img src="/images/rowLayoutIcon.svg" alt="row layout" />
                    </button>
                    <button onClick={onBlockLayout}>
                        <img src="/images/blockLayoutIcon.svg" alt="block layout" />
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default ControlBar;

const Container = styled.div`
    width: 100%;
    padding: 10px;
    text-align: center;
    box-shadow: 0 1px 5px #ced4da;

    #pageSwitchers {
        width: 100%;
        margin-bottom: 10px;

        button {
            font-size: 1.2rem;
            width: 50%;
            height: 40px;
            border: 1px solid #67b997;
            background-color: #fff;
        }
    }

    #filterPokemons {
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
            font-size: 1.1rem;
            padding: 0 10px;
            height: 40px;
            background-color: #ced4da;
            border: none;
            outline: none;
        }
        #searchPokemons {
            width: 55%;
        }
        #pokemonType {
            width: 30%;
        }

        #layoutBtnWrapper {
            height: 40px;

            button {
                height: 100%;
                border: none;
                background-color: #fff;
                cursor: pointer;

                &:first-child {
                    margin-right: 5px;
                }
                &:hover {
                    background-color: #ced4da;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;
