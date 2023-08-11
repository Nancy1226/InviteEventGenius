import React, { useState } from 'react';
import styled from 'styled-components';
import Image from '../atoms/Image';
import { images } from '../../images/images';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
// import '../styles/Modal.css';

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerModal = styled.div`
    width: 90vw;
    height: 80%;
    min-height: 100px;
    position: relative;
    border-radius: 30px;
    /* border: 2px solid red; */
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.75);
    padding: 25px 10px;

  @media (min-width:1024px){    
    width: 50%;
    height: 590px;
    min-height: 100px;
    position: relative;
    border-radius: 30px;
    /* border: 2px solid red; */
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.75);
    padding: 25px 10px;
  }
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  /* border-bottom: 1px solid #E8E8E8; */
`;

const BotonExit = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 6%;
  height: 6%;
  border: none;
  background:none;
  cursor: pointer;
  transition: all.3s ease all;
  border-radius: 5px;
  color: #1766DC;
  /* border: 2px solid; */
  &:hover{
    background: #F2F2F2;
  }
  @media (min-width: 1024px){
    width: 8%;
  height: 8%;
  }
  
`;

const Content = styled.div`
  form{
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  }
  h3{
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;


function Modal({estado, cambiarEstado ,funcion}) {
  return (
    <>
    {estado && 
    <Overlay>
      <ContainerModal>

        <EncabezadoModal>
        </EncabezadoModal>

        <BotonExit type='button' onClick={()=> {cambiarEstado(false) }} ><Image src={images.exit}/></BotonExit>
    
        <Content>
          <h3>¿Has olvidado la contraseña?</h3>

        <form>

        <Input 
              type={"email"}
              placeholder={"Correo Electronico"}
              id={"username"}
              name={"username"}
        /> 
      <Button funcion={funcion} name={"Buscar"} /> 

      <Input
              type={"password"}
              placeholder={"Contraseña nueva"}
              id={"username"}
              name={"username"}
        />

        <Input 
              type={"password"}
              placeholder={"Confirme la contraseña"}
              id={"username"}
              name={"username"}
              />

          <Button funcion={funcion} name={"Restablecer la contraseña"} estilo={false}/> 
          </form>
      
        </Content>
              
      </ContainerModal>
    </Overlay>
    }
    </>
  );
}

export default Modal;