import AbstractService from './AbstractService';
import AuthService from "./AuthService";


class PayService extends AbstractService {
  constructor() {
    super();
    this.AuthService = new AuthService();
    this.endpoint = "payments";
  }


  makePay = () => {
    return this.post(this.endpoint,localStorage.getItem('email')
      ,this.header(this.AuthService.getToken()))
  }
}

export default PayService;