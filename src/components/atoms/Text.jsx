import { styled } from "styled-components";

const Textstyled = styled.p`

    ${props => props.$propsText &&`
        color: black; 
    `}

    ${props => props.$propsTextSub &&`
        color: black;
        font-size: 2rem;
        margin: 0 2%;
    `}
`;


function Text({text, propsText, propsTextSub}) {
    return ( 
        <Textstyled $propsText = {propsText} $propsTextSub={propsTextSub} >{text} </Textstyled>
    );
}

export default Text;