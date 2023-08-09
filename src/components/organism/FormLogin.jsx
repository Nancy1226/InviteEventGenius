import styled from "styled-components";
import { Link } from "react-router-dom";
import { images } from "../../images/images";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import Image from "../atoms/Image";
import Button from "../atoms/Button";

const StyledContainer = styled.div` //contenedor principal
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 85vh;
    
    @media (min-width: 1024px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;
        width: 100vw;
        height: 100vh;
    }
`;

const StyledContainerForm = styled.div`
    padding: 0;
    width:100%;
    height: 100vh;

    @media (min-width: 1024px){
        form{
        height: 100vh; 
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        gap: 20px;
          background: #FCD8FF;
        }
    }
`;


const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`; 

const StyledContainerImg = styled.div`
    /* display: none; */
    @media (min-width: 1024px) {
        width: 100%;
        height: 100%;
    }
`;



function FormLogin({funcion}) {
    return ( 
    <>
    <StyledContainer>

        <StyledContainerForm>
            <form>
            <Title msn={"Iniciar Sesión"} />
        
            <Input type={"text"} placeholder={"Nombre de usuario"} />
            <Input type={"password"} placeholder={"Contraseña"} />
        
        <StyledLink>
          <Link to={"/SearchUser"}>¿Has olvidado la contraseña?</Link>
          </StyledLink>
          
            <Button funcion={funcion} name={"Iniciar Sesion"}/>
        
        <StyledLink>
          <Link to={"/SearchUser"}>¿Has olvidado la contraseña?</Link>
          </StyledLink>
            </form>
        </StyledContainerForm>


        <StyledContainerImg>
            <Image src={images.child} />
        </StyledContainerImg>
    </StyledContainer>
    </>
    );
}

export default FormLogin;