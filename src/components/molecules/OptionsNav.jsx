import { NavLink } from "react-router-dom";
import Image from "../atoms/Image";

function OptionsNav({to,src, msn}) {
    return ( 
    <>
    <ul className="subcontainer-options">
        <li>
        <NavLink to={to} className='nav' exact activeClassName="active">
                <i className='icons'><Image src={src} /></i>
                <span className="text">{msn}</span>
        </NavLink>
        </li>
    </ul>
    </>
     );
}

export default OptionsNav;