import styled from "styled-components";
import Card from "./Card";

function CardsWrapper() {
    return (
        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    );
}

export default CardsWrapper;

const Container = styled.div`
    width: 100%;
    padding: 10px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;
