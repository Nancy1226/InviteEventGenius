import styled from "styled-components"
import { useState } from "react";
import Image from "../atoms/Image";
import {images} from "../../images/images"
import Text from "../atoms/Text"

function HeaderInvited() {
    const [quantity, setQuantity] = useState("30")

    return ( 
        <Header>
            <ContentIcon>
                <Image src={images.group} alt="Icon Group" imgGroup/>
            </ContentIcon>
            <ContentQuotas>
                <Text text="Cupos Total:" textinvited/>
                <Text text={quantity} textinvited/>
            </ContentQuotas>
        </Header>
     );
}

export default HeaderInvited;

const Header = styled.header`
    background-color: white;
    width: 100%;
    display: flex;
    height: 10vh;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ContentIcon = styled.div`
    width: 15%;
    height: 10vh;
`;

const ContentQuotas = styled.div`
    width: 15%;
    display: flex;
    height: 10vh;
    justify-content: center;
    align-items: center;
    gap: 2vh;
`;