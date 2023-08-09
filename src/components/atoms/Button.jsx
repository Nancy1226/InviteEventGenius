import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
`;

const StyledButton = styled.button`
    background: #73E8FF;
    border-radius: 20px;
    text-align: center;
    font-family: Inter;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    margin-top:10%;
    width:65%;
    padding:3% 2%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    &:hover{
        cursor: pointer;
        transition: background-color .7s;
    }
    @media (min-width:1024px) {
        padding:3% 2%;
        width: 65%;
        font-size: 2rem;
    }

`;

function Button({ funcion, name}) {
    return (
    <>
    <StyledContainer>
        <StyledButton type={"button"} onClick={funcion}>{name}</StyledButton>
    </StyledContainer>
    </>
     );
}

export default Button;