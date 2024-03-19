import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'
import SideNavBar from '../SideNavBar'
import Header from '../Header/index'

import {
  VideoItemDetailsCont,
  VideoItemDetailsLoadingCont,
  HomeFailureCont,
  HomeFailureImg,
  HomeHead,
  HomeRetryButton,
  HomePara1,
  SuccessCont,
  VideoItemChannelViewsCont,
  VideoItemChannelViewsCont1,
  VideoItemChannelName,
  VideoItemChannelTitle,
  RowCont,
  LikeButton,
  Line,
  ChannelSec,
  VideoItemChannelLogo,
  VideoItemChannelNameCont,
  VideoItemChannelTitle2,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isPlaying: false,
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoDetails = data.video_details
      //  console.log(videoDetails)
      const updatedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        name: videoDetails.channel.name,
        profileImageUrl: videoDetails.channel.profile_image_url,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retry = () => {
    this.getDetails()
  }

  handleLikeClick = () => {
    this.setState(prevState => ({disliked: false, liked: !prevState.liked}))
  }

  handelDisLikeClick = () => {
    this.setState(prevState => ({liked: false, disliked: !prevState.disliked}))
  }

  handleSaveClick = () => {
    this.setState(prevState => ({saved: !prevState.saved}))
  }

  renderLoadingView = () => (
    <VideoItemDetailsLoadingCont data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </VideoItemDetailsLoadingCont>
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
                alt="failure view"
              />
            )}
            {theme === 'dark' && (
              <HomeFailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            )}
            <HomeHead theme={theme}>Oops! Something Went Wrong </HomeHead>
            <HomePara1 theme={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </HomePara1>

            <HomeRetryButton onClick={this.retry}>Retry</HomeRetryButton>
          </HomeFailureCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  controlVideo = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme, addToSavedVideos} = value
        const {videoDetails, isPlaying, liked, disliked, saved} = this.state

        const {
          id,
          title,
          description,
          publishedAt,
          thumbnailUrl,
          videoUrl,
          viewCount,
          name,
          profileImageUrl,
        } = videoDetails
        const time = formatDistanceToNow(new Date(publishedAt))

        const handleSave = () => {
          addToSavedVideos(videoDetails)
        }

        return (
          <SuccessCont>
            <ReactPlayer
              url={videoUrl}
              playing={isPlaying}
              width="100%"
              height="400px"
              onClick={this.controlVideo}
            />
            <HomePara1 theme={theme}>{title}</HomePara1>
            <RowCont>
              <VideoItemChannelViewsCont>
                <VideoItemChannelName theme={theme}>
                  {viewCount} views
                </VideoItemChannelName>
                {theme === 'light' && <BsDot />}
                {theme === 'dark' && <BsDot style={{color: '#cccccc'}} />}
                <VideoItemChannelName theme={theme}>
                  {time}
                </VideoItemChannelName>
              </VideoItemChannelViewsCont>
              <VideoItemChannelViewsCont1>
                <LikeButton
                  onClick={this.handleLikeClick}
                  style={{color: liked ? '#2563eb' : '#64748b'}}
                >
                  <BiLike
                    style={{
                      marginRight: '10px',
                      fontSize: '20px',
                      color: liked ? '#2563eb' : '#64748b',
                      cursor: 'pointer',
                    }}
                  />
                  <VideoItemChannelName
                    theme={theme}
                    style={{color: liked ? '#2563eb' : '#64748b'}}
                  >
                    Like
                  </VideoItemChannelName>
                </LikeButton>
                <LikeButton
                  onClick={this.handelDisLikeClick}
                  style={{color: disliked ? '#2563eb' : '#64748b'}}
                >
                  <BiDislike
                    style={{
                      marginRight: '5px',
                      fontSize: '20px',
                      color: disliked ? '#2563eb' : '#64748b',
                      marginLeft: '10px',
                      cursor: 'pointer',
                    }}
                  />
                  <VideoItemChannelName
                    theme={theme}
                    style={{color: disliked ? '#2563eb' : '#64748b'}}
                  >
                    Dislike
                  </VideoItemChannelName>
                </LikeButton>
                <LikeButton
                  onClick={() => {
                    handleSave()
                    this.handleSaveClick()
                  }}
                >
                  <BiListPlus
                    style={{
                      marginRight: '5px',
                      fontSize: '20px',
                      color: saved ? '#2563eb' : '#64748b',
                      marginLeft: '10px',
                      cursor: 'pointer',
                    }}
                  />
                  <VideoItemChannelName
                    theme={theme}
                    style={{color: saved ? '#2563eb' : '#64748b'}}
                  >
                    Save
                  </VideoItemChannelName>
                </LikeButton>
              </VideoItemChannelViewsCont1>
            </RowCont>
            <Line />
            <ChannelSec>
              <VideoItemChannelLogo src={profileImageUrl} alt="channel logo" />
              <VideoItemChannelNameCont>
                <VideoItemChannelTitle2 theme={theme}>
                  {name}
                </VideoItemChannelTitle2>
                <VideoItemChannelName>
                  {viewCount} Subscribers
                </VideoItemChannelName>
                <VideoItemChannelTitle2 theme={theme}>
                  {description}
                </VideoItemChannelTitle2>
              </VideoItemChannelNameCont>
            </ChannelSec>
          </SuccessCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )

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
            <>
              <Header />
              <SideNavBar />
              <VideoItemDetailsCont theme={theme}>
                {this.renderView()}
              </VideoItemDetailsCont>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
