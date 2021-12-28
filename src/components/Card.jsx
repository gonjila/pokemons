import { Link } from "react-router-dom";
import styled from "styled-components";

function Card() {
    return (
        <Container>
            <Link to="/about-pokemon">
                <img className="pokemonImg" src="/images/pokemon.png" alt="pokemon" />
            </Link>
            <div id="textWrapper">
                <div id="text">
                    <h3>saxeli</h3>
                    <p>tipi, tipi</p>
                </div>
                <button>
                    <img src="/images/heart_border.svg" alt="" />
                </button>
            </div>
        </Container>
    );
}

export default Card;

const Container = styled.div`
    /* height: 100px; */
    border: 1px solid #ced4da;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .pokemonImg {
        width: 100%;
        height: 100%;
    }

    #textWrapper {
        width: 100%;
        padding: 10px;
        background-color: #dee2e6;

        display: flex;
        align-items: center;
        justify-content: space-between;

        #text {
            h3 {
                margin: 0;
            }
            p {
                margin: 0;
            }
        }

        button {
            cursor: pointer;
            border: none;
            background-color: transparent;

            display: flex;
            /* justify-content: center;
            align-items: center; */

            img {
                /* width: 100%; */
                /* height: 100%; */
            }
        }
    }
`;
