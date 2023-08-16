import styled from "styled-components";

function TittleG({msn}) {
    return (  
        <H1>{msn}</H1>
    );
}

export default TittleG;

const H1 = styled.h1`
    font-size: 4rem;
    font-family: Inter;
    margin-bottom: 1%;

`;