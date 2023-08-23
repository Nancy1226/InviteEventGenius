import React from "react";
import styled from "styled-components";
import Label from "../atoms/Label";
import InputText from "../atoms/InputText";
import ButtonG from "../atoms/ButtonG";

function ModalBolets({estado, cambiarEstado}) {
    return (  
        <>
            {estado &&
                <Overlay>
                    <ContentModel>
                        <ContentForm>
                            <form>
                                <ContentG>
                                    <Content1>
                                        <div className="label">
                                            <Label msn="Boletos"/>
                                        </div>
                                        <div className="content-option1">
                                            <div className="option1">
                                                <div className="inputoption">
                                                    <InputText type="radio" propsInputRadio/>
                                                </div>
                                                <div className="inputoption2">
                                                    <Label msn="Basico"/>
                                                </div>
                                            </div>
                                            <div className="option1">
                                                <div className="inputoption">
                                                    <InputText type="radio" propsInputRadio/>
                                                </div>
                                                <div className="inputoption2">
                                                    <Label msn="Pro"/>
                                                </div>
                                            </div>
                                            <div className="option1">
                                                <div className="inputoption">
                                                    <InputText type="radio" propsInputRadio/>
                                                </div>
                                                <div className="inputoption2">
                                                    <Label msn="Premium" />
                                                </div>
                                            </div>
                                        </div>
                                    </Content1>
                                    <Content2>
                                        <div className="label">
                                            <Label msn="Precios"/>
                                        </div>
                                        <div className="price">
                                            <InputText type="text" propsTextcort/>
                                            <InputText type="text" propsTextcort/>
                                            <InputText type="text" propsTextcort/>
                                        </div>
                                    </Content2>
                                </ContentG>
                                <Content3>
                                    <div className="father">
                                        <div className="button">
                                            <ButtonG name={"Cancelar"} onClick={() => cambiarEstado(false)} propsButton4/>
                                        </div>
                                        <div className="button">
                                            <ButtonG name={"Guardar"} propsButton4/>
                                        </div>
                                    </div>
                                </Content3>

                            </form>
                        </ContentForm>
                    </ContentModel>

                </Overlay>
            }
        </>
    );
}

export default ModalBolets;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.30);
    backdrop-filter: blur(3px);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ContentModel = styled.div`
    width: 90vw;
    height: 80%;
    min-height: 100px;
    position: relative;
    border-radius: 30px;
    background: #ffffff;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.75);
    padding: 25px 10px;

    @media (min-width:1024px){    
    width: 50%;
    height: 590px;
    min-height: 100px;
    position: relative;
    border-radius: 30px;
    background: #ffffff;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.75);
    padding: 25px 10px;
    }
`;

const ContentForm = styled.div`
    height: 63.5vh;
    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 63.5vh;
    }
`;

const Content1 = styled.div`
    width: 50%;
    height: 63.5vh;
    display: flex;
    flex-direction: column;
    gap: 5vh;
    .content-option1 {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        gap: 3vh;
        .option1 {
            display: flex;
            gap: 7vh;
            align-items: center;
            width: 100%;
            height: 15vh;
            .inputoption {
                width: 30%;
            }
            .inputoption2 {
                width: 60%;
            }
        }
    }
    .label{
        text-align: center;
    }

    display: flex;

`;

const Content2 = styled.div`
    width: 50%;
    height: 63.5vh;
    display: flex;
    flex-direction: column;
    gap: 8vh;
    .price {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 9vh;
    }
    .label{
        text-align: center;
    }
`;

const Content3 = styled.div` 
    width: 100%;
    display: flex;
    height: 63.5vh;

    .father {
        width: 100%;
        height: 15vh;
        display: flex;
        .button {
            width: 50%;
            height: 15vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const ContentG = styled.div`
    display: flex;
    margin:  20% 0 0 0;
`;