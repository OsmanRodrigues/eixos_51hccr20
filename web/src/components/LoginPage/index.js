import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {
  LoginWrapper, Logo, CheckDialog,
  AlertDialog, ValidIcon, LoginForm,
  LoginInput, ConnectButton, LoginIcon,
  InvalidIcon
} from './style';
import {
  RiBluetoothLine, RiCheckboxCircleLine, RiCheckboxBlankCircleLine
} from 'react-icons/ri';
import logo from '../../assets/logo.png';
import smartphone_connection from '../../assets/smartphone_conection.png';

const LoginPage=()=>{

  const history = useHistory();
  const [inputForm, setInputForm] = useState('');

  const handleInputChange=(e)=>{
    setInputForm(e.target.value);
  };
  //TODO request
  const handleLogin =(e)=>{
    e.preventDefault();
    history.replace('/connect');
  };

  //console.log(inputForm)
  return(
    <LoginWrapper>
      <Logo src={logo}/>
      <testIcon/>
      <AlertDialog>
        <CheckDialog>
          <ValidIcon>
            <RiCheckboxCircleLine/>
          </ValidIcon> 
          Ligue sua pulseira
        </CheckDialog>
        <CheckDialog>
          <ValidIcon>
              <RiCheckboxCircleLine/>
          </ValidIcon>
          Ative o bluetooth <RiBluetoothLine/></CheckDialog>
        <CheckDialog>
          <InvalidIcon>
            <RiCheckboxBlankCircleLine/>
          </InvalidIcon>
          Digite:
        </CheckDialog>
      </AlertDialog>
  
      <LoginForm onSubmit={handleLogin}>
        <LoginInput
          required
          placeholder='sua matrícula aqui'
          type='text'
          value={inputForm}
          onChange={handleInputChange}
        />
        <ConnectButton>Conectar</ConnectButton>
      </LoginForm>

      <LoginIcon src={smartphone_connection}/>
    </LoginWrapper>
  )
};
export default LoginPage