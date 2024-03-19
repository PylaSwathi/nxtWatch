import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomePara1,
  GamingItemCont,
  GamingItemImg,
  HomePara2,
} from './StyledComponent'

const GamingItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme} = value
      const {each} = props
      const {id, title, thumbnailUrl, viewCount} = each
      return (
        <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
          <GamingItemCont>
            <GamingItemImg src={thumbnailUrl} alt="video thumbnail" />
            <HomePara2 theme={theme}>{title}</HomePara2>
            <HomePara1 theme={theme}>{viewCount} Watching WorldWide</HomePara1>
          </GamingItemCont>
        </Link>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingItem
