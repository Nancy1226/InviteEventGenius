import styled from "styled-components";

const StyledContainerInput = styled.div`
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
    
  }

`;

function Input({ type, placeholder, name, id, dato, valor}) {
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
        />
      </StyledContainerInput>
    </>
  );
}

export default Input;