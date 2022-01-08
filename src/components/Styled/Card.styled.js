import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme?.colors?.body || "#fff"};
    border-radius: 15px;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, .15));
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({ index }) => index % 2 === 0 ? 'row-reverse' : 'row'};

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    @media(max-width: ${({ theme }) => theme?.mobile}) {
        flex-direction: column;
    }
`;