// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Message from '../Message'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickBtn = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app">
        <div className="login-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClickBtn} />
          ) : (
            <Login login={this.onClickBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
