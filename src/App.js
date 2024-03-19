import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending/index'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import SavedVideosDetails from './components/SavedVideosDetails'
import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {savedVideos: [], theme: 'light', showBanner: true}

  addToSavedVideos = video => {
    console.log('v', video)
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, video],
    }))
  }

  removeFromSavedVideos = video => {
    const {savedVideos} = this.state
    const {id} = video
    const update = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: update})
  }

  changeTheme = theme => {
    if (theme === 'light') {
      this.setState({theme: 'dark'})
    } else {
      this.setState({theme: 'light'})
    }
  }

  changeShowBanner = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  render() {
    const {theme, savedVideos, showBanner} = this.state
    console.log('videos', savedVideos)
    return (
      <NxtWatchContext.Provider
        value={{
          theme,
          savedVideos,
          changeTheme: this.changeTheme,
          showBanner,
          addToSavedVideos: this.addToSavedVideos,
          removeFromSavedVideos: this.removeFromSavedVideos,
          changeShowBanner: this.changeShowBanner,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosDetails}
          />
          <ProtectedRoute path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
