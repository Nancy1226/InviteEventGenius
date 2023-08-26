import styled from "styled-components";
import TittleG from "../atoms/TittleG";
import Label from "../atoms/Label";
import InputText from "../atoms/InputText";
import ButtonG from "../atoms/ButtonG";

function InvRegisterPublic() {
    return (  
        <ContentP>
            <InvitationContainer>
                    <TittleG msn={"Registro"} propsTittle/>

                    <ContentFormGeneral>
                        <Content1>
                            <div className="label">
                                <Label msn={'Nombre completo'} propsInvitation/>
                            </div>
                            <InputText type='text' propsText/>
                            <div className="label">
                                <Label msn={'Correo Electronico'} propsInvitation/>
                            </div>
                            <InputText type='email' propsText/>
                            <div className="label">
                                <Label msn={'Edad'} propsInvitation/>
                            </div>
                            <InputText type='text' propsText/>
                        </Content1>
                        <Content2>
                            <ContentPhone>
                                <div className="label">
                                    <Label msn={'Numero Telefonico'}/>
                                </div>
                                <InputText type='text' propsText/>
                            </ContentPhone>
                            <ContentButton>
                                <div className="button2">
                                    <ButtonG funcion="" name={"Cancelar"} propsButton2/>
                                </div>
                                <div className="button2">
                                    <ButtonG funcion="" name={"Registrarse"} propsButton2 />
                                </div>
                            </ContentButton>
                        </Content2>

                    </ContentFormGeneral>
            </InvitationContainer>
        </ContentP>
    );
}

export default InvRegisterPublic;


const ContentP = styled.div`
    background-color: #ffff;
    width: 90%;
    height: 90vh;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.40);
    display: flex;
    justify-content: center;
    align-items: center;
`;


const InvitationContainer = styled.div`
    width: 95%;
    height: 75vh;
    
`;

const ContentFormGeneral = styled.div`
    width: 100%;
    display: flex;
    gap: 8%;
`;

const Content1 = styled.div`
    width: 46%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    .label {
        width: 100%;
        display: flex;
        margin-top: 1%;
    }
`;

const Content2 = styled.div`
    
    height: 65vh;
    width: 46%;
    display: flex;
    flex-direction: column;
    gap: 2vh;
`;

const ContentPhone = styled.div`
    width: 100%;
`;

const ContentButton = styled.div`
    height: 50vh;
    width: 100%;
    display: flex;
    .button2 {
        height: 70vh;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;