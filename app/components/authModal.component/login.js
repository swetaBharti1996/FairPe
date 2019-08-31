import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    width: 50%;
    >a{
        font-size: 18px;
        color: #FF632A;
        text-align: right;
    }
`;
const Title = styled.h3`
    text-align: center;
    font-size: 24px;
    color: #000;
    margin-bottom: 20px;
`;
const CustomInput = styled.input`
    border: none;
    font-size: 16px;
    color: #707070;
    padding: 20px 35px;
    border: 1px solid #707070;
    border-radius: 5px;
    margin-bottom: 10px !important;
    width: 100%;
`;
class Login extends Component {
    render() {
        return (
            <>
                <FormContainer>
                    <Title>Login to your account</Title>
                    <CustomInput type="text" placeholder="Email/Mobile number" />
                    <CustomInput type="password" placeholder="Password" />
                    <a>Forgot password?</a>
                </FormContainer>
            </>
        )
    }
}

export default Login;