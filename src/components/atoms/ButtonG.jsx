import styled from "styled-components";

function ButtonG({name, onClick, propsButton, propsButton2, propsButton3, propsButton4 }) {
    return (  
        <StyledButton type="button" onClick={onClick} $propsButton={propsButton} $propsButton2={propsButton2} $propsButton3={propsButton3} $propsButton4={propsButton4} >
            {name}
        </StyledButton>
    );
}

export default ButtonG;

const StyledButton = styled.button`
    color: black;
    background: #73e8ff;
    border-radius: 20px;
    text-align: center;
    font-family: Inter;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    margin-top: 2%;
    width: 75%;
    padding: 2vh 3%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    
    @media (min-width: 1024px) {
        font-size: 1.8rem;
        ${props => props.$propsButton &&`
            width: 70%;
            height: 8vh;
        `}
    
        ${props => props.$propsButton2 &&`
            width: 70%;
            height: 8vh;
        `}

        ${props => props.$propsButton3 &&`
            width: 70%;
            height: 9.2vh;
            border: 5px solid #5138EE;
            background-color: #5138EE;
            font-size: 1.9rem;
            font-family: Inter;
            font-weight: bold;
        `}

        ${props => props.$propsButton4 &&`
            width: 70%;
            height: 10vh;
        `}
    }

`;

