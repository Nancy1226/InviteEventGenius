import styled from "styled-components";
import { useState } from 'react';
import Button from "../atoms/Button";
import ModalSecurity from "./ModalSecurity"; 
import axios from "axios";

const StyledContainer = styled.div`
  background: #fcd8ff;
  width: 80vw;
  height: 90vh;
`;

const StyledContainerH1 = styled.div`
  display: flex;
  h1 {
    margin-left: 1.5%;
    margin-top: 2%;
    color: #000;
    text-align: center;
    font-family: "Inter";
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const StyledSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 93%;
  border: 20px solid #fcd8ff;
`;

const StyledContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 33.3%;
  padding-left: 2%;
  border-bottom: 2px solid;
  h2 {
    margin: 1%;
    color: #000;
    font-family: "Inter";
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: "Inter";
    text-align: left;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const StyledContainerButtons = styled.div`
  display: flex;
  width: 35%;
  margin-right: 10%;
  button {
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
  }
`;

const StyledContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 33.3%;
  padding-left: 2%;
  border-bottom: 2px solid;
  h2 {
    margin: 1%;
    color: #000;
    font-family: "Inter";
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: "Inter";
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const StyledContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  gap: 40%;
  p {
    margin-top: 3%;
    color: #000;
    text-align: center;
    font-family: "Inter";
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  button {
    color: #000;
    text-align: center;
    font-family: "Inter";
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 65%;
    height: 85%;
  }
`;

const StyledContainerTree = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 33.3%;
  padding-left: 2%;
  h2 {
    margin: 1%;
    color: #000;
    text-align: center;
    font-family: "Inter";
    font-size: 1.7rem;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: "Inter";
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const StyledContainerButton1 = styled.div`
  display: flex;
  width: 35%;
  margin-right: 10%;
  button {
    color: #000;
    text-align: center;
    font-family: "Inter";
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 80%;
    height: 100%;
  }
`;
const ContainerUpdateEmail = styled.div`
  width: 100%;
  background-color: aqua;
`;

function BodySecurity() {

    const [email, setEmail] = useState("Pedro Jose Portillo Gomez");

    const [stateModal1, changeStateModal1] = useState(false);

    const [showInput, setShowInput] = useState(false);

    const handlerUpdateEmail = async (event) =>{
      setEmail(event.target.value);
    };

    const handlerUpdate = async () => {
      try {
        const respons = await axios.put("", {email});
        setEmail(respons.data.email);
        alert("El correo se ha cambiado con éxito");
      } catch (error) {
        alert("El correo no se pudo cambiar");
      }
    };

    const handlerShowActive = async () =>{
      setShowInput(true);
    };

    const handlerShowCancel = async () =>{
      setShowInput(false)
    };

    return (
      <>
        <StyledContainer>
          <StyledContainerH1>
            <h1>Seguridad</h1>
          </StyledContainerH1>

          <StyledSubContainer>
            <StyledContainerOne>
              <h2>Contraseña</h2>
              <p>
                Para cambiar su contraseña tendra que verificar, mediante su
                correo electronico por seguridad de que sea el propietario
                legitimo de esta cuenta.{" "}
              </p>
              <p>Oprima el boton de abajo:</p>

              <StyledContainerButtons>
                <button
                  type="button"
                  onClick={() => changeStateModal1(!stateModal1)}
                >
                  Cambio de contraseña
                </button>
              </StyledContainerButtons>
            </StyledContainerOne>

            <StyledContainerTwo>
              <h2>Correo Electronico</h2>
              <p>
                Para cambiar su correo electrónico tendrá que confirmarlo,
                deberá ingresar su palabra clave.
              </p>
              <StyledContainerButton>
                <p>{email}</p>
                <Button name={"Editar Correo"} onClick={handlerShowActive}/>
              </StyledContainerButton>
            </StyledContainerTwo>
            <ContainerUpdateEmail>
                { showInput && (
                  <constentOpcion>
                    <contentInput>
                      <input type="text" placeholder="Escribe tu nuevo correo" value={email} onChange={handlerUpdateEmail}/>
                    </contentInput>
                    <ContentButton>
                      <button type="button" onClick={handlerUpdate}>Actializar</button>
                      <button type="button" onClick={handlerShowCancel}>Cancelar</button>
                    </ContentButton>
                  </constentOpcion>
                )}
            </ContainerUpdateEmail>
            <StyledContainerTree>
              <h2>Eliminacion</h2>
              <p>
                ¿Desea eliminar su cuenta? Una vez que elimine su cuenta, usted
                ya no podra interactuar o usar su cuenta para sus trabajos.
              </p>
              <StyledContainerButton1>
                <Button name={"Eliminar cuenta"} />
              </StyledContainerButton1>
            </StyledContainerTree>
          </StyledSubContainer>
          <ModalSecurity
            estado={stateModal1}
            cambiarEstado={changeStateModal1}
          />
        </StyledContainer>
      </>
    );
}

export default BodySecurity;