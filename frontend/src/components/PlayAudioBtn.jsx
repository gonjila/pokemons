import styled from "styled-components";

function PlayAudioBtn({ audioUrl }) {
  const audio = new Audio(audioUrl);

  return (
    <Container onClick={() => audio.play()}>
      <img src="/images/volume_up.svg" alt="audio" />
    </Container>
  );
}

export default PlayAudioBtn;

const Container = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: transparent;
  position: absolute;
  left: 3rem;
  bottom: 2rem;
  border-radius: 50%;
  cursor: pointer;

  display: flex;

  &:hover {
    background-color: #ccc;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
