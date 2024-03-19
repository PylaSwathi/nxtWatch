import styled from 'styled-components'

const white = '#ffffff'
const black = '#000000'

export const LoginBgContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme === 'light' ? white : black)};
`

export const Input = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const Label = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.theme === 'light' ? '#475569' : white)};
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
  background-color: ${props => (props.theme === 'light' ? white : '#181818')};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  width: 400px;
  flex-shrink: 0;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 64px 48px 64px 48px;
  background-color: ${props => (props.theme === 'light' ? white : black)};
`
export const LogoImage = styled.img`
  margin-top: 50px;
  margin-bottom: 35px;
  width: 200px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
export const LoginCheckBox = styled.input`
  height: 15px;
  width: 15px;
  cursor: pointer;
  outline: none;
  margin: 10px;
  margin-left: 0px;
`
export const ShowPwd = styled.label`
  color: black;
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.theme === 'light' ? black : white)};
`

export const ShowCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
