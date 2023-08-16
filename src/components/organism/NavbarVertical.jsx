import { NavLink } from "react-router-dom";
import { images } from "../../images/images";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import OptionsNav from "../molecules/OptionsNav";
import "../styles/NavbarVertical.css"

function NavbarVertical({src}) {
    return ( 
    <>
    <div className="container-main">{/* padre */}

        <div className="subcontainer">

            <div className="subcontainer-img">
            
            <Image src={images.photo} />
            </div>

        <div className="subcontainer-options-nav">

            <ul className="subcontainer-options">
                <OptionsNav to={"/profile"} src={images.profilep} msn={"Tu cuenta"} />
            </ul>

            <ul className="subcontainer-options">
                <OptionsNav to={"/security"} src={images.security} msn={"Seguridad"} />
            </ul>
        </div>

    <div className="subcontainer-options-nav-dos">
        <ul className="subcontainer-options">
            <OptionsNav to={"/"} src={images.pay} msn={"Metodos de pago"} />
        </ul>

        <ul className="subcontainer-options">
            <OptionsNav to={"/"} src={images.cart} msn={"Historial de compras"} />
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