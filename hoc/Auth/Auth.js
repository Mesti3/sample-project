import React, { Component } from 'react';
import AuthService from '../../services/AuthService';

function Auth(AuthComponent) {
  return class AuthWrapped extends Component { // take routes to admin
    constructor(props) {
      super(props);
      this.AuthService = new AuthService();
      this.state = {
        user: null
      }
    }

    componentDidMount() { // if user is not logged in it will take him to login]
      try {
        if (!this.AuthService.loggedIn()) {
          window.location.assign('/');
        }
        else {
          try {
            const profile = this.AuthService.getProfile();
            this.setState({
              user: profile
            })
          }
          catch (err) {
            this.AuthService.logout();
            window.location.assign('/');
          }
        }
      } catch (e) {

      }
    }

    render() {
      if (this.state.user) {
        return (
          <AuthComponent history={this.props.history} user={this.state.user}/>
        )
      }
      else {
        return null
      }

    }


  }
}

export default Auth;