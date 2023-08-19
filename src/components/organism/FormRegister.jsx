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

    // const handleImageChange = (event) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         image: event.target.files[0],
    //     }));
    // };

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
        } catch (error) {
          // Maneja los errores
            console.error('Error al enviar el formulario:', error);
        }
    };


    return (  
        <StyledContainer $propsContainer >
            <StyledContainerForm >
                <form onSubmit={handleSubmit}>
                <Title msn={"Registro"} />

                <Input type={"text"} placeholder={"Nombre de usuario"} dato={formData.nameuser} valor={handleInputChange} name="nameuser"/>
                <Input type={"text"} placeholder={"Correo electronico"} dato={formData.email} valor={handleInputChange} name="email"/>
                <Input type={"password"} placeholder={"Contraseña"} dato={formData.password} valor={handleInputChange}  name="password"/>

                <Button type={"submit"}  name={"Registro"} />
                <WrapperLink>
                    <ContentText text="Ya tienes una cuenta?" propsText />
                    <ContentLink to="/" link="Inicia Sesión"/>
                </WrapperLink>
                <DivisionText>
                    <ContentText text="Ya tienes una cuenta? Ahora crea y comparte tus diseños e invitaciones a todo el mundo." propsText />
                </DivisionText>
                <TextureLine  propsTextLine1 propsTextLine2 propsTextLine3/>
                </form>
            </StyledContainerForm>
                

            <StyledContainerImg>
                    <Image src={images.corean}/>
            </StyledContainerImg>
        </StyledContainer>
    );
}

export default FormRegister;

const WrapperLink = styled.div`
    display: flex;
    gap: 1vh;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
`;

const DivisionText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    font-size: 1.5rem;
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