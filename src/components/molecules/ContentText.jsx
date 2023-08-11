import { styled } from "styled-components";
import Text from "../atoms/Text";


const Ct = styled.div`
    font-size: 1.5rem;
`;
function ContentText({text, propsText}) {
    return ( 
        <Ct>
            <Text text={text} propsText={propsText} />
        </Ct>
    );

}

export default ContentText;