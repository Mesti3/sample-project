import AbstractService from './AbstractService';
import AuthService from './AuthService';

class UserService extends AbstractService {
  createUser = (user) => {
    return this.post(this.endpoint,
      user, this.header(this.AuthService.getToken()))
      .then(res => {
        if (res === "User already exists") {
          alert("User already exists")
        }
      });
  };
  getUsers = (role) => {
    return this.get(this.endpoint + '/' + role + ' ' + localStorage.getItem('email'), this.header(this.AuthService.getToken()));
  };
  updateUser = (user) => {
    console.log(user);
    return this.put(this.endpoint, user, this.header(this.AuthService.getToken()));
  };
  remove = (user) => {
    return this.delete(this.endpoint + '/' + user, this.header(this.AuthService.getToken()));
  }

  constructor() {
    super();
    this.AuthService = new AuthService();
    this.endpoint = "users"
  }
}

export default UserService;