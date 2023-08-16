import styled from "styled-components";

function Label({msn}) {
    return (  
        <LabelG>{msn}</LabelG>
    );
}

export default Label;

const LabelG = styled.label`
    font-size: 2rem;
`;