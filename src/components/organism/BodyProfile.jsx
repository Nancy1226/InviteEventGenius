import { useState } from "react";
import { images } from "../../images/images";
import axios from "axios";
import {useContext} from "react";
import {useEffect} from "react";
import UserContext from "../../context/UserContext";
import styled from "styled-components";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import InputText from "../atoms/InputText";
import ButtonFile from "../atoms/ButtonFile";


function BodyProfile() {    
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState("");
    const [showInput, setShowInput] = useState(false);
    const {userName, setUserName} = useContext(UserContext);
    const {setIsLoged} = useContext(UserContext);
    const [dataApi, setDataApi] = useState({});

    useEffect(() => {
        // console.log("Obteniendo la imagen")
        obtenerImagen(); 
      },[]);

    const obtenerImagen = async () => {
        const response = await axios.get(`http://localhost:3002/photoUser/${userName}`)
       
        const base64Image = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          );
  
          setDataApi(`data:image/jpeg;base64,${base64Image}`);

        // setDataApi(response.data);
        console.log("imprimiendo el estado "+dataApi);
    }


    const handleImageSelect = (e) => {
        setSelectedImage(e.target.files[0]);
    };
  
    const handleFileChange = async (e) => {
        // Obtener el archivo seleccionado
        const file = e.target.files[0];
        // Actualizar el estado con el archivo
        setSelectedFile(file);
      
        try {
            // Intentar crear la url con el valor de selectFile
            const URL = URL.createObjectURL(selectedFile);
            // const response = await axios.put(`http://localhost:3002/UserUpdatePhoto/${userName}`)

            // Hacer algo con la url ...
        } catch (error) {
            // Mostrar el error o hacer otra cosa
            console.error("No se puede seleccionar el archivo");
        }          
      };
  
    const handleUpload = async () => {
        if (selectedImage) {
            const formData = new FormData();
            formData.append("image", selectedImage);


            try {
                const response = await axios.post(`http://localhost:3002/UserUpdatePhoto/:uderId ${userId}`, formData);
                console.log(response);
                alert("Imagen subida con éxito");
            } catch (error) {
                console.error(error);
                alert("Error al subir la imagen");
            }
        } else {
            alert("Por favor, selecciona una imagen antes de subirla.");
        }
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/UserDeletePhoto/${userId}`);
            console.log(response);
            setSelectedImage(null);
            alert("Imagen borrada con éxito");
        } catch (error) {
            console.error(error);
            alert("Error al borrar la imagen");
        }
    };

    const handlerUpdateName = (event) => {
        // Actualiza el estado "name" con el valor del input
        setName(event.target.value);
    };      

    const handleUpdate = async () => {
        // Enviar el nombre usando axios
        try {
          const response = await axios.put("http://localhost:3002/", { name });
          // Mostrar el resultado
          alert("Nombre actualizado con éxito");
          // Actualizar el estado con el nuevo nombre
          setName(response.data.name);
          setShowInput(false);
        } catch (error) {
          // Mostrar el error
          alert("Error al actualizar el nombre");
        }
    };

    const handleShowInput =async () =>{
        setShowInput(true);

    }

    const handleCancel = async () =>{
        setShowInput(false)
    }

    return ( 
    <>
        <StyledContainer>

            <StyledContainerH1>
                <h1>Tu Cuenta</h1>
            </StyledContainerH1>

            <StyledSubContainer>
                <StyledContainerOne>
                    <StyledContainerProfile>
                        <StyledContainerH2>
                            <h2>Tu foto de perfil</h2>
                        </StyledContainerH2>
                        <StyledContainerImg>
                            <div>
                                {selectedFile&& (
                                    <Image src={URL} alt="Foto de perfil"/>
                                )}
                                {!selectedFile && (
                                    <Image src={dataApi} alt="Foto de perfil" />
                                    
                                    // <image src={dataApi.photo}></image>
                                )}
                            </div>

                        </StyledContainerImg>
                    </StyledContainerProfile>
                    <StyledContainerButtons>
                        <ButtonFile accept="image/*" className="btn-file-img" msn="Cambiar imagen" id="imgProfile" onClick={handleImageSelect} buttonfile />
                        <Button name={"Subir imagen"} estilo={true} onClick={handleUpload} propsButton/>
                        <Button name={"Borrar imagen"} estilo={true} onClick={handleDelete} propsButton/>
                    </StyledContainerButtons>
                </StyledContainerOne>
                <StyledContainerTwo>
                    <StyledContainerInfo>
                        <h1>Informacion</h1>
                        <h2>Nombre</h2>
                        {/* {!showInput && <p>{name}</p>} */}
                        {/* <p>{dataApi.nameuser}</p> */}
                        <p>{}</p>
                    </StyledContainerInfo>
                    <StyledContainerButton>
                        <Button name={"Editar nombre"} estilo={true} onClick={handleShowInput} buttonUpdate/>
                    </StyledContainerButton>
                </StyledContainerTwo>
                <StyledContainerThree>
                    {showInput && (
                        <div className="constent-show-input">
                            <div className="content-input-update">
                                <InputText type="text" dato={name} placeholder="Ingrese un nuevo nombre" valor={handlerUpdateName} inputUpdateName/>
                            </div>
                            <div className="content-button">
                                <Button type="button" onClick={handleUpdate} name="Actualizar Nombre" showButton/>
                                <Button type="button" onClick={handleCancel} name="Cancelar" showButton/>
                            </div>
                        </div>
                    )}
                </StyledContainerThree>
            </StyledSubContainer>
        </StyledContainer>
    </>
    );
}


export default (BodyProfile);

const StyledContainer = styled.div`
    background:#FCD8FF;
    width: 80vw;
    height: 90vh;
    `;

const StyledContainerH1 = styled.div`
    display: flex;
    width: 100%;
    /* margin-top: 5%; */
    h1{
        margin: 2% 0 0 4%;
        /* position: absolute; */
        /* left: 0; */
        color: #000;
        text-align: center;
        font-family: 'Inter';
        font-size: 2.2rem;
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
    height: 50vh;
    gap: 2vh;
    `;

const StyledContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    margin: 0 0 0 6%;
    gap: 2vh;
    `;

const StyledContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 70%;
    .btn-file-img{
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 50%;
        position: relative;
        padding: 2% 4%;
        height: 6vh;
        line-height: 1.5;
        border-radius: 20px;
        background-color: #73e8ff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: 0;
        transition: 0.2s;
        overflow: hidden;
    }
    
    .btn-file-img input[type = "file"]{
        cursor: pointer;
        position: absolute;
        left: 0%;
        top: 0%;
        transform: scale(3);
        opacity: 0;
    }
    
    .btn-file-img:hover{
        background-color: #73e8ff;
    }
`;

const StyledContainerImg = styled.div`
    width: 100%;
    height: 30vh;
    img{
        width: 100%;
    }
    `;

const StyledContainerH2 = styled.div`
    margin: 0 0 0 0;
    width: 100%;
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
    p{
        color: #000;
        text-align: left;
        font-family: 'Inter';
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-left: 7%;
    }
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
    `;

const StyledContainerButton = styled.div`
    /* border: 2px solid rebeccapurple; */
    display: flex;
    flex-direction: row;
    width: 50%;
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

const StyledContainerThree = styled.div`
    width: 100%;
    height: 10vh;
    .constent-show-input{
        width: 100%;
        height: 10vh;
        display: flex;
        .content-input-update{
            width: 50%;
            height: 10vh;
            display: flex;
            margin: 0 0 0 8%;
            justify-content: center;
            align-items: center;
        }
        .content-button{
            width: 100%;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;
