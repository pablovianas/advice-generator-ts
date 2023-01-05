import styled from "styled-components";

export const Card = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.primary.cardBackgroundColor};
    border-radius: 10px;
    width: 345px;

    h2 {
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 15px;
        margin-top: 30px;
        color: ${({ theme }) => theme.primary.textDiceBase};
    }
    p {
        font-size: 23px;
        padding: 23px;
        text-align: center;
        color: ${({ theme }) => theme.primary.textColorBase};
    }

    picture img {
        width: 100%;
    }

    button {
        cursor: pointer;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        background-color: ${({ theme }) => theme.primary.textDiceBase};
        transform: translateY(50%);
    }
    button:hover {
        box-shadow: 0 5px 20px ${({ theme }) => theme.primary.textDiceBase};
    }
`;