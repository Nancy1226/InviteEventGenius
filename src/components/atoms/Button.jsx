import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

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
  &:hover {
    cursor: pointer;
    transition: background-color 0.7s;
  }
  @media (min-width: 1024px) {
    padding: ${props => props.estilo ? '3% 3%' : '2.5% 3%'};
    width: 65%;
    font-size: 2rem;
    ${props => props.$propsButton &&`
        width: 70%;
        height: 6vh;
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `}
    ${props => props.$buttonUpdate &&`
        margin: 22% 0 0 0;
    `}
  }
`;

function Button({  name, estilo, propsButton, onClick, buttonUpdate}) {
  return (
    <>
      <StyledContainer>
        <StyledButton type={"submit"}  estilo={estilo} $propsButton={propsButton} onClick={onClick} $buttonUpdate={buttonUpdate}>
          {name}
        </StyledButton>
      </StyledContainer>
    </>
  );
}

export default Button;