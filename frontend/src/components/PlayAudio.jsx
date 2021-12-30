import styled from "styled-components";

function PlayAudio({ audioUrl }) {
    const audio = new Audio(audioUrl);

    return (
        <Container onClick={() => audio.play()}>
            <img src="/images/volume_up.svg" alt="audio" />
        </Container>
    );
}

export default PlayAudio;

const Container = styled.button`
    width: 3rem;
    border: none;
    background-color: transparent;
    position: absolute;
    left: 3rem;
    bottom: 2rem;

    display: flex;

    &:hover {
        background-color: #ccc;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;
