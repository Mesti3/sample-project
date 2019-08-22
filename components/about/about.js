import React, { Component } from 'react';

import { Aux } from '../../hoc/index';
import { withTranslation } from "react-i18next";

class About extends Component {

  render() {
    return (
      <Aux>
        <div className="About">
          <h1>{this.props.t('About.title', { frameWork: "react-i18next" })}</h1>
          <h2>
            {this.props.t('About.text', { frameWork: "react-i18next" })}
          </h2>
        </div>
      </Aux>
    )
  }
}

export default withTranslation('common')(About);