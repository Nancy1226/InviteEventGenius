import styled from "styled-components";
import TittleG from "../atoms/TittleG";
import Label from "../atoms/Label";
import ButtonG from "../atoms/ButtonG";
import Text from "../atoms/Text";
import InputText from "../atoms/InputText";
import ButtonDowland from "../atoms/ButtonDownland";
import ButtonFile from "../atoms/ButtonFile";
import { useState } from "react";

function ConfigEventPublic() {

    const [formData, setFormData] = useState({
        nameEvent: '',
        numParticipants: '',
        archive: null,
        adress: '',
        category: '',
        date: '',
        time: '',
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(value);
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
    
    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        console.log(value);
        setFormData((prevData) => ({
            ...prevData,
          numParticipants: value, // Actualiza la clave correspondiente con el valor seleccionado
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
            console.log('Error al enviar el formulario:', error);
        }
    };

    return (  
        <ContentGlobal>
            <TittleG msn={"Configuracion de evento"}/>

            <ContentForm onScroll={handleSubmit}>
                <ContentPrimario>
                <Content1>
                    <div className="label">
                        <Label msn="Nombre del evento"/>
                    </div>
                    <InputText type="text" propsText name="nameEvent" value={formData.nameEvent} onChange={handleInputChange} />
                </Content1>
                <Content2>
                    <ContentSub1>
                        <div className="label">
                            <Label msn="Selecione cupos para el evento"/>
                        </div>
                        <div className="content-option">
                            <div className="option">
                                <InputText type="radio" propsInputRadio name="numParticipants" value="10" checked={formData.numParticipants === "10"} onChange={handleRadioChange} />
                                <Label msn="10"/>
                            </div>
                            <div className="option">
                                <InputText type="radio" propsInputRadio name="numParticipants" value="20" checked={formData.numParticipants === "20"} onChange={handleRadioChange}  />
                                <Label msn="20"/>
                            </div>
                            <div className="option">
                                <InputText type="radio" propsInputRadio name="numParticipants" value="30" checked={formData.numParticipants === "30"} onChange={handleRadioChange}  />
                                <Label msn="30"/>
                            </div>
                        </div>
                    </ContentSub1>
                    <ContentSub2>
                        <div className="label">
                            <Label msn="Ingrese otra cantidad"/>
                        </div>
                        <InputText type="number" propsCantNumber name="numParticipants"  onChange={handleInputChange} />
                    </ContentSub2>
                </Content2>
                <Content3>
                    <div className="label">
                            <Text text="Aquí tendras la posibilidad de cargar y descargar un archivo .xml, para que puedas agrgar una lista de invitados a tu gusto." propsTextSub/>
                    </div>
                    <div className="content-button">
                        <div className="button2">
                            <ButtonFile msn={'Subir Archivo'} accept='.xlsx' value={formData.archive} onClick={handleArchiveChange} className="btn-file-excel" buttonDownland />
                        </div>
                        <div className="button2">
                            <ButtonDowland />
                        </div>
                    </div>
                </Content3>
                <Content4>
                    <div className="label">
                        <Label msn="Lugar del evento"/>
                    </div>
                    <InputText type="text" propsText name="adress" value={formData.adress} onChange={handleInputChange}/>
                </Content4>
                </ContentPrimario>
                <ContentSecundario>
                    <Content5>
                    <div className="label">
                        <Label msn="Categoría"/>
                    </div>
                    <InputText type="text" name="category" propsText value={formData.category} onChange={handleInputChange}/>
                    </Content5>
                    <Content6>
                        <ContentSub3>
                            <div className="label">
                                <Label msn="Fecha"/>
                            </div>
                            <InputText type="date" name="date" propsDate value={formData.date} onChange={handleInputChange}/>
                        </ContentSub3>
                        <ContentSub4>
                            <div className="label">
                                <Label msn="Hora"/>
                            </div>
                            <InputText type="time" name="time" propsTime value={formData.time} onChange={handleInputChange}/>
                        </ContentSub4>
                    </Content6>
                    <Content7>
                        <Text text="No podras seleccionar los tipos de  boletos en publico. Los boletos en eventos publicos seran gratuitos." propsTextSub/>
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

        </ContentGlobal>
    );
}

export default ConfigEventPublic;

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
            .btn-file-excel{
                display: flex;
                text-align: center;
                justify-content: center;
                align-items: center;
                width: 70%;
                position: relative;
                padding: 2% 4%;
                height: 7vh;
                line-height: 1.5;
                border-radius: 20px;
                background-color: #37289c;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                border: 0;
                transition: 0.2s;
                overflow: hidden;
            }
            
            .btn-file-excel input[type = "file"]{
                cursor: pointer;
                position: absolute;
                left: 0%;
                top: 0%;
                transform: scale(3);
                opacity: 0;
            }
            
            .btn-file-img:hover{
                background-color: #37289c;
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