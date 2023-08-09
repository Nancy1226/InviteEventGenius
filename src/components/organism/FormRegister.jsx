import styled from "styled-components";
import ContentLink from "../molecules/ContentLink";
import { images } from "../../images/images";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import ContentText from "../molecules/ContentText";


function FormRegister({}) {
    return (  
        <StyledContainer $propsContainer >
            <StyledContainerForm>
                <form>
                <Title msn={"Registro"} />

                <Input type={"text"} placeholder={"Nombre de usuario"}/>
                <Input type={"text"} placeholder={"Correo electronico"}/>
                <Input type={"password"} placeholder={"Contraseña"}/>

                <Button funcion="" name={"Registro"}/>
                <WrapperLink>
                    <ContentText text="Ya tienes una cuenta?" propsText />
                    <ContentLink to="/" link="Inicia Sesión"/>
                </WrapperLink>
                <DivisionText>
                    <ContentText text="Ya tienes una cuenta? Ahora crea y comparte tus diseños e invitaciones a todo el mundo." propsText />
                </DivisionText>
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