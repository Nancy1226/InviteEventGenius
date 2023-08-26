import { NavLink } from "react-router-dom";
import { images } from "../../images/images";
import {useContext} from "react";
import {useEffect} from "react";
import { useState } from "react";
import axios from 'axios';
import UserContext from "../../context/UserContext";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import OptionsNav from "../molecules/OptionsNav";
import "../styles/NavbarVertical.css"

function NavbarVertical({src}) {
    const {userName, setUserName} = useContext(UserContext);
    const {setIsLoged} = useContext(UserContext);
    const [dataApi, setDataApi] = useState({});

    useEffect(() => {
        obtenerImagen(); 
      },[]);

    const obtenerImagen = async () => {
        const response = await axios.get(`http://localhost:3002/getUserByname/${userName}`)
        setDataApi(response.data);
        console.log(dataApi.nameuser);
    }


    return ( 
    <>
        <div className="container-main">
            <div className="subcontainer">
                <div className="subcontainer-img">
                    
                    <Image src={dataApi.photo} imgConf/>

                </div>
            <div className="subcontainer-options-nav">
                <ul className="subcontainer-options">
                    <OptionsNav to={"/profile"} src={images.profilep} msn={"Tu cuenta"} />
                </ul>
                <ul className="subcontainer-options">
                    <OptionsNav to={"/security"} src={images.security} msn={"Seguridad"} />
                </ul>
            </div>
            
            </div>
            <div className="subcontainer-button">
                <Button name={"Cerrar Sesión"} estilo={true} />
            </div>
        </div>
    </> 
    );
}

export default NavbarVertical;