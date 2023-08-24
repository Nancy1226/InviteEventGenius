import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import ContentLink from "../molecules/ContentLink";
import { images } from "../../images/images";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import ContentText from "../molecules/ContentText";
import TextureLine from '../molecules/TextureLine';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import WrapperLink from '../molecules/WrapperLink';


function FormRegister() {

    const [formData, setFormData] = useState({
        nameuser:'',
        email:'',
        password:'',
        image: null,
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({ 
            ...prevData,
            [name] : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
    
        try {
            const response = await axios.post('http://localhost:3002/registrarUsuario', formDataToSend, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });
    
          // Maneja la respuesta de la API según tus necesidades
            console.log('Respuesta de la API:', response.data);
            if (response.status == 200) {
                //pendiente : redireccionar usuario o limpiar campos del formulario
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario creado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                })
                Navigate('/');
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Usuario no creado exitosamente o el correo ya existe',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
          // Maneja los errores
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Usuario no creado exitosamente o el correo ya existe',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };


    return (  
        <StyledContainer $propsContainer >
            <StyledContainerForm >
                <Formik>
                <form onSubmit={handleSubmit}>
                <Title msn={"Registro"} />

                <Input pattern={"[A-Za-z][A-Za-z0-9_]{7,29}"} type={"text"} placeholder={"Nombre de usuario"} dato={formData.nameuser} valor={handleInputChange} name="nameuser" required/>
                <Input type={"email"} placeholder={"Correo electronico"} dato={formData.email} valor={handleInputChange} name="email" required/>
                <Input type={"password"} placeholder={"Contraseña"} dato={formData.password} valor={handleInputChange}  name="password" required/>
                {/* <Input type={"file"} accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" placeholder={"Agregar imagen de perfil"}  valor={handleImageChange} name="image"/> */}
                
                <Button type={"submit"}  name={"Registro"}  to='/'/>
                <Content>
                    <WrapperLink txt="Ya tienes una cuenta?" to='/' link="Inicia Sesión" txtlogin/>
                </Content>
                <DivisionText>
                    <ContentText text="Ya tienes una cuenta? Ahora crea y comparte tus diseños e invitaciones a todo el mundo." propsPagina propsTextPagina />
                </DivisionText>
                <TextureLine  propsTextLine1 propsTextLine2 propsTextLine3/>
                </form>
                </Formik>
            </StyledContainerForm>
                

            <StyledContainerImg>
                    <Image src={images.corean}/>
            </StyledContainerImg>
        </StyledContainer>
    );
}

export default FormRegister;

const Content = styled.div`
    display: flex;
    gap: 1vh;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    width: 50%;
    margin-left: 10%;
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
    width: 100%;
`;

const StyledContainer = styled.div` //contenedor principal

    background-color: #FCD8FF;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    
    @media (min-width: 1024px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 100vw;
        height: 100vh;
    }
`;

const StyledContainerForm = styled.div`
    width:100%;
    height: 100vh;
    form{
        height: 100vh; 
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        gap: 0px;
        background: #FCD8FF;
        }

    @media (min-width: 1024px){
        form{
        height: 100vh; 
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        background: #FCD8FF;
        }
    }
`;

// const StyledLink = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `; 

const StyledContainerImg = styled.div`
    /* display: none; */
    
    width: 100%;
    height: 100%;
    display: none;
    @media (min-width: 1024px) {
        display: flex;
        width: 100%;
        height: 100%;
    }
`;