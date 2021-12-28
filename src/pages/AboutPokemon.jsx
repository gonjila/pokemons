import styled from "styled-components";
import Card from "../components/Card";

function AboutPokemon() {
    return (
        <Container>
            <div className="aboutPokemon">
                <div className="pokemonImgWrapper">
                    <img src="/images/pokemon.png" alt="pokemon" />
                </div>

                <div className="informationWrapper">
                    <div className="identity">
                        <div>
                            <h2>saxeli</h2>
                            <p>tipi, tipi</p>
                        </div>
                        {/* TODO დაჭერისას უნდა იცვლებოდეს მთლიანი გულით */}
                        <button>
                            <img src="/images/heart_border.svg" alt="" />
                        </button>
                    </div>

                    <div id="progresBars">
                        <div>
                            <progress id="CP" value={35} max={100} />
                            <label htmlFor="CP">CP: 891</label>
                        </div>
                        <div>
                            <progress id="HP" value={45} max={100} />
                            <label htmlFor="HP">HP:1008</label>
                        </div>
                    </div>
                </div>

                <div className="pokemonSizes">
                    <div>
                        <h3>Weight</h3>
                        <p>7.88kg - 10.13kg</p>
                    </div>
                    <div>
                        <h3>Height</h3>
                        <p>0.44m - 0.56m</p>
                    </div>
                </div>
            </div>

            <h3>Evolutions</h3>

            <div id="evolutionExamples">
                <Card />
                <Card />
            </div>
        </Container>
    );
}

export default AboutPokemon;

const Container = styled.div`
    padding: 10px;
    /* text-align: center; */

    .aboutPokemon {
        border: 1px solid #c5c5c5;

        .pokemonImgWrapper {
            text-align: center;
            height: 300px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .informationWrapper {
            width: 100%;
            padding: 10px;
            background-color: #f1f1f1;

            .identity {
                width: 100%;

                display: flex;
                justify-content: space-between;
                align-items: center;

                div {
                    text-align: start;
                    h2 {
                        margin: 0;
                    }
                    p {
                        margin: 0;
                    }
                }
                button {
                    border: none;
                    background-color: transparent;
                    cursor: pointer;
                    display: flex;
                }
            }

            #progresBars {
                margin-top: 10px;

                div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    progress {
                        width: 90%;
                        -webkit-appearance: none;
                        appearance: none;
                        height: 10px;
                        border-radius: 10px;
                    }
                    label {
                    }
                }
            }
        }

        .pokemonSizes {
            padding-top: 10px;
            /* margin-bottom: 10px; */
            background-color: #f1f1f1;

            display: flex;
            align-items: center;

            div {
                width: 50%;
                padding: 20px 20px 20px;
                border: 1px solid #c5c5c5;

                h3 {
                    margin: 0;
                }
                p {
                    margin: 0;
                }
            }
        }
    }

    #evolutionExamples {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
`;
