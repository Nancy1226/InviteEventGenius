import { styled } from "styled-components";
import Text from "../atoms/Text";


const Ct = styled.div`
    font-size: 1.5rem;
    
    @media (min-width: 1024px) {
        padding: ${props => props.estilo ? '3% 3%' : '2.5% 3%'};
        width: 50%;
        font-size: 2rem;
        

        ${props => props.$propsText &&`
                width: 70%;
                height: 8vh;
                font.size: 1.5rem;
        `}

        ${props => props.$propsPagina &&`
                width: 90%;
                height: 8vh;
        `}
    }

`;
function ContentText({text, propsText, propsPagina, propsTextPagina, propsTextPagina2 }) {
    return ( 
        <Ct $propsPagina={propsPagina}>
            <Text text={text} $propsText={propsText} propsTextPagina={propsTextPagina} propsTextPagina2={propsTextPagina2} />
        </Ct>
    );

}

export default ContentText;