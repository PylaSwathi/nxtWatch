import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import SideNavBar from '../SideNavBar'
import Header from '../Header/index'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  TrendingCont,
  TrendingLogo,
  TrendingSec,
  VideoItemDetailsLoadingCont,
  HomeFailureCont,
  HomeFailureImg,
  HomeHead,
  HomePara1,
  HomeRetryButton,
  TrendingVideosSec,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, videos: [], total: 0}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const {videos, total} = data
      const updatedVideos = videos.map(each => ({
        id: each.id,
        title: each.title,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        videos: updatedVideos,
        total,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <VideoItemDetailsLoadingCont data-testid="loader" theme={theme}>
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </VideoItemDetailsLoadingCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <HomeFailureCont>
            {theme === 'light' && (
              <HomeFailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure"
              />
            )}
            {theme === 'dark' && (
              <HomeFailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure"
              />
            )}
            <HomeHead theme={theme}>Oops! Something Went Wrong </HomeHead>
            <HomePara1 theme={theme}>
              We are having some trouble to complete your request.
            </HomePara1>
            <HomePara1 theme={theme}>Please try again.</HomePara1>
            <HomeRetryButton onClick={this.retry}>Retry</HomeRetryButton>
          </HomeFailureCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => {
    const {videos} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <TrendingCont theme={theme}>
              <TrendingSec theme={theme}>
                <TrendingLogo theme={theme}>
                  <FaFire style={{color: 'red'}} />
                </TrendingLogo>
                <HomeHead theme={theme}>Trending</HomeHead>
              </TrendingSec>
              <TrendingVideosSec>
                {videos.map(each => (
                  <TrendingVideoItem each={each} key={each.id} />
                ))}
              </TrendingVideosSec>
            </TrendingCont>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <div data-testid="trending">
              <Header />
              <SideNavBar />
              {this.renderView()}
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
