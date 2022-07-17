import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoute from '@routes/App.route';

import '@styles/general.less';
import '@styles/dark.theme.less';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}