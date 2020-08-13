import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

export const useValidLocalInfos =()=>{
  const history = useHistory();
  useEffect(()=>{
    const localInfos = localStorage.getItem('eixosLocalUserInfos');
    if(localInfos !== null){
      const convertedInfos = JSON.parse(localInfos);
      localInfos !== '' && localInfos.length >= 5 && history.replace(`/connect/${convertedInfos.token}`);
    }
  },[])
};