import styled from "styled-components";
import Image from "../atoms/Image";
import { images } from "../../images/images";

const StyledContainer = styled.div`
    background: #8442E7;
    width: 15vw;
    height: 100%;
    /* border: 2px solid rebeccapurple; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* align-items: center; */
    /* justify-content: center; */
`;

const StyledContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 9%;
    width: 100%;
    /* height: 100%; */
    .styled-button{
        width: 40%;
        /* border: 2px solid white; */
        display: flex;
        flex-direction: column;
        background: none;
        border: none;
        align-items: center;
        font-family: 'Inter';
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        color: #FFF;
        img{
            width: 50px;
            height: 50px;
        }
        &:hover{
            cursor: pointer;
        }
    }
`;

function BarRight({addText, addImage, draw, circle, clean}) {
    return ( 
    <>
        <StyledContainer>

            <StyledContainerButtons>
            <button type="button" className="styled-button" onClick={addText}><Image src={images.text} />Texto</button>
            </StyledContainerButtons>

            <StyledContainerButtons>
            <button type="button" className="styled-button" onClick={addImage}><Image src={images.image} />Imagenes</button>
            </StyledContainerButtons>

            <StyledContainerButtons>
            <button type="button" className="styled-button" onClick={draw}><Image src={images.draw} />Dibujar</button>
            </StyledContainerButtons>

            <StyledContainerButtons>
            <button type="button" className="styled-button" onClick={circle}><Image src={images.circle} />Añadir Circulo</button>
            </StyledContainerButtons>

            {/* <StyledContainerButtons>
            <button type="button" className="styled-button" onClick={clean}><Image src={images.clean} />Seleccionar</button>
            </StyledContainerButtons> */}

            <StyledContainerButtons>
            <button type="button" className="styled-button" onClick={clean}><Image src={images.clean} />Limpiar</button>
            </StyledContainerButtons>

        </StyledContainer>
    
    </>
     );
}

export default BarRight;