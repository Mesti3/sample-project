import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthService from '../../services/AuthService';
import { Button, Checkbox, Form, Icon, Input } from 'antd';
import GoogleLogin from 'react-google-login';
import { withTranslation } from 'react-i18next';

import { About, Footer, Slider } from "../../components/index";
import { Aux } from '../../hoc/index';
import * as actions from '../../store/actions/index';

class Login extends Component {
  HandleLoginForm = () => {
    try {
      this.AuthService.login(this.state.email,
        this.state.password)
        .then(res => {
          if (res.success) {
            this.AuthService.setToken(res.token);
            window.location.assign('/admin');

            if (res.user.role === "admin") {
              localStorage.setItem('a', 'y')
            } else {
              localStorage.setItem('a', 'n')
            }

            return Promise.resolve(res);
          } else {
            if (res === 'Password is incorrect') {
              alert(this.props.t('login.Passwordisincorrect', { frameWork: "react-i18next" }));
            }
            if (res === 'User doesn`t exist') {
              alert(this.props.t('login.Userdoesntexist', { frameWork: "react-i18next" }));
            }
            if (res === 'User is not registrated') {
              alert(this.props.t('login.Userisnotregistrated', { frameWork: "react-i18next" }))
            }
          }
        })
      ;
    } catch (e) {

    }
  };
  checkForm = () => { // checks fields if they are empty
    return this.state.email.length > 0 && this.state.password.length > 0;
  };
  trigger = () => {
    if (this.checkForm() === true) {
      if (this.AuthService.loggedIn()) {
        window.location.assign('/admin');
      }
      else {
        setTimeout(() => {
          this.HandleLoginForm();
        }, 1000);
      }
    }
    else {
      alert('Something is wrong')
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ email: values.username, password: values.password, remembered: values.remembered });
        this.trigger();
      }
    });
  };
  showModal = () => {
    this.setState({ visible: !this.state.visible });
  };
  void = () => {

  };
  responseGoogle = (response) => {
    console.log(response);
  };

  constructor(props) {
    super(props);
    try {
      this.AuthService = new AuthService();
    } catch (e) {

    }

    this.state = {
      email: '',
      password: '',
      remembered: false,
      visible: false
    };
  }

  render() {

    const { getFieldDecorator } = this.props.form;

    if (this.state.visible) {
      return (
        <Aux>
          <div className="LoginClass">

            <div className="LoginClass">
              <div className="Login">
                <Input
                  id="email"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                  placeholder="Email"
                />
                <Button onClick={this.showModal}>
                  {this.props.t('login.recoverpassword', { frameWork: "react-i18next" })}
                </Button>
              </div>
              <About/>
              <Footer/>
            </div>
          </div>
        </Aux>
      )
    } else {
      return (
        <Aux>
          <div className="LoginClass">
            <Form onSubmit={this.handleSubmit} className="Login">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    id="email"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    placeholder="Email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    id="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    type="password"
                    placeholder={this.props.t('login.password', { frameWork: "react-i18next" })}
                    onChange={e => this.setState({ password: e.target.value })}
                  />,
                )}
              </Form.Item>
              <div>
                <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText={this.props.t('login.login', { frameWork: "react-i18next" })}
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox className="Remember"> {this.props.t('login.rememberme', { frameWork: "react-i18next" })} </Checkbox>)}
                <a className="login-form-forgot" href="/#" onClick={this.showModal}>
                  {this.props.t('login.forgotpassword', { frameWork: "react-i18next" })}
                </a>
                <br/>
                <Button type="primary" htmlType="submit" className="login-form-button"

                >
                  {this.props.t('login.login', { frameWork: "react-i18next" })}
                </Button>
                <span style={{ color: 'white' }}>{this.props.t('login.or', { frameWork: "react-i18next" })}</span> <a href="/registration"> {this.props.t('login.registernow', { frameWork: "react-i18next" })} !</a>
              </Form.Item>

            </Form>

            <Slider/>

            <About/>
            <Footer/>
          </div>
        </Aux>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    admin: state.admin.admin
  }
};

const mapDispatchToProps = dispatch => {
  return {
    initSetAdmin: (admin) => dispatch(actions.setAuth(admin))
  }
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(WrappedNormalLoginForm));