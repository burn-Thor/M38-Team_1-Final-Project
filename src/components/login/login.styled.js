import styled from "styled-components";

export const FormOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    padding-top: 120px;
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    padding: 20px;
`;


export const InputLogin = styled.input`
    padding:3px;
    font-size: 30px;
    color: white;
    text-decoration: none;
    background: #8e8e8e;
    border: 2px solid black;
    &:hover {
        background: white;
        border: 2px solid red;
        color: black;
        ::-webkit-input-placeholder {color: rgba(0,0,0,0.7);} 
        ::-moz-placeholder { color: rgba(0,0,0,0.7);} 
        :-ms-input-placeholder { color: rgba(0,0,0,0.7);} 
        :-moz-placeholder {color: rgba(0,0,0,0.7);} 
    }
`;

export const LoginBtn = styled.button`
    background: black;
    color: white;
    font-size: 30px;
    width: 250px;
    height: 40px;
    border: 2px solid white;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        border: 2px solid red;
    }
`

export const AccountBtn = styled.button`
    background: black;
    color: white;
    font-size: 20px;
    width: 250px;
    height: 40px;
    border: 2px solid white;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        border: 2px solid red;
    }
`


export const FormBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    width: max-content;
    height: max-content;
    background: transparent;
    border: 3px solid white;
    padding-bottom: 20px;
    background-color: black;
`

export const FormTitle = styled.h3`
    display: flex;
    font-size: 45px;
    background: black;
    padding: 10px;
    border: 2px solid white;
    color: white;
`

export const LoginHeaderBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: black;
    color: white;
    border: 2px dashed white;
    position: absolute;
    padding: 0px 10px;
    bottom: 70px;

`
export const LoginHeader = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 35px;
    color: white;
    position: relative;
`
