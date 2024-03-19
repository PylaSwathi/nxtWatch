import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Input,
  Label,
  LoginFormContainer,
  FormContainer,
  LogoImage,
  LoginButton,
  InputContainer,
  ErrorMessage,
  ShowPwd,
  LoginCheckBox,
  ShowCont,
} from './StyledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  shwPassword = event => {
    console.log(event.target.checked)
    if (event.target.checked) {
      this.setState({showPassword: true})
    } else {
      this.setState({showPassword: false})
    }
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = ' https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log('data', data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        const {password, showPassword} = this.state
        return (
          <>
            <Label htmlFor="password" theme={theme}>
              PASSWORD
            </Label>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={this.onChangePassword}
              placeholder="Password"
            />
            <ShowCont>
              <LoginCheckBox
                id="showPwd"
                type="checkbox"
                onChange={this.shwPassword}
              />
              <ShowPwd htmlFor="showPwd" theme={theme}>
                Show Password
              </ShowPwd>
            </ShowCont>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderUsernameField = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        const {username} = this.state
        return (
          <>
            <Label htmlFor="username" theme={theme}>
              USERNAME
            </Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={this.onChangeUsername}
              placeholder="Username"
              theme={theme}
            />
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value
          const {showSubmitError, errorMsg} = this.state
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LoginFormContainer theme={theme}>
              <FormContainer onSubmit={this.submitForm} theme={theme}>
                <LogoImage
                  alt="website logo"
                  src={
                    theme === 'light'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                />
                <InputContainer>{this.renderUsernameField()}</InputContainer>
                <InputContainer>{this.renderPasswordField()}</InputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </FormContainer>
            </LoginFormContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
