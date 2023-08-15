import styled from "styled-components";
import Button from "../atoms/Button";

const StyledContainer = styled.div`
    background:#FCD8FF;
    width: 80vw;
    height: 90vh;
`;

const StyledContainerH1 = styled.div`
    display: flex;
    h1{
        margin-left:1.5%;
        margin-top: 2%;
        color: #000;
        text-align: center;
        font-family: 'Inter';
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
    border: 20px solid #FCD8FF;
`;

const StyledContainerOne  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 33.3%;
    padding-left: 2%;
    border-bottom: 2px solid;
    h2{ 
        margin: 1%;
        color: #000;
        font-family: 'Inter';
        font-size: 1.7rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    p{
        color: #000;
        font-family: 'Inter';
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
    button{
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 80%;
        height: 100%;
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
    h2{
        margin: 1%;
        color: #000;
        font-family: 'Inter';
        font-size: 1.7rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    p{
        color: #000;
        font-family: 'Inter';
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
    p{
        margin-top: 3%;
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    button{
        color: #000;
        text-align: center;
        font-family: 'Inter';
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
    h2{
        margin: 1%;
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.7rem;
        text-align: left;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    p{
        color: #000;
        font-family: 'Inter';
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
    button{
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 80%;
        height: 100%;
    }
    `;

function BodySecurity() {
    return ( 
        <>
        <StyledContainer>
        <StyledContainerH1>
            <h1>Seguridad</h1>
        </StyledContainerH1>

        <StyledSubContainer>
            <StyledContainerOne>
                <h2>Contraseña</h2>
                <p>Para cambiar su contraseña tendra que verificar, mediante su correo electronico por seguridad de que sea el propietario legitimo de esta cuenta. </p>
                <p>Oprima el boton de abajo:</p>

                <StyledContainerButtons>
                <Button name={"Cambio de contraseña"} estilo={true} />
                </StyledContainerButtons>

            </StyledContainerOne>

            <StyledContainerTwo>
                <h2>Correo Electronico</h2>
                <p>Para cambiar su correo electrónico tendrá que confirmarlo, deberá ingresar su palabra clave.</p>
                <StyledContainerButton>
                    <p>Correo@correo.com</p>
                    <Button name={"Editar Correo"} />
                </StyledContainerButton>
            </StyledContainerTwo>
            <StyledContainerTree>
                <h2>Eliminacion</h2>
                <p>¿Desea eliminar su cuenta? Una vez que elimine su cuenta, usted ya no podra interactuar o usar su cuenta para sus trabajos.</p>
            <StyledContainerButton1>
                <Button name={"Eliminar cuenta"} />
            </StyledContainerButton1>
            </StyledContainerTree>
        </StyledSubContainer>

        </StyledContainer>
        </> 
        );
}

export default BodySecurity;