import InvRegisterPublic from "../components/organism/InvRegisterPublic";
import styled from "styled-components";

function InvitationPublic() {
    return (  
        <Content>
            <InvRegisterPublic />
        </Content>
    );
}

export default InvitationPublic;

const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;