import styled from "styled-components";
import TittleG from "../atoms/TittleG";

function InvitationPublic() {
    return (  
        <InvitationContainer>
            <TittleG msn={"Resgitro"}/>

            <ContentFormGeneral>
                    
            </ContentFormGeneral>
        </InvitationContainer>
    );
}

export default InvitationPublic;


const InvitationContainer = styled.div`
    background-color: azure;
`;

const ContentFormGeneral = styled.div`

`;