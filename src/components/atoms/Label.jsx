import styled from "styled-components";

function Label({msn, propsLabel}) {
    return (  
        <LabelG $propsLabel={propsLabel} >{msn}</LabelG>
    );
}

export default Label;

const LabelG = styled.label`
    font-size: 2rem;
    font-family: Inter;
    @media (min-width: 1024px) {
        padding: ${props => props.estilo ? '3% 3%' : '2.5% 3%'};
        width: 65%;
        font-size: 2rem;
        ${props => props.$propsLabel &&`
            font-size: 1.5rem;
            font-family: Inter;
            font-weight: bold;
            color: #ffff;
        `}
    }
`;