import styled from "styled-components";
import TittleG from "../atoms/TittleG";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import InputText from "../atoms/InputText";

function InvitationPublic() {
    return (  
        <InvitationContainer>
            <TittleG msn={"Resgitro"}/>

            <ContentFormGeneral>
                <Content1>
                    <div className="label">
                        <Label msn={'Nombre completo'}/>
                    </div>
                    <InputText type='text' propsText/>
                    <div className="label">
                        <Label msn={'Correo Electronico'}/>
                    </div>
                    <InputText type='email' propsText/>
                    <div className="label">
                        <Label msn={'Edad'}/>
                    </div>
                    <InputText type='text' propsText/>
                </Content1>
                <Content2>
                    <div className="label">
                        <Label msn={'Numero Telefonico'}/>
                    </div>
                    <InputText type='text' propsText/>
                    <ContentSub>
                        <div className="label">
                            <Label msn='Tipo de boleto' />
                        </div>
                        <div className="content-option">
                            <div className="option">
                                <InputText type='radio' propsInputRadio/>
                                <Label msn='Basico' />
                            </div>
                            <div className="option">
                                <InputText type='radio' propsInputRadio/>
                                <Label msn='Pro' />
                            </div>
                            <div className="option">
                                <InputText type='radio' propsInputRadio/>
                                <Label msn='Premium' />
                            </div>
                        </div>
                    </ContentSub>
                    <ContentSub2>
                        <div className="price">
                            <Label msn='$100' />
                            <Label msn='$100' />
                            <Label msn='$100' />
                        </div>
                    </ContentSub2>
                </Content2>

            </ContentFormGeneral>
        </InvitationContainer>
    );
}

export default InvitationPublic;


const InvitationContainer = styled.div`
    background-color: #3b3ef3;
    width: 100%;
    padding: 10vh;
`;

const ContentFormGeneral = styled.div`
    background-color: cadetblue;
    width: 100%;
    display: flex;
    
`;

const Content1 = styled.div`
    background-color: antiquewhite;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content2 = styled.div`
    background-color: aqua;
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const ContentSub = styled.div`
    background-color: darkgreen;
    display: flex;
    flex-direction: column;
`;

const ContentSub2 = styled.div`
    background-color: hotpink;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`;