import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {FaHome, FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SideNavBarContainer,
  ListItemName,
  ListItem,
  ListContainer,
  LogosContainer,
  ContactUsP,
  Logos,
  LogoImage,
  LogoHead,
} from './StyledComponents'

const SideNavBar = () => {
  const location = useLocation()

  const isItemActive = itemPath => location.pathname === itemPath

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <SideNavBarContainer theme={theme}>
            <ListContainer theme={theme}>
              <NavLink to="/" style={{textDecoration: 'none'}}>
                <ListItem active={isItemActive('/')} theme={theme}>
                  <FaHome
                    style={{color: isItemActive('/') ? '#ff0000' : '#616e7c'}}
                  />

                  <ListItemName theme={theme}>Home</ListItemName>
                </ListItem>
              </NavLink>

              <NavLink to="/trending" style={{textDecoration: 'none'}}>
                <ListItem active={isItemActive('/trending')} theme={theme}>
                  <FaFire
                    style={{
                      color: isItemActive('/trending') ? '#ff0000' : '#616e7c',
                    }}
                  />
                  <ListItemName theme={theme}>Trending</ListItemName>
                </ListItem>
              </NavLink>

              <NavLink to="/gaming" style={{textDecoration: 'none'}}>
                <ListItem active={isItemActive('/gaming')} theme={theme}>
                  <SiYoutubegaming
                    style={{
                      color: isItemActive('/gaming') ? '#ff0000' : '#616e7c',
                    }}
                  />
                  <ListItemName theme={theme}>Gaming</ListItemName>
                </ListItem>
              </NavLink>

              <NavLink to="/saved-videos" style={{textDecoration: 'none'}}>
                <ListItem active={isItemActive('/saved-videos')} theme={theme}>
                  <BiListPlus
                    style={{
                      color: isItemActive('/saved-videos')
                        ? '#ff0000'
                        : '#616e7c',
                    }}
                  />
                  <ListItemName theme={theme}>Saved videos</ListItemName>
                </ListItem>
              </NavLink>
            </ListContainer>
            <LogosContainer theme={theme}>
              <ContactUsP>CONTACT US</ContactUsP>
              <Logos>
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </Logos>
              <LogoHead>
                Enjoy! Now to see your channels and recommendations!
              </LogoHead>
            </LogosContainer>
          </SideNavBarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SideNavBar
