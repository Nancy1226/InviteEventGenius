import styled from "styled-components";

function TittleG({msn, propsTittle}) {
    return (  
        <H1 $propsTittle={propsTittle}>{msn}</H1>
    );
}

export default TittleG;

const H1 = styled.h1`
    font-size: 4rem;
    font-family: Inter;
    margin-bottom: 1%;

    ${props =>props.$propsTittle && `
        font-size: 3.5rem;
        font-family: Inter;
        font-weight: 100;
        margin: 0 0 0 6%;
    `}
`;