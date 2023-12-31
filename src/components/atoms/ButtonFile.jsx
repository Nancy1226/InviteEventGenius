import styled from "styled-components";

const Button = styled.button`
    @media (min-width: 1024px) {
    padding: ${props => props.estilo ? '3% 3%' : '2.5% 3%'};
    width: 65%;
        ${props =>props.$buttonfile && `
            margin: 1.2% 0% 0% 0%;
            color: #000;
            text-align: center;
            font-family: 'Inter';
            font-size: 1.3rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        `}

        ${props =>props.$buttonDownland && `
            color: #ffff;
            text-align: center;
            font-family: 'Inter';
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        `}
    }
`;


function ButtonFile({msn, accept, onClick, className, buttonfile, id, value, buttonDownland}) {
    return ( 
        <Button type="button" onClick={onClick} className={className} $buttonfile={buttonfile} $buttonDownland={buttonDownland}>
            {msn}
            <input type="file" accept={accept} id={id} value={value} />

        </Button>
    );
}

export default ButtonFile;