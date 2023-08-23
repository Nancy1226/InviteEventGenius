import styled from "styled-components";
import { images } from "../../images/images.js";
import Image from "../atoms/Image.jsx";

const ContainerTextures1 = styled.div`
  /* border: 2px solid red; */
  /* display: none; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 30vw;
  @media (min-width: 1024px) {
    /* display: flex; */
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 1000;
    width: 14%;

    ${props => props.$propsTextLine1 &&`
      position: absolute;
      top: 0;
      left: -2%;
      z-index: 1000;
      width: 14%;
    `}
  }
`;

const ContainerTextures2 = styled.div`
  /* display: none; */
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 30vw;
  @media (min-width: 1024px) {
    /* display: flex; */
    position: absolute;
    top: 0;
    left: 86.8%;
    z-index: 1000;
    width: 13.2%;

    ${props => props.$propsTextLine2 &&`
      position: absolute;
      top: 0;
      left: 36.9%;
      z-index: 1000;
      width: 13.2%;
    `}
  }
`;

const ContainerTextures3 = styled.div`
  /* border: 2px solid red; */
  /* display: none; */
  position: absolute;
  bottom: 0%;
  right: 0;
  z-index: 1000;
  width: 40%;
  @media (min-width: 1024px) {
    /* display: flex; */
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1000;
    width: 18%;

    ${props => props.$propsTextLine3 &&`
      position: absolute;
      bottom: 0;
      right: 50%;
      z-index: 1000;
      width: 15%;
    `}
  }
`;

function TextureLine({propsTextLine1, propsTextLine2, propsTextLine3}) {
  return (
    <>
      <ContainerTextures1 $propsTextLine1={propsTextLine1}>
        <Image src={images.line1} />
      </ContainerTextures1>

      <ContainerTextures2 $propsTextLine2={propsTextLine2}>
        <Image src={images.line2} />
      </ContainerTextures2>

      <ContainerTextures3 $propsTextLine3={propsTextLine3}>
        <Image src={images.line3} />
      </ContainerTextures3>
    </>
  );
}

export default TextureLine;