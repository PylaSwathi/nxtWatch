import styled from 'styled-components'

const black = '#000000'
const white = '#ffffff'

export const VideoItem = styled.li`
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  min-width: 100%;
  margin: 30px;
  cursor: pointer;
`
export const VideoItemThumbNail = styled.img`
  height: 190px;
  width: 40%;
`
export const VideoItemChannelNameCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;

  width: 60%;
  padding: 20px;
`
export const VideoItemChannelTitle = styled.p`
  font-size: 18px;
  color: ${props => (props.theme === 'light' ? black : white)};
  text-decoration: none;
`
export const VideoItemChannelName = styled.p`
  color: ${props => (props.theme === 'light' ? '#475569' : '#cccccc')};
  margin-top: 0px;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 0px;
`
export const VideoItemChannelViewsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;

  width: 80%;
`
