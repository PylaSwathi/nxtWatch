import styled from 'styled-components'

const black = '#000000'
const white = '#ffffff'
const b = '#3b82f6'

export const VideoItemCont = styled.div`
  height: 300px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 25px;
  margin-top: 10px;
  background-size: cover;
  cursor: pointer;
`

export const VideoItemThumbNail = styled.img`
  height: 150px;
  width: 100%;
`

export const VideoItemChannelSec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
`
export const VideoItemChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  margin-top: 10px;
`
export const VideoItemChannelNameCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100px;
`
export const VideoItemChannelTitle = styled.h1`
  font-size: 12px;
  color: ${props => (props.theme === 'light' ? black : white)};
  text-decoration: none;
`
export const VideoItemChannelTitle2 = styled.p`
  font-size: 12px;
  color: ${props => (props.theme === 'light' ? black : white)};
  text-decoration: none;
`
export const VideoItemChannelName = styled.p`
  color: ${props => (props.theme === 'light' ? '#475569' : '#cccccc')};
  margin-top: 0px;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 0px;
`
export const VideoItemChannelViewsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0px;

  width: 80%;
`
