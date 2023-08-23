import { styled } from "styled-components";

const Textstyled = styled.p`
    
    font-family: Inter;
    font-size: 2rem;

    @media (min-width: 1024px) {
        padding: ${props => props.estilo ? '3% 3%' : '0 2%'};
        width: 100%;
        font-size: 2rem;

        ${props => props.$propsText &&`
            color: black; 
        `}

        ${props => props.$propsTextSub &&`
            color: black;
            font-size: 2rem;
            margin: 0 2%;
        `}

        ${props => props.$txtlogin &&`
            color: black;
            font-family: 'Inter', sans-serif;
            font-size: 1.3rem;
            font-weight: 300;
        `}

        ${props => props.$propsTextPagina &&`
            color: black; 
            font-size: 1.4rem;
            text-align: center;
        `}

        ${props => props.$txtregister &&`
            color: black;
            font-family: 'Inter', sans-serif;
            font-size: 1.3rem;
            font-weight: 300;
        `}

        ${props => props.$propsTextPagina2 &&`
            color: black; 
            font-size: 1.4rem;
            text-align: center;
        `}
    }
`;


function Text({text, propsText, propsTextSub, txtlogin, propsTextPagina, propsTextPagina2, txtRegister}) {
    return ( 
        <Textstyled $propsText = {propsText} $propsTextSub={propsTextSub} $txtlogin={txtlogin} $propsTextPagina={propsTextPagina} $propsTextPagina2={propsTextPagina2} $txtregister={txtRegister} >{text} </Textstyled>
    );
}

export default Text;