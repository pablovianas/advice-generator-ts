import React, { useState, useEffect } from "react";
import { getAdvice } from "../../services/api";
import * as Styled from './style'


type adviceProps = {
    slip: adviceProps,
    id: number;
    advice: string;
};

export const Card = () => {
    const [advice, setAdvice] = useState<adviceProps>(Object);

    async function fetchData() {
        const {slip}: adviceProps = await getAdvice();
        setAdvice(slip);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Styled.Card>
            <h2> Advice #{advice.id ?? "01"} </h2>
            <p> {advice.advice ?? "Loading advice.."} </p>
            <img src="./images/pattern-divider-mobile.svg" alt="Pattern divider" />
            <button onClick={fetchData}>
                <img src="./images/icon-dice.svg" alt="Dice icon" />
            </button>
        </Styled.Card>
    );
}