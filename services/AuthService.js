import decode from 'jwt-decode';
import AbstractService from "./AbstractService";


class AuthService extends AbstractService {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.endpoint = 'login';
  }


  login = (email, password) => {// sent data for Authentication
    localStorage.setItem('email', email);

    return this.post(this.endpoint,
      {
        email: email,
        password: password
      }, this.header(this.getToken()))

  };

  sendEmail = (email) => { // sent email for invitation
    return this.put(this.endpoint,
      {
        email: email
      },this.header(this.getToken()))
      .then(res =>
        alert(res)
      );
  };

  loggedIn = () => {
    return !!this.getToken() && !this.isTokenExpired(this.getToken);
  };

  isTokenExpired = (token) => { // checks if the token is still valid
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) { // kontrola ci je token stary
        return true;
      }
      else
        return false;
    }
    catch (err) {
      return false;
    }
  };

  setToken(idToken) { // sets token
    localStorage.setItem('id_token', idToken);
  }

  getToken() { // gets token
    return localStorage.getItem('id_token');
  }

  logout() { // remove token when log out
    localStorage.removeItem('id_token');
  }

  getProfile() { // gets profile
    return decode(this.getToken());
  }

}

export default AuthService;