import styled from 'styled-components'

const black = '#000000'
const white = '#ffffff'
export const HomeHead = styled.h1`
  font-size: 18px;
  color: ${props => (props.theme === 'light' ? black : white)};
`

export const HomePara1 = styled.p`
  color: ${props => (props.theme === 'light' ? '#64748b' : '#cbd5e1')};
  margin-top: 0px;
  font-size: 13px;
`
export const GamingItemCont = styled.li`
  height: 250px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 30px;
`
export const GamingItemImg = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 10px;
`
export const HomePara2 = styled.p`
  color: ${props => (props.theme === 'light' ? '#424242' : '#cbd5e1')};
  font-size: 20px;
`
