import styled from 'styled-components'

const black = '#000000'
const white = '#ffffff'
export const HomeBgContainer = styled.div`
  height: 90vh;
  width: 85vw;
  position: absolute;
  left: 15vw;
  top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-size: cover;
`
export const HomeBottomContainer = styled.div`
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#181818'};
  min-height: 70vh;
  background-size: cover;
  width: 85vw;
`
export const SearchContainer = styled.div`
  height: 40px;
  width: 350px;
  margin: 10px;
  border: 1px solid ${props => (props.theme === 'light' ? black : '#7e858e')};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 60px;
`
export const InputCont = styled.input`
  padding: 10px;
  outline: none;
  width: 80%;
  border-width: 0px;
  margin-top: 0px;
  height: 40px;
  border: 1px solid ${props => (props.theme === 'light' ? black : '#7e858e')};
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#181818'};
  color: ${props => (props.theme === 'light' ? black : '#7e858e')};
`
export const SearchButton = styled.button`
  cursor: pointer;
  background-color: ${props =>
    props.theme === 'light' ? '#cccccc' : '#7e858e'};
  height: 100%;
  width: 20%;
  border-width: 0px;
`
export const HomeLoadingCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeFailureCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 85vw;
  position: absolute;
  left: 15vw;
  top: 10vh;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
export const HomeFailureCont1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 50vw;
  position: absolute;
  left: 15vw;
`

export const HomeFailureImg = styled.img`
  height: 200px;
  width: 200px;
`
export const HomeRetryButton = styled.button`
  height: 40px;
  width: 150px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4f46e5;
  color: white;
  border-width: 0px;
`
export const HomeHead = styled.h1`
  font-size: 20px;
  color: ${props => (props.theme === 'light' ? black : white)};
`
export const HomeHead2 = styled.p`
  font-size: 20px;
  color: ${props => (props.theme === 'light' ? black : white)};
`
export const HomePara1 = styled.p`
  color: ${props => (props.theme === 'light' ? '#424242' : '#cbd5e1')};
`

export const VideosCont = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${props => (props.theme === 'light' ? '#f9f9f9' : black)};
`
