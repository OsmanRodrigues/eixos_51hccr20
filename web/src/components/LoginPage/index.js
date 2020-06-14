import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {
  LoginWrapper, Logo, CheckDialog,
  AlertDialog, ValidIcon, LoginForm,
  LoginInput, InvalidButton, ValidButton, 
  LoginIcon, InvalidIcon
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
    history.replace(`/connect/${inputForm}`);
  };
  return(
    <LoginWrapper>
      <Logo src={logo}/>
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
          {
            inputForm.length < 5 ?
            <InvalidIcon><RiCheckboxBlankCircleLine/></InvalidIcon> 
            : 
            <ValidIcon><RiCheckboxCircleLine/></ValidIcon>
          }
          Digite:
        </CheckDialog>
      </AlertDialog>
  
      <LoginForm onSubmit={handleLogin}>
        <LoginInput
          required
          placeholder='sua matrícula aqui'
          type='text'
          minLength={5}
          value={inputForm}
          onChange={handleInputChange}
          title='Digite sua matrícula com no mínimo 5 digitos.'
        />
        {
            inputForm.length < 5 ?
            <InvalidButton>Conectar</InvalidButton>
            : 
            <ValidButton>Conectar</ValidButton>
          }
      </LoginForm>

      <LoginIcon src={smartphone_connection}/>
    </LoginWrapper>
  )
};
export default LoginPage