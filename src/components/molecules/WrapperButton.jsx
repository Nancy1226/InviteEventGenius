import styled from 'styled-components'
import ButtonInvitation from '../atoms/ButtonInvitation';

function WrapperButton({onClickD, onClickA, msnD, msnA, invt}) {
    return ( 
        <ContentBottom>
            <ButtonInvitation onClick={onClickD} msn={msnD} invt={invt}/>
            <ButtonInvitation onClick={onClickA} msn={msnA} invt={invt}/>
        </ContentBottom>
     );
}

export default WrapperButton;

const ContentBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20vh;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;;
`;