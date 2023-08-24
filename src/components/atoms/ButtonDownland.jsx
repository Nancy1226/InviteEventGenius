import styled from "styled-components";


function ButtonDowland() {
    return (  
        <ButtonD >
            <Linka href="/public/archives/Lista de pruebas.xlsx" download='Lista de pruebas.xlsx'>Descargar archivo</Linka>
        </ButtonD>
    );
}

export default ButtonDowland;

const ButtonD = styled.div`
    color: black;
    background: #37289c;
    border-radius: 20px;
    text-align: center;
    font-family: Inter;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    width: 75%;
    height: 7vh;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.40);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
        padding: ${props => props.estilo ? '3% 3%' : '2.5% 3%'};
        width: 65%;
        font-size: 1.5rem;
    }
`;

const Linka = styled.a`
    text-decoration: none;
    color: #ffff;
`;