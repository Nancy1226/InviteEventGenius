import styled from "styled-components";
import { images } from "../../images/images";
import Title from "../atoms/Title";
import Image from "../atoms/Image";
import Button from "../atoms/Button";


const StyledContainer = styled.div`
    background:#FCD8FF;
    width: 80vw;
    height: 90vh;
`;

const StyledContainerH1 = styled.div`
    display: flex;
    /* margin-top: 5%; */
    h1{
        /* position: absolute; */
        /* left: 0; */
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
    border: 30px solid #FCD8FF;
    height: 90%;
`;

const StyledContainerOne  = styled.div`
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    padding-left: 5%;
`;



const StyledContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

`;

const StyledContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    width: 85%;
    button{
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const StyledContainerImg = styled.div`
    width: 100%;
    height: 60%;
    img{
        width: 100%;
    }

`;

const StyledContainerH2 = styled.div`
    margin: 8%;
    h2{
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

`;

const StyledContainerTwo  = styled.div`
    /* border: 8px solid yellow; */
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    padding-left: 5%;
`;

const StyledContainerInfo = styled.div`
    /* border: 2px solid royalblue; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 50%;
    h1{
        margin-top: 8%;
        padding-left: 12%;
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    h2{
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 8%;
    }
    p{
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-left: 7%;
    }

`;

const StyledContainerButton = styled.div`
    /* border: 2px solid rebeccapurple; */
    display: flex;
    flex-direction: row;
    width: 35%;
    button{
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

function BodyProfile() {
    return ( 
    <>
        <StyledContainer>

            <StyledContainerH1>
            <h1>Tu cuenta</h1>
            </StyledContainerH1>

            <StyledSubContainer>
                <StyledContainerOne>
                    
                    <StyledContainerProfile>
                    <StyledContainerH2>
                    <h2>Tu foto de perfil</h2>
                    </StyledContainerH2>

                    <StyledContainerImg>
                    <Image src={images.photo} />
                    </StyledContainerImg>
                    </StyledContainerProfile>

                    <StyledContainerButtons>
                    <Button name={"Cambiar imagen"} estilo={true} />
                    <Button name={"Subir imagen"} estilo={true} />
                    <Button name={"Borrar imagen"} estilo={true} />
                    </StyledContainerButtons>



                </StyledContainerOne>
                
                <StyledContainerTwo>
                    <StyledContainerInfo>
                    <h1>Informacion</h1>
                    <h2>Nombre</h2>
                    <p>Juanito Gomez Mendoza</p>
                    </StyledContainerInfo>

                    <StyledContainerButton>
                    <Button name={"Editar nombre"} estilo={true} />
                    </StyledContainerButton>
                </StyledContainerTwo>

            </StyledSubContainer>



        </StyledContainer>

    </>
);
}

export default BodyProfile;