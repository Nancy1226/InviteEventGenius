import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Cl = styled.div`
    font-size: 1.5rem;
    .link{
        text-decoration-line: none;
        text-decoration: none;
        color: #8442E7;
    }
`;

function ContentLink({to, link}) {
    return (  
        <Cl>
            <Link to={to} className="link">{link}</Link>
        </Cl>
    );
}

export default ContentLink;