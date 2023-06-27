import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

export const Label = styled(Form.Item)`
    label {
    width: 150px;
    padding-top: 8px;
    }
`;

export const Container = styled.div`
    padding-left: 300px;
    padding-top: 70px;
`;

export const FormReg = styled(Form)`
    width: 400px;
`;

export const SubmitButton = styled(Button)`
    width: 100px;
    height: 40px;
    margin-left: 150px;
    display: block;
    font-size: 18px;
    
`;

export const InputReg = styled(Input)`
    height: 40px;
    font-size: 18px;
`;

export const InputPassword = styled(Input.Password)`
    height: 40px;
    font-size: 18px;
`;


export const LinkToLog = styled(Link)`
    font-size: 18px;
    margin: 0 4px;
`;

export const ContLabel = styled.div`
    font-size: 18px;
    line-height: 1.11;
    position: absolute;
    top: -1%;
    left: 50%;
    margin-left: 60px;
`;

export const TitleReg = styled.h2`
    margin-left: 30%;
    margin-bottom: 15px;
    color: #2e2d2dbc;
`;