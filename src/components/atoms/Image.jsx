import styled from "styled-components";

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

function Image({ src }) {
  return (
    <>
      <StyledImg src={src} />
    </>
  );
}

export default Image;