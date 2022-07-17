import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import NotFoundLayout from '@layouts/NotFound.layout';
import { MainLayout } from '@layouts/lazyLoad.layout';
import { View } from 'common/const';

interface AppRouteProps {}

export default function AppRoute (props: AppRouteProps) {
  const ViewRegex = Object.keys(View).join('|');

  return (
    <Switch>
      <Redirect exact path="/" to="/vehicleStatus" />
      <Route path={`/:view(${ViewRegex})`} component={MainLayout} />
      <Route component={NotFoundLayout} />
    </Switch>
  );
};