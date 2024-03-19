import {withRouter, Link} from 'react-router-dom'
import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  LogoImage,
  RightContainer,
  ListItem,
  ThemeButton,
  ProfileImage,
  CloseButton,
  LogoutButton,
  LogoutSec,
  ButtonsSec,
  CancelButton,
} from './StyledComponents'

import {HomeHead2} from '../Home/StyledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme, changeTheme} = value
      const {history} = props
      const overlayStyle = {background: 'rgba(0,0,0,0.5)'}
      const clickChangeTheme = () => {
        changeTheme(theme)
      }
      return (
        <HeaderContainer theme={theme}>
          <Link to="/" style={{textDecoration: 'none'}}>
            {' '}
            <LogoImage
              src={
                theme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <ThemeButton
            data-testid="theme"
            theme={theme}
            onClick={clickChangeTheme}
          >
            {theme === 'light' ? (
              <BsMoon style={{fontSize: '30px'}} />
            ) : (
              <BsBrightnessHigh style={{fontSize: '30px', color: 'white'}} />
            )}
          </ThemeButton>

          <RightContainer>
            <ListItem>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ListItem>
            <ListItem>
              <Popup
                modal
                overlayStyle={overlayStyle}
                trigger={<CloseButton theme={theme}>Logout</CloseButton>}
              >
                {close => (
                  <>
                    <LogoutSec theme={theme}>
                      <HomeHead2 theme={theme}>
                        Are you sure, you want to logout
                      </HomeHead2>
                      <ButtonsSec>
                        <CancelButton theme={theme} onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <LogoutButton
                          onClick={() => {
                            Cookies.remove('jwt_token')
                            history.replace('/login')
                          }}
                        >
                          Confirm
                        </LogoutButton>
                      </ButtonsSec>
                    </LogoutSec>
                  </>
                )}
              </Popup>
            </ListItem>
          </RightContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
