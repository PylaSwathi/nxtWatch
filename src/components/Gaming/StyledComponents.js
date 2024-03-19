import styled from 'styled-components'

const black = '#000000'
const white = '#ffffff'

export const VideoItemDetailsLoadingCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
  width: 85vw;
  position: absolute;
  left: 15vw;
  top: 10vh;
`

export const HomeFailureCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const HomePara1 = styled.p`
  color: ${props => (props.theme === 'light' ? '#64748b' : '#cbd5e1')};
`
export const TrendingCont = styled.div`
  width: 85vw;
  position: absolute;
  left: 15vw;
  top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
  background-size: cover;
  min-height: 90vh;
`
export const TrendingSec = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props =>
    props.theme === 'light' ? '#ebebeb' : '#313131'};
  padding: 30px;
`
export const TrendingLogo = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-right: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme === 'light' ? '#cbd5e1' : black)};
`
export const TrendingVideosSec = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  width: 90%;
  flex-wrap: wrap;
`
