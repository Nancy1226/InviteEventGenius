import Text from "../atoms/Text";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WL = styled.div `
display: flex;
margin: 6% 0 0 0;
width: 100%;

.constent-txt{
    width: 45%;
    display: flex;
}
.constent-link{
    align-items: center;
    display: flex;
    font-family: 'Inter', sans-serif;
    font-size: 1.3rem;
    font-weight: 300;
    width: 24%;
    .link{
        text-decoration-line: none;
        text-decoration: none;
        color: #F62825;
    }

}
    ${props => props.$propsLogin &&`
        display: flex;
        margin: 6% 0 0 0;
        width: 100%;

        .constent-txt{
            width: 38%;
            display: flex;
        }
        .constent-link{
            align-items: center;
            display: flex;
            font-family: 'Inter', sans-serif;
            font-size: 1.3rem;
            font-weight: 300;
            width: 40%;
            .link{
                text-decoration-line: none;
                text-decoration: none;
                color: #F62825;
            }

        }
    `}
`;

function WrapperLink ({txt, to, link, txtlogin, txtRegister, propsLogin}) {
    return(
        <WL $propsLogin={propsLogin}>
            <div className="constent-txt">
                <Text text={txt} txtlogin={txtlogin} txtRegister={txtRegister}/>
            </div>
            <div className="constent-link">
                <Link to={to} className="link">{link}</Link>
            </div>
        </WL>
    )
    
}

export default WrapperLink;