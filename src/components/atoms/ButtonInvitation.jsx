import styled from "styled-components";

const Button = styled.button`
    @media (min-width: 1024px) {
        ${props =>props.$invt && `
            color: #000;
            height: ;
            font-family: 'Inter';
            font-style: normal;
            width: 90%;
            height: 9vh;
            border: none;
            border-radius: 2vh;
            background-color: #ffffff;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
        `}
    }
`;

function ButtonInvitation({msn, onClick, invt}) {
    return ( 
        <Button type="button" onClick={onClick} $invt={invt}>
            {msn}
        </Button>
     );
}

export default ButtonInvitation;