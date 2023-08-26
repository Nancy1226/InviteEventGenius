import styled from "styled-components";

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  ${props => props.$imgConf &&`
      width: 100%;
      object-fit: none;
  `}
  ${props => props.$photoProfile && `
      width: 100%;
      border-radius: 50%;
      border: 0.3vh solid black;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.40);
  `}
  ${props => props.$imgGroup &&`
      width: 100%;
      object-fit: none;
      margin: 0 0 0 35%;
  `}
`;

function Image({ src, imgConf, id, photoProfile, imgGroup}) {
  return (
    <>
<StyledImg src={src} id={id} $imgConf={imgConf} $photoProfile={photoProfile} $imgGroup={imgGroup}/>
    </>
  );
}

export default Image;