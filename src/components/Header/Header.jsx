import React from 'react';
import { Header } from 'semantic-ui-react';
import './Header.scss';

const HeaderExampleDividing = () => (
  <Header as='h3' className="header" dividing>
    <div className="header__name">
      Infant Mortality Rate (IMR)
    </div>
    <div className="header__date">
      2011 - 2017
    </div>
  </Header>
)

export default HeaderExampleDividing;