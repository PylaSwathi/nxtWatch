import styled from 'styled-components'

const black = '#000000'
const white = '#ffffff'

export const SideNavBarContainer = styled.div`
  height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 15vw;
  background-color: ${props => (props.theme === 'light' ? white : '#181818')};
`
export const ListContainer = styled.ul`
  list-style-type: none;
  margin-top: 0px;
  padding-top: 20px;
  padding-left: 0px;
  background-color: ${props => (props.theme === 'light' ? white : '#181818')};
`

export const ListItem = styled.li`
  height: 40px;
  width: 15vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  background-color: ${props => {
    if (props.theme === 'light') {
      return props.active ? '#e2e8f0' : '#ffffff'
    }
    return props.active ? '#313131' : '#181818'
  }}};
`
export const ListItemName = styled.p`
  color: ${props => (props.theme === 'light' ? '#475569' : white)};
  padding-left: 20px;
  font-weight: 600;
`
export const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;
  color: ${props => (props.theme === 'light' ? black : white)};
  width: 100%;
`
export const ContactUsP = styled.p`
  padding-left: 20px;
  font-weight: bold;
`
export const Logos = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`
export const LogoImage = styled.img`
  height: 30px;
  width: 30px;
  margin: 10px;
  margin-left: 0px;
`
export const LogoHead = styled.p`
  padding-left: 20px;
  font-size: 15px;
`
