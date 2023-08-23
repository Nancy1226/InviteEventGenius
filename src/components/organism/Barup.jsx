import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { images } from "../../images/images";
import Image from "../atoms/Image";


const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    height: 8vh;
    width: 100%;
    background: #B9F4FF;
    /* border: 2px solid darkblue; */
`;

const StyledSubContainerOne = styled.div`
    width: 50%;
    /* height: 100%; */
    /* border: 2px solid saddlebrown; */
`;

const StyledSubContainerTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 36px;
    width: 50%;
`;

const StyledContainerButton = styled.div`
        padding-top:0.8%;
        height: 100%;
        width: 30%;
        margin-right: 4%;
        .styled-button{
            display: flex;
            flex-direction: row;
            gap: 10px;
            font-family: 'Inter';
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            background: none;
            height: 80%;
            padding: 7% 8%;
            border: none;
            border-radius: 30px;
            background: #73E8FF;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            img{
                width: 24px;
                height: 28px;
            }
            &:hover{
                cursor: pointer;
            }
        }
`;

const StyledContainerIcons = styled.div`
        /* margin-right:2%; */
        padding-top: 1%;
        /* border: 2px solid red; */
        .button{
            border: none;
            background:none ;
            &:hover{
                cursor: pointer;
            }
        }
`;

function Barup({funcion1, funcionDelete, funcion3, funcion4}) {
    return ( 
    <>
    <StyledContainer> 

        <StyledSubContainerOne>

        </StyledSubContainerOne>

        <StyledSubContainerTwo>

            <StyledContainerIcons>
            <button type="button" className="button" onClick={funcion1}><Image src={images.save} /></button>
            </StyledContainerIcons>

            <StyledContainerIcons>
            <button type="button" className="button" onClick={funcionDelete} ><Image src={images.delete} /></button>
            </StyledContainerIcons>

            <StyledContainerIcons>
            <button type="button" className="button" onClick={funcion3}><Image src={images.share} /></button>
            </StyledContainerIcons>

           <StyledContainerButton>
            <button type="button" className="styled-button" onClick={funcion4}>Descargar plantilla<Image src={images.downloads} /></button>
           </StyledContainerButton>


        </StyledSubContainerTwo>


    </StyledContainer>
    
    </> 
    );
}

export default Barup;