import React, {useState} from 'react';

import isWebBluetoothEnabled from '../../utils/checkBTCompatibility'
import  heartBeat  from '../../utils/bandConnector'

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
  const [selectedDevice, setSelectedDevice] = useState('');
  const [beat,setBeat] = useState(0);
  const userId = '000000';
  const database_url = "https://hackccr20-62d92.firebaseio.com"

  // Example POST method implementation:
  const postData = async (url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleHeartNotification = (event) => {
    let value = event.target.value;
    setBeat(value.getUint16());
    postData(database_url + "/time_data.json", {
        name: "joao",
        time: Date.now(),
        batimentos : value.getUint16()
    }).then(data => {
      console.log(data); // JSON data parsed by `response.json()` call
    });
  }

  const  scanForDevices = async () => {
    if(isWebBluetoothEnabled()){
      let name = await heartBeat(handleHeartNotification);
      setSelectedDevice(name);
    }else{
      // enable flag
    }
  }
  console.log("Batimentos : ", beat);
  return(
    <ConnectionWrapper>
      
      <Logo src={logo} />
      {
        connected === false && selectedDevice == ''?
        <ConditionalContent>
          <AlertDialog>
            <HighlightText>Selecione</HighlightText> sua pulseira:
          </AlertDialog>

 

          <DeviceButton>
            <ImageIcon src={band}/>
            <DeviceName>{selectedDevice}</DeviceName>
          </DeviceButton>

          <SearchButton onClick={scanForDevices} >Procure um novo dispositivo</SearchButton>

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