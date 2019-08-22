import * as axios from 'axios';
import os from 'os';


//import { showProgressBar } from 'components/common/bars/ProgressBar';

class AbstractService { // class for methods for connection to  backend
  header = (par) => {
    const headers = {
      'Authorization': par, // abstkartna trieda
    };

    return {
      headers: headers,
    };
  }

  constructor() {
    //  var protocol = window.location.protocol;
    const locationPort = window.location.port;
    var protocol = 'http:'; //'https:' ? 3333 : 3343
    const hostname = os.hostname();
    const hostport = locationPort === 80 || locationPort === 443 ? '' : `:${locationPort}`;
    this.api = protocol + '//' + hostname + ':' + 8000 + '/api/'; //Default
    this.callbackUrl = `${protocol}//${hostname}${hostport}`;
  }

  _post(endpoint, data, config = null) {
    var url = this.api + endpoint;
    //  console.log('AbstractService.post', url, data, config);
    return axios.post(url, data, config);
  }

  post(endpoint, data, config = null) { // send data to  BE
    // showProgressBar(true);
    var self = this;
    return new Promise(function (resolve, reject) {
      self._post(endpoint, data, config).then(function (response) {
        //  showProgressBar(false);
        if (response.data.success === false) {
          const errorMsg = ((response.data || {}).error || {}).message;
          reject(Error(errorMsg));
        } else {
          resolve(response.data);
        }
      })
        .catch(function (error) {
          //    showProgressBar(false);
          reject(error);
        });
    });
  }

  _put(endpoint, data, config = null) {
    var url = this.api + endpoint;
    //   console.log('AbstractService.put', url, data, config);
    return axios.put(url, data, config);
  }

  put(endpoint, data, config = null) { // send data to BE
    //  showProgressBar(true);
    var self = this;
    return new Promise(function (resolve, reject) {
      self._put(endpoint, data, config).then(function (response) {
        //     showProgressBar(false);
        if (response.data.success === false) {
          const errorMsg = ((response.data || {}).error || {}).message;
          reject(Error(errorMsg));
        } else {
          resolve(response.data);
        }
      })
        .catch(function (error) {
          //    showProgressBar(false);
          reject(error);
        });
    });
  }

  _get(endpoint, config = null) {
    var url = this.api + endpoint;
    // console.log('AbstractService.get', url, config);
    return axios.get(url, config);
  }

  get(endpoint, config = null) { // gets data from BE
    //  showProgressBar(true);
    var self = this;
    return new Promise(function (resolve, reject) {
      self._get(endpoint, config).then(function (response) {
        //   showProgressBar(false);
        if (response.data.success === false) {
          const errorMsg = ((response.data || {}).error || {}).message;
          reject(Error(errorMsg));
        } else {
          resolve(response.data);
        }
      })
        .catch(function (error) {
          //   showProgressBar(false);
          reject(error);
        });
    });
  }

  _delete(endpoint, config = null) {
    var url = this.api + endpoint;
    // console.log('AbstractService.delete', url, config);
    return axios.delete(url, config);
  }

  delete(endpoint, config = null) { // remove some on DB
    //showProgressBar(true);
    var self = this;
    return new Promise(function (resolve, reject) {
      self._delete(endpoint, config)
        .then(function (response) {
          // showProgressBar(false);
          if (response.data.success === false) {
            const errorMsg = ((response.data || {}).error || {}).message;
            reject(Error(errorMsg));
          } else {
            resolve(response.data);
          }
        })
        .catch(function (error) {
          //  showProgressBar(false);
          reject(error);
        });
    });
  }
}


export default AbstractService;