import styled from "styled-components";

function PokemonIdentity() {
    return (
        <Container>
            <div>
                <h2>saxeli</h2>
                <p>tipi, tipi</p>
            </div>
            {/* TODO დაჭერისას უნდა იცვლებოდეს მთლიანი გულით */}
            <button>
                <img src="/images/heart_border.svg" alt="" />
            </button>
        </Container>
    );
}

export default PokemonIdentity;

const Container = styled.div`
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
        z-index: 1;

        display: flex;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;
