import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdSearch} from 'react-icons/io'
import Banner from '../Banner/Index'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import VideoItem from '../VideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomeBgContainer,
  HomeBottomContainer,
  SearchContainer,
  InputCont,
  SearchButton,
  HomeFailureCont,
  HomeFailureCont1,
  HomeFailureImg,
  HomeRetryButton,
  HomeHead,
  HomePara1,
  HomeLoadingCont,
  VideosCont,
  HomeHead2,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    search: '',
    apiStatus: apiStatusConstants.initial,
    videos: [],
    total: 0,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {search} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
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
      }))
      const update = updatedVideos.map(each => {
        const {channel} = each
        return {
          ...each,
          channel: {
            name: channel.name,
            profileImageUrl: channel.profile_image_url,
          },
        }
      })

      this.setState({
        apiStatus: apiStatusConstants.success,
        videos: update,
        total,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  setSearch = event => {
    const {value} = event.target
    this.setState({search: value}, () => {
      if (!value) {
        this.getVideos()
      }
    })
  }

  setSearch1 = event => {
    console.log('event')
    this.setState({search: event.target.value})
    this.getVideos()
  }

  searchVideos = () => {
    this.getVideos()
  }

  retry = () => {
    this.getVideos()
  }

  renderLoadingView = () => (
    <HomeLoadingCont data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </HomeLoadingCont>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <HomeFailureCont theme={theme}>
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
            <HomeRetryButton>Retry</HomeRetryButton>
          </HomeFailureCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        const {videos} = this.state

        return videos.length === 0 ? (
          <HomeFailureCont1 theme={theme}>
            <HomeFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HomeHead2 theme={theme}>No search Results Found</HomeHead2>
            <HomePara1 theme={theme}>
              Try different key words or remove search filter
            </HomePara1>
            <HomeRetryButton onClick={this.retry}>Retry</HomeRetryButton>
          </HomeFailureCont1>
        ) : (
          <VideosCont theme={theme}>
            {videos.map(each => (
              <VideoItem each={each} key={each.id} />
            ))}
          </VideosCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {search} = this.state
    console.log('s', search)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <Header />
              <SideNavBar />
              <HomeBgContainer>
                <Banner />
                <HomeBottomContainer theme={theme} data-testid="home">
                  <SearchContainer>
                    <InputCont
                      type="search"
                      placeholder="search"
                      theme={theme}
                      value={search}
                      onChange={this.setSearch}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      theme={theme}
                      onClick={this.searchVideos}
                    >
                      <IoMdSearch style={{fontSize: '20px'}} />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderView()}
                </HomeBottomContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
