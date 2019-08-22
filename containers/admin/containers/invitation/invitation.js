import React, { Component } from 'react';
import { Aux, withAuth } from "../../../../hoc/index";
import { Input, Button } from 'antd';
import { Navigation } from '../../components/index';
import AuthService from "../../../../services/AuthService";
import { withTranslation } from "react-i18next";

class Invitation extends Component {
  constructor(props) {
    super(props);
    this.invite = new AuthService();
  }

  checkEmail = () => {
    if (document.getElementById('email').value != null
      && document.getElementById('email').value.length > 1
    ) {
      this.invite.sendEmail(
        document.getElementById('email').value);
    } else {
      alert('Enter email');
    }
  };

  render() {
    return (
      <Aux>
        <Navigation>
          <div>
            <span>{this.props.t('invitation.inviteyourfriend', { frameWork: "react-i18next" })}</span>
            <Input id="email" type="email" defaultValue="@"/>
            <Button onClick={this.checkEmail}>{this.props.t('invitation.invite', { frameWork: "react-i18next" })}</Button>
          </div>
        </Navigation>
      </Aux>
    )
  }
}

export default withAuth(withTranslation('common')(Invitation));