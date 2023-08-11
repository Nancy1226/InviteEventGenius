import { styled } from "styled-components";

const Textstyled = styled.p`
  ${(props) =>
    props.$propsText &&
    `
        color: black; 
    `}
`;

function Text({ text, propsText }) {
  return <Textstyled $propsText={propsText}>{text} </Textstyled>;
}

export default Text;