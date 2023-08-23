import styled from "styled-components";

function InputText({ type, placeholder, name, id, value, className, onClick, propsInput, propsText, propsFile, accept, propsCantNumber, propsDate, propsTime, propsTextcort, propsInputRadio }) {
    return (  
        <>
            <StyledContainerInput>
                <StyledInput
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                className={className}
                onClick={onClick}
                $propsInput={propsInput}
                $propsInputRadio={propsInputRadio}
                $propsText={propsText}
                $propsFile={propsFile}
                accept={accept}
                $propsCantNumber={propsCantNumber}
                $propsDate={propsDate}
                $propsTime={propsTime}
                $propsTextcort={propsTextcort}
                />
            </StyledContainerInput>
        </>
    );
}

export default InputText;

const StyledContainerInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: rgba(0, 0, 0, 0.65);
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 10%;
    text-align: justify;

    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: rgba(0, 0, 0, 0.65);
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        line-height: 10%;
        margin-top: 2%;
        text-align: justify;
    }
`;

const StyledInput = styled.input`
    width: 75%;
    height: 7vh;
    padding: 0 3%;
    border-radius: 20px;
    border: 3px solid var(--dark, black);
    background: #fff;
    outline: none;

    @media (min-width: 1024px) {
        width: 65%;
        height: 60px;
        font-size: 1.7rem;

        ${props => props.$propsText &&`
            width: 95%;
            height: 7vh;
            border: 0.3vh solid black;
        `}

        ${props => props.$propsTextcort &&`
            width: 80%;
            height: 8vh;
            border: 0.3vh solid black;
        `}

        ${props => props.$propsCantNumber &&`
            width: 80%;
            height: 7vh;
            border: 0.3vh solid black;
        `}

        ${props => props.$propsFile &&`
            width: 70%;
            border: none;
            background-color: #5138EE;
        `}

        ${props => props.$propsDate &&`
            width: 90%;
            border: 0.3vh solid black;
            height: 7vh;
        `}

        ${props => props.$propsTime &&`
            width: 90%;
            height: 7vh;
            border: 0.3vh solid black;
        `}

        ${props => props.$propsInput &&`
            width: 100%;
        `}

        ${props => props.$propsInputRadio &&`
            background-color: darkgreen;
            width: 100%;
            border: 0.3vh solid black;
        `}
    }
`;