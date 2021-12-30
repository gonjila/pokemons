import styled from "styled-components";

function PokemonIdentity({ name, types, isFavorite }) {
    const onHeartClick = () => {};

    return (
        <Container>
            <div>
                <h2>{name && name}</h2>
                {types && <p>{types.map((type) => type + " ")}</p>}
            </div>
            {/* TODO დაჭერისას უნდა იცვლებოდეს მთლიანი გულით */}
            <button onClick={onHeartClick}>
                <img src={`/images/${isFavorite ? `heart` : `heart_border`}.svg`} alt={name} />
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
