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
  }
`;

function Button({  name, estilo }) {
  return (
    <>
      <StyledContainer>
        <StyledButton type={"submit"}  estilo={estilo}>
          {name}
        </StyledButton>
      </StyledContainer>
    </>
  );
}

export default Button;