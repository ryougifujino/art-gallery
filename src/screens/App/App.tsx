import React from 'react';
import './App.less';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppBody from '../../components/AppBody/AppBody';

const App: React.FunctionComponent = () => (
  <div>
    <AppHeader />
    <AppBody />
  </div>
);

export default App;
