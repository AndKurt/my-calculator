import React, { Component } from 'react';

import { CalculationClass } from '@components/Calculation';
import { savePathToLS } from '@utils/localStorageFunc';

import { HomeContainer, HomeWrapper } from './components';

export class HomePageClass extends Component {
  componentDidMount() {
    savePathToLS(window.location.href.split('/')[3]);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeContainer>
          <CalculationClass />
        </HomeContainer>
      </HomeWrapper>
    );
  }
}

export default HomePageClass;
