import React, { Component } from 'react';
import { Aux, withAuth } from "../../../../hoc/index";
import { Button, Input, Table } from 'antd';
import { connect } from 'react-redux';
import Card from 'react-credit-cards';
import { withTranslation } from "react-i18next";
import 'react-credit-cards/lib/styles.scss';

import { Navigation } from '../../components/index';
import * as actions from '../../../../store/actions/index';


import SupportedCards from '../../../../shared/cards';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from '../../../../shared/utils';

class Account extends Component {

  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  };

  componentDidMount() {
    try {
      this.props.initSetAdmin(localStorage.getItem('a') === "y");

      this.props.initGetUsers(localStorage.getItem('a') === "y" ? 'admin' : 'user');

      setTimeout(() => {
        if (this.props.users !== null) {
          this.props.users.map(user => {
            if (user.email === localStorage.getItem('email')) {
              if (user.email !== null && user.name !== null && user.password !== null &&
                user.surname !== null && user.role !== null && user.profession !== null) {
                document.getElementById('email').value = user.email;
                document.getElementById('name').value = user.name;
                document.getElementById('surname').value = user.surname;
                document.getElementById('password').value = user.password;
                document.getElementById('role').value = user.role;
                document.getElementById('profession').value = user.profession;
                return (true);
              }
            }
            return false;
          })
        }
      }, 1000)
    } catch (e) {

    }
  }


  setAccount = () => {
    if (document.getElementById('email').value.length > 0 && document.getElementById('name').value.length > 0 &&
      document.getElementById('surname').value.length > 0 && document.getElementById('password').value.length > 0 &&
      document.getElementById('role').value.length > 0 && document.getElementById('profession').value.length > 0) {
      const user = {
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        password: document.getElementById('password').value,
        role: document.getElementById('role').value,
        profession: document.getElementById('profession').value
      };

      this.props.initUpdateUser(user);

      setTimeout(() => {
        this.componentDidMount();
      }, 500)

    }
  };

  removeAccount = () => {
    this.props.initRemoveUser(document.getElementById('email'));

    setTimeout(() => {
      this.componentDidMount();
    }, 500)

  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const columns = [
      {
        name: this.props.t('account.name', { frameWork: "react-i18next" }),
        dataIndex: 'name',
        key: 'name',
      },
      {
        surname: this.props.t('account.surname', { frameWork: "react-i18next" }),
        dataIndex: 'surname',
        key: 'surname'
      },
      {
        email: this.props.t('account.email', { frameWork: "react-i18next" }),
        dataIndex: 'email',
        key: 'email'
      },
      {
        role: this.props.t('account.role', { frameWork: "react-i18next" }),
        dataIndex: 'role',
        key: 'role'
      },
      {
        dataIndex: '_id',
        key: '_id',
      }
    ];

    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <Aux>
        <Navigation>
          <div className="Account">
            <div className="Data">
            <Input id='email' placeholder='email' disabled={true} type='email' maxLength={20}/>
            <Input id='name' placeholder='name' disabled={false} type='text' maxLength={20}/>
            <Input id='surname' placeholder='surname' disabled={false} type='text' maxLength={20}/>
            <Input id='password' placeholder='password' disabled={false} type='password' maxLength={20}/>
            <Input id='role' placeholder='role' disabled={true} type='text' maxLength={10}/>
            <Input id='profession' placeholder='profession' disabled={false} type='text' maxLength={20}/>
            <Button style={{ background: "#1890ff" }}  onClick={this.setAccount}>{this.props.t('account.ok', { frameWork: "react-i18next" })}</Button>
            <Button style={{ background: "#1890ff" }}  onClick={this.removeAccount}>{this.props.t('account.remove', { frameWork: "react-i18next" })}</Button>
            </div>
            {this.props.admin ?
              <Table className="TableAccount" rowKey={record => record.email} dataSource={this.props.users} columns={columns} pagination={{ pageSize: 7 }}/>
              :    <div key="Payment">
                <div className="App-payment">
                  <h1>{this.props.t('card.title', { frameWork: "react-i18next" })}</h1>
                  <Card
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focused}
                    callback={this.handleCallback}
                  />
                  <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <Input
                        type="tel"
                        name="number"
                        className="form-control"
                        placeholder={this.props.t('card.cardNumber', { frameWork: "react-i18next" })}
                        pattern="[\d| ]{16,22}"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        maxLength={16}
                      />
                      <small>E.g.: 49..., 51..., 36..., 37...</small>
                    </div>
                    <div className="form-group">
                      <Input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={this.props.t('card.Name', { frameWork: "react-i18next" })}
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Input
                          type="tel"
                          name="expiry"
                          className="form-control"
                          placeholder={this.props.t('card.Validthru', { frameWork: "react-i18next" })}
                          pattern="\d\d/\d\d"
                          required
                          onChange={this.handleInputChange}
                          onFocus={this.handleInputFocus}
                          maxLength={4}
                        />
                      </div>
                      <div className="col-6">
                        <Input
                          type="tel"
                          name="cvc"
                          className="form-control"
                          placeholder={this.props.t('card.cvc', { frameWork: "react-i18next" })}
                          pattern="\d{3,4}"
                          required
                          onChange={this.handleInputChange}
                          onFocus={this.handleInputFocus}
                          maxLength={3}
                        />
                      </div>
                    </div>
                    <input type="hidden" name="issuer" value={issuer} />
                    <div className="form-actions">
                      <Button onClick={this.props.initMakePay} style={{ background: "#1890ff" }}  className="btn btn-primary btn-block">{this.props.t('card.pay', { frameWork: "react-i18next" })}</Button>
                    </div>
                  </form>
                  {formData && (
                    <div className="App-highlight">
                      {formatFormData(formData).map((d, i) => <div key={i}>{d}</div>)}
                    </div>
                  )}
                  <hr style={{ margin: '60px 0 30px' }} />
                  <hr style={{ margin: '30px 0' }} />
                  <SupportedCards />
                </div>
              </div>
            }
          </div>
        </Navigation>
      </Aux>
    )
  }

}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    admin: state.admin.admin
  }
};

const mapDispatchToProps = dispatch => {
  return {
    initUpdateUser: (user) => dispatch(actions.updateUser(user)),
    initRemoveUser: (email) => dispatch(actions.removeUser(email)),
    initGetUsers: (admin) => dispatch(actions.getUsers(admin)),
    initSetAdmin: (admin) => dispatch(actions.setAuth(admin)),
    initMakePay: () => dispatch(actions.makePay())
  }
};


export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Account)));