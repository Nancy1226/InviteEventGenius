import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 5%;
    text-align: center;
    font-family: Inter;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

function Title({msn}) {
    return ( 
    <>
    <StyledContainer>
    <h1>{msn}</h1>
    </StyledContainer>
    </> 
    );
}

export default Title;