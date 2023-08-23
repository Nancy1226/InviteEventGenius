import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
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

function FormLogin() {
  const [stateModal1, changeStateModal1] = useState(false);
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);

  const dispatch = useDispatch();


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
                try {
                const response = await axios.get(`http://localhost:3002/usuario/${values.email}/${values.password}`, {
                  params: { email: values.email, password: values.password }
                });
                setApiData(response.data);

                if (apiData.email === values.email && apiData.password === values.password) {
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario encontrado',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/profile');
                }else{
                  
                  Swal.fire({
                    icon: 'error',
                    title: 'Correo o contraseña invalidos',
                    text: '',
                    footer: ''
                  })
                }
            
              } catch (error) {
        

                Swal.fire({
                  icon: 'error',
                  title: 'Campos vacios',
                  text: 'Porfavor, ingrese bien los datos',
                  footer: ''
                })
                
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
                <WrapperLink>
                  <ContentText text={"¿Aun no  tienes una cuenta?"} propsText />
                  <ContentLink to="/register" link={"Que esperas, crea una ahora!"} />
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