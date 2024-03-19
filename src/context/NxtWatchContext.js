import React from 'react'

const NxtWatchContext = React.createContext({
  theme: 'light',
  showBanner: true,
  savedVideos: [],
  changeTheme: () => {},
  changeShowBanner: () => {},
  addToSavedVideos: () => {},
  removeFromSavedVideos: () => {},
})

export default NxtWatchContext
