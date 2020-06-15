import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {
  ConnectionWrapper, AlertDialog, DeviceButton,
  SearchButton, CheckDialog, ConfirmButton, ReconfirmButton,
  SuccessDialog, StatusDialog, StatusIcon, SloganText,
  HighlightText, ImageIcon, ConditionalContent, DeviceName,
  LoadingGif, LoadingView, HighlightIcon, DisconnectButton,
  FireflyIcon
} from './style';
import {Logo} from '../LoginPage/style'
import {BsHeartFill} from 'react-icons/bs';

import logo from '../../assets/logo_red.png';
import band from '../../assets/band.png';
import bandRed from '../../assets/band_red.png';
import loading from '../../assets/loading.gif';

const ConnectionPage=()=>{
  const history = useHistory();
  const {userId} = useParams();

  const [loadingView, setLoadingView] = useState(true);
  const [connected, setConnected] = useState(false);
  const [heartbeat, setHeartbeat] = useState(false);

  const [selectedDevice, setSelectedDevice] = useState('MiBand 4');

  const conditionalRender=()=>{
    if(loadingView === true){
      return(
        <LoadingView>
            <CheckDialog>Carregando a aplicação...</CheckDialog>
            <LoadingGif src={loading}/>
        </LoadingView>
      )
    }else{
      if(connected === false){
        return(
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

          <ConfirmButton onClick={()=> setConnected(true)}>
            Sim, confirmo
          </ConfirmButton>

          <ReconfirmButton onClick={()=> history.replace('/')}>
            Essa não é minha matrícula
          </ReconfirmButton>
        </ConditionalContent>
        )
      }else{
        return(
          <ConditionalContent>
            <SuccessDialog>
              Perfeito!
            </SuccessDialog>

            <StatusDialog>Você está conectado</StatusDialog>

            <DisconnectButton onClick={()=> {setConnected(false)}}>
              Desconectar
            </DisconnectButton>

            <FireflyIcon>
              {heartbeat === false ? 
              <HighlightIcon></HighlightIcon>
              :
              <HighlightIcon><BsHeartFill/></HighlightIcon>}

              <StatusIcon src={bandRed}/>
            </FireflyIcon>

            <SloganText>
              Viaje com saúde,<br/> 
              viaje com <HighlightText>EIXOS</HighlightText>.
            </SloganText>
          </ConditionalContent>
        )
      }
    }
  };
  useEffect(()=>{
    if(connected === true){
      window.setTimeout( ()=>{setHeartbeat(! heartbeat)}, 1000)
    }
  }, [connected, heartbeat]);
  useEffect(()=>{
    if(connected === false && loadingView === true){
      window.setTimeout( ()=>{setLoadingView(! loadingView)}, 3100)
    }
  },[]);
  //console.log(connected, heartbeat)
  return(
    <ConnectionWrapper>
      <Logo src={logo} />

      {conditionalRender()}
    </ConnectionWrapper>
  )
};
export default ConnectionPage