import AbstractService from './AbstractService';
import AuthService from "./AuthService";


class EventService extends AbstractService {
  createEventt = (event) => {
    return this.post(this.endpoint,
      event, this.header(this.AuthService.getToken()))
      .then(res => {
        if (res === "Event already exists") {
          alert("Event already exists")
        }
      });
  };
  getEvents = () => {
    return this.get(this.endpoint + '/' + localStorage.getItem('email'), this.header(this.AuthService.getToken()));
  };
  updateEvent = (event) => {
    return this.put(this.endpoint, event, this.header(this.AuthService.getToken()));
  };
  removeEvent = (event) => {
    return this.delete(this.endpoint + '/' + event, this.header(this.AuthService.getToken()));
  }

  constructor() {
    super();
    this.AuthService = new AuthService();
    this.endpoint = "events"
  }
}

export default EventService;