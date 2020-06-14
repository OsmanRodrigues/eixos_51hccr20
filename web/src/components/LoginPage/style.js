import styled from 'styled-components';
import login_background from '../../assets/login_background.png';
import {
  RiBluetoothLine, RiCheckboxCircleLine, RiCheckboxBlankCircleLine
} from 'react-icons/ri';

export const testIcon = styled(RiBluetoothLine)`

`;
export const LoginWrapper = styled.main`
  background-image: url(${login_background});
  background-size:100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: none;
  height: 100%;
  width: 100%;
  padding: 5%;
`;
export const Logo = styled.img`
  width: 128px;
`;
export const CheckDialog = styled.p`
  color: #f5f5f5;
  text-align: left;
  letter-spacing: 0px;
`;
export const AlertDialog = styled.div`
  text-align: left;
`;
export const ValidIcon = styled.span`
  margin-right:10px;
  color: #0cef5d;
  font-size: large;
  padding: 0;
`;
export const InvalidIcon = styled.span`
  margin-right:10px;
  color: #b00000;
  font-size: large;
  padding: 0;
`; 
export const LoginForm = styled.form`
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const LoginInput = styled.input`
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 32px;
  line-height: 1.5;
  background-color: #eeeeee;
  &:hover {
    box-shadow: none;
  };
  &:active {
    box-shadow: none;
  };
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);
    outline: none;
  };
`;
export const ConnectButton = styled.button`
  cursor: pointer;
  color: #f5f5f5;
  box-shadow: 0 5px 5px 0 #000000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 32px;
  line-height: 1.5;
  background-color: #b00000;
  &:hover {
    box-shadow: none;
  };
  &:active {
    box-shadow: none;
  };
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);
    outline: none;
  };
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;
export const LoginIcon = styled.img`
  width: 64px;
`;