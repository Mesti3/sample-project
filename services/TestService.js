import AbstractService from './AbstractService';
import AuthService from "./AuthService";


class TestService extends AbstractService {
  constructor() {
    super();
    this.AuthService = new AuthService();
    this.endpoint = "tests"
  }

  createTest = (test) => {
    return this.post(this.endpoint,
      test,this.header(this.AuthService.getToken()))
      .then(res => {
        if (res === "Test already exists") {
          alert("Test already exists")
        }
      });
  };

  getTests = () => {
    return this.get(this.endpoint + '/' + localStorage.getItem('email'),this.header(this.AuthService.getToken()));
  };

  updateTest = (test) => {
    return this.put(this.endpoint, test,this.header(this.AuthService.getToken()));
  };

  removeTest = (test) => {
    return this.delete(this.endpoint + '/' + test,this.header(this.AuthService.getToken()));
  }
}

export default TestService;