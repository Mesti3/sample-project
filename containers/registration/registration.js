import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import { Button, Checkbox, Col, Form, Input, Row, } from 'antd';
import { withTranslation } from "react-i18next";


class Registration extends Component {
  state = {
    confirmDirty: false,
    email: '',
    name: '',
    surname: '',
    password: '',
    cpassword: '',
    role: '',
    profession: '',
    code: '',
    agreement: false
  };

  handleRegister = () => {
    let user = {
      email: this.state.email,
      name: this.state.name,
      surname: this.state.surname,
      password: this.state.password,
      role: "user",
      profession: this.state.profession,
      agreement: this.state.agreement
    };


    if (this.props.code === this.state.code) {
      if (user.email.length > 0 && user.password.length > 0 &&
        this.state.cpassword === user.password && user.profession.length > 0
      ) {

        this.props.initRegisterUser(user);

        setTimeout(() => {
          window.location.assign("/");
        }, 500)
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  void = () => {

  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };


    return (
      <div className="Registration">
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item id="email" label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input onChange={e => this.setState({ email: e.target.value })}/>)}
          </Form.Item>
          <Form.Item id="name" label={this.props.t('registration.name', { frameWork: "react-i18next" })}>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Name!',
                },
              ],
            })(<Input onChange={e => this.setState({ name: e.target.value })}/>)}
          </Form.Item>
          <Form.Item id="surname" label={this.props.t('registration.surname', { frameWork: "react-i18next" })}>
            {getFieldDecorator('surname', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Surname!',
                },
              ],
            })(<Input onChange={e => this.setState({ surname: e.target.value })}/>)}
          </Form.Item>
          <Form.Item id="password" label={this.props.t('registration.password', { frameWork: "react-i18next" })} hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password onChange={e => this.setState({ password: e.target.value })}/>)}
          </Form.Item>
          <Form.Item label={this.props.t('registration.cpassword', { frameWork: "react-i18next" })} hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} onChange={e => this.setState({ cpassword: e.target.value })}/>)}
          </Form.Item>
          <Form.Item id="profession" label={this.props.t('registration.profession', { frameWork: "react-i18next" })}>
            {getFieldDecorator('profession', {
              rules: [{ required: true, message: 'Please input profession!' }],
            })(
              <Input onChange={e => this.setState({ profession: e.target.value })}/>
            )}
          </Form.Item>
          <Form.Item label={this.props.t('registration.captcha', { frameWork: "react-i18next" })} extra="We must make sure that your are a human.">
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(<Input onChange={e => this.setState({ code: e.target.value })}/>)}
              </Col>
              <Col span={12}>
                <Button onClick={() => this.props.initSetCaptcha(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5))}>{this.props.t('registration.getcaptcha', { frameWork: "react-i18next" })}</Button>
              </Col>
            </Row>
            <div style={{ border: this.props.code !== '' ? "black 1px solid" : "", fontSize: 20, width: 100 }}>{this.props.code}</div>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                {this.props.t('registration.ihavereadthe', { frameWork: "react-i18next" })}<a href={this.void()} onClick={() => this.state.initSetAssigment(true)}><a href="/agreement">  {this.props.t('registration.agreement', { frameWork: "react-i18next" })}</a></a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={this.handleRegister}>
              {this.props.t('registration.register', { frameWork: "react-i18next" })}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    code: state.admin.code
  }
};

const mapDispatchToState = dispatch => {
  return {
    initRegisterUser: (user) => dispatch(actions.registerUser(user)),
    initSetCaptcha: (code) => dispatch(actions.setCaptcha(code)),
  }
};

const WrappedRegistrationForm = Form.create({ name: 'register' })(Registration);
export default connect(mapStateToProps, mapDispatchToState)(withTranslation('common')(WrappedRegistrationForm));