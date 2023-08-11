import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { images } from "../../images/images";
import Modal from './Modal';
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import ContentLink from "../molecules/ContentLink";
import ContentText from "../molecules/ContentText";
import TextureLine from '../molecules/TextureLine';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    width: 100vw;
    height: 100vh;
  }
`;


const StyledContainerForm = styled.div`
  width: 100%;
  height: 100vh;
  background: #fcd8ff;
  form {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  @media (min-width: 1024px) {
    form {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      .styledButton {
        position: relative;
        left: 18%;
      }
    }
  }
`;

const WrapperLink = styled.div`
  display: flex;
  gap: 1vh;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  @media (min-width: 1024px) {
    display: flex;
  }
`;


const DivisionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  font-size: 1.5rem;
`;

const StyledContainerImg = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

function FormLogin({ funcion }) {
  const [stateModal1, changeStateModal1] = useState(false);

  return (
    <>
      <StyledContainer>
        <StyledContainerForm>
          <Formik
            onSubmit={() => {
              console.log("Formulario Enviado");
            }}
          >
            {({ handleSubmit }) => (
              <form>
                <Title msn={"Iniciar Sesión"} />

                <Input
                  type={"text"}
                  placeholder={"Nombre de usuario"}
                  id={"username"}
                  name={"username"}
                />
                <Input
                  type={"password"}
                  placeholder={"Contraseña"}
                  id={"password"}
                  name={"password"}
                />

                <StyledButton type="button" className="styledButton" onClick={() => changeStateModal1(!stateModal1) }> 
                  ¿Has olvidado la contraseña?
                </StyledButton>

                <Button funcion={handleSubmit} name={"Iniciar Sesion"} estilo={true}/>
                <WrapperLink>
                  <ContentText text={"¿Aun no  tienes una cuenta?"} propsText />
                  <ContentLink to="/" link={"Que esperas, crea una ahora!"} />
                </WrapperLink>
                <DivisionText>
                  <ContentText
                    text={
                      "Unete a esta nueva experiencia y haz realidad tus pensamientos"
                    }
                    propsText
                  />
                </DivisionText>
                <TextureLine />
              </form>
            )}
          </Formik>
        </StyledContainerForm>
          
          <Modal 
          estado={stateModal1}
          cambiarEstado = {changeStateModal1}
          />

        <StyledContainerImg>
          <Image src={images.child} />
        </StyledContainerImg>
      </StyledContainer>
    </>
  );
}

export default FormLogin;