import React, {useState} from 'react';

import {
  ConnectionWrapper, AlertDialog, DeviceButton,
  SearchButton, CheckDialog, ConfirmButton, ReconfirmButton,
  SuccessDialog, StatusDialog, StatusIcon, SloganText,
  HighlightText, ImageIcon, ConditionalContent, DeviceName
} from './style';
import {Logo} from '../LoginPage/style'

import logo from '../../assets/logo_red.png';
import band from '../../assets/band.png';
import bandRed from '../../assets/band_red.png';

const ConnectionPage=()=>{

  const [connected, setConnected] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('MiBand 4')
  const userId = '000000';

  return(
    <ConnectionWrapper>
      
      <Logo src={logo} />
      {
        connected === false ?
        <ConditionalContent>
          <AlertDialog>
            <HighlightText>Selecione</HighlightText> sua pulseira:
          </AlertDialog>

          <DeviceButton>
            <ImageIcon src={band}/>
            <DeviceName>{selectedDevice}</DeviceName>
          </DeviceButton>

          <SearchButton>Procure um novo dispositivo</SearchButton>

          <CheckDialog>
            Sua matrícula é  <HighlightText>{userId}</HighlightText>, 
            <br/>
            confirma?
          </CheckDialog>

          <ConfirmButton onClick={()=> setConnected( ! connected)}>
            Sim, confirmo
          </ConfirmButton>

          <ReconfirmButton>Essa não é minha matrícula</ReconfirmButton>
        </ConditionalContent>
        :
        <ConditionalContent>
          <SuccessDialog>
            Perfeito!
          </SuccessDialog>

          <StatusDialog>Você está conectado</StatusDialog>

          <StatusIcon src={bandRed} onClick={()=> setConnected( ! connected)}/>

          <SloganText>
            Viaje com saúde,<br/> 
            viaje com <HighlightText>EIXOS</HighlightText>.
          </SloganText>
        </ConditionalContent>
      }
    </ConnectionWrapper>
  )
};
export default ConnectionPage