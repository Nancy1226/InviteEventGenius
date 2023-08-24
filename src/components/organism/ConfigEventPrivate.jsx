import InputText from "../atoms/InputText";
import styled from "styled-components";
import TittleG from "../atoms/TittleG";
import Label from "../atoms/Label";
import ButtonG from "../atoms/ButtonG";
import Text from "../atoms/Text";
import ModalBolets from "./ModalBolets";
import { useState } from "react";
import ButtonDowland from "../atoms/ButtonDownland";

function ConfigEventPrivate() {
    const [stateModel1, cambiarEstadoModel1] = useState(false);
    
    const [formData, setFormData] = useState({
        nameEvent: '',
        nump1: 10,
        nump2: 30,
        nump3: 50,
        numParticipants: '',
        archive: null,
        adress: '',
        category: '',
        date: '',
        time: '',
        price: 300
        
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleArchiveChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            image: event.target.files[0],
        }));
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
    
        try {
            const response = await axios.post('http://localhost:3002/registrarEvento', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
          // Maneja la respuesta de la API según tus necesidades
            console.log('Respuesta de la API:', response.data);
        } catch (error) {
          // Maneja los errores
            console.error('Error al enviar el formulario:', error);
        }
    };
    
    return (  
        <ContentGlobal>
            <TittleG msn={"Configuracion de evento"}/>

            <ContentForm>
                <ContentPrimario onSubmit={handleSubmit}>
                    <Content1>
                        <div className="label">
                            <Label msn="Nombre del evento"/>
                        </div>
                        <InputText type="text" propsText name="name" value={formData.nameEvent} onChange={handleInputChange} />
                    </Content1>
                    <Content2>
                        <ContentSub1>
                            <div className="label">
                                <Label msn="Selecione cupos para el evento"/>
                            </div>
                            <div className="content-option">
                                <div className="option">
                                    <InputText type="radio" propsInputRadio name="name" value={formData.nump1} onChange={handleInputChange}/>
                                    <Label msn="10"/>
                                </div>
                                <div className="option">
                                    <InputText type="radio" propsInputRadio name="name" value={formData.nump2} onChange={handleInputChange}/>
                                    <Label msn="20"/>
                                </div>
                                <div className="option">
                                    <InputText type="radio" propsInputRadio name="name" value={formData.nump3} onChange={handleInputChange}/>
                                    <Label msn="30"/>
                                </div>
                            </div>
                        </ContentSub1>
                        <ContentSub2>
                            <div className="label">
                                <Label msn="Ingrese otra cantidad"/>
                            </div>
                            <InputText type="number" propsCantNumber value={formData.numParticipants} onChange={handleInputChange}/>
                        </ContentSub2>
                    </Content2>
                    <Content3>
                        <div className="label">
                            <Text text="Aquí tendras la posibilidad de cargar y descargar un archivo .xml, para que puedas agrgar una lista de invitados a tu gusto." propsTextSub/>
                        </div>
                        <div className="content-button">
                            <div className="button2">
                                <div class="fileContainer">
                                    <div className="cofee">
                                        <InputText type="file" propsFile accept=".xlsx" value={formData.archive} onChange={handleArchiveChange}/>
                                    </div>
                                    <div className="file">
                                        <Label msn="Subir Archivo" propsLabel/>
                                    </div>
                                </div>
                            </div>
                            <div className="button2">
                                {/* <ButtonG name={"Descargar archivo"} propsButton3 /> */}
                                <ButtonDowland />
                                
                            </div>
                        </div>
                    </Content3>
                    <Content4>
                        <div className="label">
                            <Label msn="Lugar del evento"/>
                        </div>
                        <InputText type="text" propsText value={formData.adress} onChange={handleInputChange}/>
                    </Content4>
                </ContentPrimario>
                <ContentSecundario>
                    <Content5>
                    <div className="label">
                        <Label msn="Categoría"/>
                    </div>
                    <InputText type="text" name="name" propsText/>
                    </Content5>
                    <Content6>
                        <ContentSub3>
                            <div className="label">
                                <Label msn="Fecha"/>
                            </div>
                            <InputText type="date" name="name" propsDate/>
                        </ContentSub3>
                        <ContentSub4>
                            <div className="label">
                                <Label msn="Hora"/>
                            </div>
                            <InputText type="time" name="name" propsTime/>
                        </ContentSub4>
                    </Content6>
                    <Content7>
                        <Contentsub5>
                            <div className="label">
                                <Label msn="Costo de evento privado"/>
                            </div>
                            <InputText type="text" propsTextcort/>
                        </Contentsub5>
                        <Contentsub6>
                            <div className="label">
                                <Label msn="Seleccione el tipo de boletos"/>
                            </div>
                            <ButtonG type="button" name={"Configurar boletos"} propsButton2 onClick={() => cambiarEstadoModel1(!stateModel1) }/>
                            
                        </Contentsub6>
                    </Content7>
                    <Content8>
                        <div className="button2">
                            <ButtonG funcion="" name={"Cancelar"} propsButton2/>
                        </div>
                        <div className="button2">
                            <ButtonG funcion="" name={"Crear"} propsButton2/>
                        </div>
                    </Content8>
                </ContentSecundario>
            </ContentForm>
            <ModalBolets estado = {stateModel1} cambiarEstado = {cambiarEstadoModel1}/> 
        </ContentGlobal>
    );
}


export default ConfigEventPrivate;

const ContentGlobal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentForm = styled.div`
    background-color: white;
    width: 94%;
    height: 77vh;
    display: flex;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

const ContentPrimario = styled.div`
    width: 45%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    
`;

const Content1 = styled.div`
    width: 100%;
    height: 17.5vh;
    .label{
        margin: 3%;
    }
    
`;

const Content2 = styled.div`
    width: 100%;
    display: flex;
    height: 17.5vh;
    
`;

const ContentSub1 = styled.div`
    width: 50%;
    .content-option {
        display: flex;
        width: 100%;
        gap: 6vh;
        .option {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25%;
            height: 8vh;
        }
    }
    .label{
        margin: 2% 3%;
    }

    flex-direction: column;
    display: flex;
`;

const ContentSub2 = styled.div`
    width: 50%;
    text-align: center;
    .label{
        margin: 3% 3% 9% 3%;
    }
`;

const Content3 = styled.div`
    width: 100%;
    height: 17.5vh;
    .content-button {
        width: 100%;
        height: 11vh;
        display: flex;
        .button2 {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            .fileContainer {
                overflow: hidden;
                position: relative;
                
            }

            .fileContainer [type=file] {
                cursor: inherit;
                display: flex;
                font-size: 999px;
                filter: alpha(opacity=0);
                width: 100%;
                height: 8vh;
                border-radius: 20px;
                opacity: 0;
                position: absolute;
                right: 0;
                text-align: right;
                top: 0;
            }

            .fileContainer {
                border-radius: 20px;
                width: 70%;
                height:0;
                padding-bottom: 8vh;
                border: 0.5vh solid #5138EE;
                background: #5138EE;
                .cofee {
                    width: 0;
                }
                .file {
                    /* background-color: #05dd22; */
                    width: 100%;
                    height: 8vh;
                    display: flex;
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                }
            }

            .fileContainer [type=file] {
                cursor: pointer;
            }
        }
    }
`;

const Content4 = styled.div`
    height: 17.5vh;
    .label{
        margin: 3%;
    }
`;

const ContentSecundario  = styled.div`
    width: 45%;
    height: 70vh;
    display: flex;
    flex-direction: column;
`;

const Content5 = styled.div`
    height: 17.5vh;
    .label {
        margin: 3%;
    }
`;

const Content6 = styled.div`
    width: 100%;
    display: flex;
    height: 17.5vh;
`;

const ContentSub3 = styled.div`
    width: 50%;
    .label{
        text-align: center;
        margin: 3% 3% 9% 3%;
    }
`;

const ContentSub4 = styled.div`
    width: 50%;
    .label{
        margin: 3% 3% 9% 3%;
        text-align: center;

    }
`;

const Content7 = styled.div`
    height: 17.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const Contentsub5 = styled.div`
    width: 50%;
    text-align: center;
    height: 17.5vh;
    .label{
        margin: 3% 3% 9% 3%;
    }
`;

const Contentsub6 = styled.div`
    width: 50%;
    text-align: center;
    height: 17.5vh;
    .label{
        margin: 3% 3% 6% 3%;
    }
`;

const Content8 = styled.div`
    width: 100%;
    display: flex;
    height: 17.5vh;
    .button2 {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;