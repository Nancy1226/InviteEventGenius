import styled from 'styled-components'

function Template({src, alt}) {
    return ( 
        <AtomTemplate src={src} alt={alt}/>
     );
}

export default Template;

const AtomTemplate = styled.img`
    @media (min-width: 1024px) {
        width: 31%;
        border: 0.1vh solid black;
    }
`;