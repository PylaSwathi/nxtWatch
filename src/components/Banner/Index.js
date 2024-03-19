import {IoMdClose} from 'react-icons/io'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  BannerBgContainer,
  BannerLogoSection,
  BannerLogo,
  BannerButton,
  Button,
} from './StyledComponents'

const Banner = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {showBanner} = value
      return (
        <BannerBgContainer data-testid="banner">
          <BannerLogoSection>
            <BannerLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <Button type="button" data-testid="close">
              <IoMdClose />
            </Button>
          </BannerLogoSection>
          <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
          <BannerButton>GET IT NOW</BannerButton>
        </BannerBgContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Banner
