import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import { Aux, withAuth } from "../../../../hoc/index";
import { Navigation } from '../../components/index';

class About extends Component {

  render() {
    return (
      <Aux>
        <Navigation>
          <h2 id="AboutTitle">TeachMaker</h2>
          <p>{this.props.t('about.title', { frameWork: "react-i18next" })}</p>
          <h2>{this.props.t('about.hometitle', { frameWork: "react-i18next" })}</h2>
          <p>{this.props.t('about.hometext', { frameWork: "react-i18next" })}</p>
          <h1>{this.props.t('about.timetabletitle', { frameWork: "react-i18next" })}</h1>
          <p>{this.props.t('about.timetabletext', { frameWork: "react-i18next" })}</p>
          <h1>{this.props.t('about.scheduletitle', { frameWork: "react-i18next" })}</h1>
          <p>{this.props.t('about.scheduletext', { frameWork: "react-i18next" })}</p>
          <h2>{this.props.t('about.generatortitle', { frameWork: "react-i18next" })}</h2>
          <p>{this.props.t('about.generatortext', { frameWork: "react-i18next" })}</p>
          <h1>{this.props.t('about.loadfiletitle', { frameWork: "react-i18next" })}</h1>
          <p>{this.props.t('about.loadfiletext', { frameWork: "react-i18next" })}</p>
          <h1>{this.props.t('about.createfiletitle', { frameWork: "react-i18next" })}</h1>
          <p>{this.props.t('about.createfiletext', { frameWork: "react-i18next" })}</p>
          <h2>{this.props.t('about.settingstitle', { frameWork: "react-i18next" })}</h2>
          <p>{this.props.t('about.settingstext', { frameWork: "react-i18next" })}</p>
          <h1>{this.props.t('about.accounttitle', { frameWork: "react-i18next" })}</h1>
          <p>{this.props.t('about.accounttext', { frameWork: "react-i18next" })}</p>
          <h1>{this.props.t('about.invitationtitle', { frameWork: "react-i18next" })}</h1>
          <p>{this.props.t('about.invitationtext', { frameWork: "react-i18next" })}</p>
        </Navigation>
      </Aux>
    )
  }
}

export default withAuth(withTranslation('common')(About));