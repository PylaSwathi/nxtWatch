import styled from 'styled-components'

const black = '#000000'
const white = '#ffffff'

export const HeaderContainer = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: ${props => (props.theme === 'light' ? white : '#181818')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`
export const LogoImage = styled.img`
  margin-top: 30px;
  margin-bottom: 35px;
  width: 100px;
`
export const RightContainer = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ListItem = styled.li`
  padding: 10px;
`
export const ThemeButton = styled.button`
  height: 30px;
  width: 30px;
  cursor: pointer;
  outline: none;
  border-width: 0px;
  background-color: ${props => (props.theme === 'light' ? white : '#181818')};
  margin-left: 75%;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
`
export const CloseButton = styled.button`
  height: 30px;
  width: 100px;
  color: ${props => (props.theme === 'light' ? '#4f46e5' : white)};
  border: 2px solid ${props => (props.theme === 'light' ? '#4f46e5' : white)};
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${props => (props.theme === 'light' ? white : black)};
`

export const LogoutButton = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  background-color: #3b82f6;
  color: #ffffff;
  border-width: 0px;
  outline: none;
`
export const CancelButton = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #64748b;
  color: #64748b;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : 'transparent'};
`

export const LogoutSec = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 400px;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme === 'light' ? white : '#181818')};
`
export const ButtonsSec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`
