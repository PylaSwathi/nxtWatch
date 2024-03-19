import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import SideNavBar from '../SideNavBar'
import Header from '../Header/index'
import TrendingVideoItem from '../TrendingVideoItem'
import {
  VideoItemDetailsLoadingCont,
  HomeFailureCont,
  HomeFailureImg,
  HomeHead,
  HomePara1,
  TrendingCont,
  TrendingSec,
  TrendingLogo,
  TrendingVideosSec,
} from '../Trending/StyledComponents'

class SavedVideosDetails extends Component {
  renderNoSavedVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <HomeFailureCont>
            <HomeFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />

            <HomeHead theme={theme}>No Saved Videos Found</HomeHead>
            <HomePara1 theme={theme}>
              You can save your videos while watching them.
            </HomePara1>
          </HomeFailureCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme, savedVideos} = value
        return (
          <TrendingCont theme={theme}>
            <TrendingSec theme={theme}>
              <TrendingLogo theme={theme}>
                <FaFire style={{color: 'red'}} />
              </TrendingLogo>
              <HomeHead theme={theme}>Saved Videos</HomeHead>
            </TrendingSec>
            <TrendingVideosSec>
              {savedVideos.map(each => (
                <TrendingVideoItem each={each} key={each.id} />
              ))}
            </TrendingVideosSec>
          </TrendingCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme, savedVideos} = value
          console.log('save', savedVideos)
          return (
            <div data-testid="saved-videos">
              <Header />
              <SideNavBar />
              {savedVideos.length === 0 && this.renderNoSavedVideosView()}
              {savedVideos.length !== 0 && this.renderSuccessView()}
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideosDetails
