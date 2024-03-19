import styled from 'styled-components'

const black = '#000000'
const white = '#ffffff'
export const VideoItemDetailsCont = styled.div`
  width: 83vw;
  position: absolute;
  left: 15vw;
  top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;

  min-height: 90vh;

  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f '};
`
export const VideoItemDetailsLoadingCont = styled.div`
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
export const SuccessCont = styled.div`
  width: 95%;
  background-size: cover;
  margin-top: 20px;
  margin-right: 0px;
`
export const RowCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`
export const ViewCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
`
export const VideoItemChannelViewsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0px;
  height: 30px;
  width: 20%;
`
export const VideoItemChannelViewsCont1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0px;
  padding-right: 20px;
  width: 20%;

  height: 30px;
`

export const VideoItemChannelTitle = styled.h1`
  font-size: 13px;
  color: ${props => (props.theme === 'light' ? black : white)};
  font-weight: 600;
`

export const VideoItemChannelTitle2 = styled.p`
  font-size: 13px;
  color: ${props => (props.theme === 'light' ? black : white)};
  font-weight: 600;
`
export const VideoItemChannelName = styled.p`
  color: ${props => (props.theme === 'light' ? '#64748b' : '#64748b')};
  margin-top: 0px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 0px;
`
export const LikeButton = styled.button`
  border-width: 0px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Line = styled.hr`
  border: 2px solid '#64748b';
  width: 100%;
`
export const ChannelSec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoItemChannelLogo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-right: 20px;
  margin-top: 10px;
`
export const VideoItemChannelNameCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
  height: 80px;
`
