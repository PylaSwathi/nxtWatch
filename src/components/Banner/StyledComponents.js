import styled from 'styled-components'

const black = '#000000'
const white = '#ffffff'

export const BannerBgContainer = styled.div`
  height: 180px;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
`

export const BannerLogoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 70%;
`
export const BannerLogo = styled.img`
  height: 30px;
  width: 120px;
`
export const BannerButton = styled.button`
  height: 40px;
  width: 100px;
  border: 2px solid black;
  color: black;
`
export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
