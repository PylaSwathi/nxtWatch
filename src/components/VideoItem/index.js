import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoItemCont,
  VideoItemThumbNail,
  VideoItemChannelSec,
  VideoItemChannelLogo,
  VideoItemChannelNameCont,
  VideoItemChannelTitle,
  VideoItemChannelName,
  VideoItemChannelViewsCont,
  VideoItemChannelTitle2,
} from './StyledComponents'

const VideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme} = value
      const {each} = props
      const {id, thumbnailUrl, channel, viewCount, publishedAt, title} = each
      const {name, profileImageUrl} = channel
      const time = formatDistanceToNow(new Date(publishedAt))

      return (
        <Link to={`videos/${id}`} style={{textDecoration: 'none'}}>
          <VideoItemCont>
            <VideoItemThumbNail src={thumbnailUrl} alt="video thumbnail" />
            <VideoItemChannelSec>
              <VideoItemChannelLogo src={profileImageUrl} alt="channel logo" />
              <VideoItemChannelNameCont>
                <VideoItemChannelTitle2 theme={theme}>
                  {title}
                </VideoItemChannelTitle2>
                <VideoItemChannelName theme={theme}>
                  {name}
                </VideoItemChannelName>
                <VideoItemChannelViewsCont>
                  <VideoItemChannelName theme={theme}>
                    {viewCount} Views
                  </VideoItemChannelName>
                  {theme === 'light' && <BsDot />}
                  {theme === 'dark' && <BsDot style={{color: '#cccccc'}} />}

                  <VideoItemChannelName theme={theme}>
                    {time}
                  </VideoItemChannelName>
                </VideoItemChannelViewsCont>
              </VideoItemChannelNameCont>
            </VideoItemChannelSec>
          </VideoItemCont>
        </Link>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoItem
