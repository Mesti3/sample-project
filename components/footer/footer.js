import React from 'react';
import { Icon } from 'antd';

import { Aux } from "../../hoc/index";

const footer = () => {

  return (
    <Aux>
      <div className="Footer">
        <div className="info">
          <Icon type="info-circle"/>
          <span>Info</span>
        </div>
        <div className="mail">
          <Icon type="mail"/>
          <span>teachmaker@info.com</span>
        </div>

      </div>
    </Aux>
  )
};

export default footer;