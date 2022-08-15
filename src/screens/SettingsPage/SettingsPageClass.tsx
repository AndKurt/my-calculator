import React, { ChangeEvent, Component } from 'react';

import { THEME } from '@constants/operators';
import { ISettingsPageClassProps } from '@interfaces/props';
import { getDataFromLS } from '@utils/localStorageFunc';

import { ClearBtn, Select, SettingsContainer, SettingsWrapper } from './components';

export class SettingsPageClass extends Component<ISettingsPageClassProps, { theme: string }> {
  constructor(props: ISettingsPageClassProps) {
    super(props);

    this.state = {
      theme: getDataFromLS('theme', THEME.LIGHT),
    };
  }

  handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentTheme = e.target.value;
    this.props.handleChangeTheme(currentTheme);
    this.setState({ theme: currentTheme });
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  };

  handleClearAll = () => {
    this.props.clearHistory();
  };

  render() {
    const { theme } = this.state;

    return (
      <SettingsWrapper>
        <SettingsContainer>
          <h2>Settings</h2>
          <h3>Switch Theme</h3>
          <Select value={theme} onChange={this.handleChange}>
            <option value={THEME.LIGHT}>Light Theme</option>
            <option value={THEME.DARK}>Dark Theme</option>
          </Select>
          <ClearBtn onClick={this.handleClearAll}>Clear All History</ClearBtn>
        </SettingsContainer>
      </SettingsWrapper>
    );
  }
}

export default SettingsPageClass;
