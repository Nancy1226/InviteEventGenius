import styled from 'styled-components'
import BodyInvitation from '../components/organism/BodyInvitation';
import HeaderInvited from '../components/organism/HeaderInvitation';

function Invitation() {
    return ( 
        <ContentGlobal>
            <HeaderInvited/>
            <BodyInvitation/>
        </ContentGlobal>
     );
}

export default Invitation;

const ContentGlobal = styled.div`
    background-color: #FCD8FF;
    width: 100%;
`;