import Header from '../Header'
import SideNavBar from '../SideNavBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomeFailureCont,
  HomeFailureImg,
  HomeHead,
  HomePara1,
} from '../Home/StyledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme} = value
      return (
        <>
          <Header />
          <SideNavBar />
          <HomeFailureCont theme={theme}>
            {theme === 'light' && (
              <HomeFailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
            )}
            {theme === 'dark' && (
              <HomeFailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                alt="not found"
              />
            )}
            <HomeHead theme={theme}>Page Not Found</HomeHead>
            <HomePara1 theme={theme}>
              We are sorry.The page you requested could not be found
            </HomePara1>
          </HomeFailureCont>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
