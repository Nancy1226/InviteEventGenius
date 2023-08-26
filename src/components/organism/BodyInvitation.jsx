import styled from "styled-components";
import { useState } from "react";
import { images } from "../../images/images";
import Template from "../atoms/Template";
import WrapperButton from "../molecules/WrapperButton";

function BodyInvitation() {
    const [showButton, setShowButton] = useState(true);

    return ( 
        <Main>
            <ContentTemplate>
                <Template src={images.templateOne} alt={"Invitacion"} />
            </ContentTemplate>
            <ContentShow>
                {showButton && (
                    <WrapperButton onClickD={""} onClickA={""} msnD={"Rechazar"} msnA={"Aceptar"} invt/>
                )}
                {!showButton && (
                    <WrapperButton onClickD={""} onClickA={""} msnD={"Rechazar"} msnA={"Pagar y Aceptar"} invt/>
                )}
            </ContentShow>
        </Main>
     );
}

export default BodyInvitation;

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
`;

const ContentTemplate = styled.div`
    width: 84%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentShow = styled.div`
    background-color: #73E8FF;
    width: 16%;
    height: 90vh;
    display: flex;
    border-left:0.1vh solid black;
    justify-content: center;
    align-items: center;
`;