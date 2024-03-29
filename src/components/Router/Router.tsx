import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { HOME_PAGE_ROUTE, HOME_CLASS_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@constants/router';
import VisibleSettingPageClass from '@containers/SettingsPage/VisibleSettingPageClass';
import { ChangeTheme } from '@interfaces/props';
import { HomePage, HomePageClass } from '@screens/HomePage';
import { SettingsPage } from '@screens/SettingsPage';

export const Router = ({ handleChangeTheme }: ChangeTheme) => {
  const [isClassComponent, setIsClassComponent] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === HOME_CLASS_PAGE_ROUTE) {
      setIsClassComponent(true);
    }
    if (pathname === HOME_PAGE_ROUTE) {
      setIsClassComponent(false);
    }
  });

  return (
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={HOME_CLASS_PAGE_ROUTE} element={<HomePageClass />} />
      <Route
        path={SETTINGS_PAGE_ROUTE}
        element={
          !isClassComponent ? (
            <SettingsPage handleChangeTheme={handleChangeTheme} />
          ) : (
            <VisibleSettingPageClass handleChangeTheme={handleChangeTheme} />
          )
        }
      />
      <Route path="*" element={<Navigate to={HOME_PAGE_ROUTE} />} />
    </Routes>
  );
};
