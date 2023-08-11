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
  }
`;

function TextureLine() {
  return (
    <>
      <ContainerTextures1>
        <Image src={images.line1} />
      </ContainerTextures1>

      <ContainerTextures2>
        <Image src={images.line2} />
      </ContainerTextures2>

      <ContainerTextures3>
        <Image src={images.line3} />
      </ContainerTextures3>
    </>
  );
}

export default TextureLine;