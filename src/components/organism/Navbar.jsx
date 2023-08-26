import { NavLink } from "react-router-dom";
import { images } from "../../images/images";
import Image from "../atoms/Image";
import "../styles/Navbar.css"


function Navbar() {
    return (
      <>
        <div className="container">
        <div className="subcontainer-one">

            <NavLink to={"/"} className='styledNav'>
              Event Genius
            </NavLink>
        
            <NavLink to={"/"} className='styledNav'>
              Inicio
            </NavLink>

            <NavLink to={"/EditTemplate"} className='styledNav'>
              Invitacion
            </NavLink>

            <NavLink to={"/"} className='styledNav'>
              Eventos
            </NavLink>

        </div>

          <div className="subcontainer-two">
            
            <NavLink to={"/"} className='styledNav'>
            <Image src={images.setting} />
            </NavLink>

            <NavLink to={"/"} className='styledNav'>
            <Image src={images.profile} />
            </NavLink>
          </div>

        </div>

      </>
    );
}

export default Navbar;