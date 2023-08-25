import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useState, useContext} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from '../../context/UserContext';
import styled from "styled-components";
import axios from 'axios';
import Swal from 'sweetalert2';
import { images } from "../../images/images";
import Modal from './Modal';
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import ContentLink from "../molecules/ContentLink";
import ContentText from "../molecules/ContentText";
import TextureLine from '../molecules/TextureLine';
import WrapperLink from '../molecules/WrapperLink';

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

const Content = styled.div`
    display: flex;
    gap: 1vh;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    width: 70%;
    margin-left: 15%;
  @media (min-width: 1024px) {
    display: flex;
  }
`;


const DivisionText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    width: 100%;
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

function FormLogin() {
  const [stateModal1, changeStateModal1] = useState(false);
  const navigate = useNavigate();
  const { setIsLoged } = useContext(UserContext);
  const { setUserName } = useContext(UserContext);

  return (
    <>
      <StyledContainer>
        <StyledContainerForm>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'CAMPOS VACIOS';
              } else if (
                !/[a-zA-Z0-9_]+([a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/i.test(values.email) //modificar expresion si se requiere
              ) {
                errors.email = 'Correo no valido';
                //aqui puede ir la alerta
              }
              return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {

              setTimeout( async () => {
              
              const response = await axios.get(`http://localhost:3002/usuario/${values.email}/${values.password}`, {
                  params: { email: values.email, password: values.password }
                });

                if (response.data.email === values.email && response.data.password === values.password) {
                  
                  Swal.fire({
                    text: `Bienvenido`,
                    icon: 'success',
                  });
                  await new Promise((resolve) => {
                    window.localStorage.setItem( "loggedUser", JSON.stringify(response.data));
                    resolve();
                  });
                  setIsLoged(true);
                  setUserName(response.data.nameuser);
                  navigate('/profile');

                } else {
                  Swal.fire({
                    title: 'Oops...',
                    text: `Credenciales incorrectas. Inténtalo de nuevo.`,
                    icon: 'error',
                  });
                }            
                setSubmitting(false);
              }, 400);


            }}
          >
            {({ values,errors,touched,handleChange,handleBlur,handleSubmit, isSubmitting, }) => (
              <form onSubmit={handleSubmit}> 
                <Title msn={"Iniciar Sesión"} />

                <Input
                  type={"email"}
                  placeholder={"Correo Electronico"}
                  id={"email"}
                  name={"email"}
                  dato={values.email}
                  valor={handleChange}
                />
                {errors.email && touched.email && errors.email}
                <Input
                  type={"password"}
                  placeholder={"Contraseña"}
                  id={"password"}
                  name={"password"}
                  dato={values.password}
                  valor={handleChange}
                />
                {errors.password && touched.password && errors.password}
                <StyledButton type="button" className="styledButton" onClick={() => changeStateModal1(!stateModal1) }> 
                  ¿Has olvidado la contraseña?
                </StyledButton>

                <Button disabled={isSubmitting} name={"Iniciar Sesion"} estilo={true}/>
                <Content>
                    <WrapperLink txt="¿Aun no tienes unacuenta? " to="/register" link="Que esperas, crea una ahora!" txtRegister propsLogin/>
                </Content>
                <DivisionText>
                    <ContentText text="Unete a esta nueva experiencia y haz realidad tus pensamientos" propsPagina propsTextPagina2 />
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