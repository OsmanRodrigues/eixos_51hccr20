import React from 'react';

import {
  LoginWrapper, Logo, WelcomeDialog,
  AlertDialog, ConfirmDialog, LoginForm,
  LoginInput, ConnectButton, LoginIcon,
  HighlightText
} from './style';
import {RiBluetoothLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';
import smartphone_connection from '../../assets/smartphone_conection.png';

const LoginPage=()=>{

  return(
    <LoginWrapper>

      <Logo src={logo}/>

      <WelcomeDialog>
        Está com sua smartband <HighlightText>
        ligada
        </HighlightText> para <HighlightText>
        conectar-se
        </HighlightText> à um futuro saudável?
        <br/>
        <AlertDialog>
          O bluetooth também precisa estar ativo <RiBluetoothLine/>
        </AlertDialog>
      </WelcomeDialog>

      <ConfirmDialog>
      Protegemos seus dados pessoais, então só 
      <br/>
      precisamos que <HighlightText>
        digite
      </HighlightText>
      </ConfirmDialog>

      <LoginForm>
        <LoginInput
          required
          placeholder='sua matrícula aqui'
          type='text'
        />
        <ConnectButton>Conectar</ConnectButton>
      </LoginForm>

      <LoginIcon>
        <Logo src={smartphone_connection}/>
      </LoginIcon>
    </LoginWrapper>
  )
};
export default LoginPage