import styled from "styled-components";

const StyledContainerInput = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: rgba(0, 0, 0, 0.65);
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 10%;
  text-align: justify;

  @media (min-width: 1024px) {
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: rgba(0, 0, 0, 0.65);
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 10%;
    margin-top: 2%;
    text-align: justify;
  }
`;

const StyledInput = styled.input`
  width: 75%;
  height: 7vh;
  padding: 0 3%;
  border-radius: 20px;
  border: 3px solid var(--electric-blue, #73e8ff);
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  outline: none;

  @media (min-width: 1024px) {
    width: 65%;
    height: 60px;
    font-size: 1.7rem;
    /* font-size: 1.25rem; */
    ${props => props.$propsText &&`
        width: 95%;
        height: 7vh;
        border: 0.3vh solid black;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0);
    `}

    ${props => props.$propsCantNumber &&`
        width: 80%;
        height: 7vh;
        border: 0.3vh solid black;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0);
    `}

    ${props => props.$propsFile &&`
        width: 70%;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0);
    `}

    ${props => props.$propsDate &&`
        width: 90%;
        border: 0.3vh solid black;
        height: 7vh;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0);
    `}

    ${props => props.$propsTime &&`
        width: 90%;
        height: 7vh;
        border: 0.3vh solid black;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0);
    `}

    /* ${props => props.$propsImage &&`
        width: 90%;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0);
    `} */

    ${props => props.$propsInput &&`
        width: 100%;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0);
    `}
  }

`;

function Input({ type, placeholder, name, id, dato, valor, propsInput, propsText, propsFile, accept, propsCantNumber, propsDate, propsTime }) {
  return (
    <>
      <StyledContainerInput>
        <StyledInput
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={dato}
          onChange={valor}
          $propsInput={propsInput}
          $propsText={propsText}
          $propsFile={propsFile}
          accept={accept}
          $propsCantNumber={propsCantNumber}
          $propsDate={propsDate}
          $propsTime={propsTime}
        />
      </StyledContainerInput>
    </>
  );
}

export default Input;