import InvRegisterPrivate from "../components/organism/InvRegisterPrivate";
import styled from "styled-components";

function InvitationPrivate() {
    return (  
        <Content>
            <InvRegisterPrivate />
        </Content>
    );
}

export default InvitationPrivate;

const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;