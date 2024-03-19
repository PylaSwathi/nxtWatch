import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItem,
  VideoItemThumbNail,
  VideoItemChannelNameCont,
  VideoItemChannelTitle,
  VideoItemChannelName,
  VideoItemChannelViewsCont,
} from './StyledComponents'

const TrendingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme} = value
      const {each} = props
      const {id, title, publishedAt, thumbnailUrl, viewCount, name} = each

      const time = formatDistanceToNow(new Date(publishedAt))
      return (
        <>
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <VideoItem>
              <VideoItemThumbNail src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemChannelNameCont>
                <VideoItemChannelTitle theme={theme}>
                  {title}
                </VideoItemChannelTitle>
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
            </VideoItem>
          </Link>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default TrendingVideoItem
