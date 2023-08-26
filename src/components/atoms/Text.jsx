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
    ${props => props.$textinvited &&`
        color: black;
        font-size: 2rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100;
    `}
`;

function Text({text, propsText, propsTextSub, textinvited}) {
    return ( 
        <Textstyled $propsText = {propsText} $propsTextSub={propsTextSub} $textinvited={textinvited}>{text} </Textstyled>
    );
}

export default Text;