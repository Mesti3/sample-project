import AbstractService from './AbstractService';
import AuthService from "./AuthService";


class TestService extends AbstractService {
  constructor() {
    super();
    this.AuthService = new AuthService();
    this.endpoint = "hours"
  }

  createHour = (hour) => {
    return this.post(this.endpoint,
      hour,this.header(this.AuthService.getToken()))
      .then(res => {
        if (res === "Hour already exists") {
          alert("Hour already exists")
        }
      });
  };

  getHours = () => {
    return this.get(this.endpoint + '/' + localStorage.getItem('email'),this.header(this.AuthService.getToken()));
  };

  updateHour = (hour) => {
    return this.put(this.endpoint, hour,this.header(this.AuthService.getToken()));
  };

  removeHour = (hour) => {
    return this.delete(this.endpoint + '/' + hour,this.header(this.AuthService.getToken()));
  }
}

export default TestService;