import styled from "styled-components";

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  ${props => props.$imgConf &&`
      width: 100%;
      object-fit: none;
  `}
`;

function Image({ src, imgConf }) {
  return (
    <>
      <StyledImg src={src} $imgConf={imgConf} />
    </>
  );
}

export default Image;