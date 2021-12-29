import { useContext } from "react";
import styled from "styled-components";

import { mainContext } from "../context/MainContext";
import Card from "./Card";

function CardsWrapper() {
    const { cardsLayout } = useContext(mainContext);

    return (
        <Container>
            <div id={cardsLayout === "row" ? "rowLayout" : "blockLayout"}>
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
            </div>
        </Container>
    );
}

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
