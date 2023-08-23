import styled from "styled-components";

function Label({msn, identifie}) {
    return (  
        <LabelG>{msn}</LabelG>
    );
}

export default Label;

const LabelG = styled.label`
    font-size: 2rem;
`;