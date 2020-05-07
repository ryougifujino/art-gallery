import React from 'react';
import styles from './App.module.less';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppBody from '../../components/AppBody/AppBody';

const App: React.FunctionComponent = () => (
  <div className={styles.app}>
    <AppHeader />
    <AppBody />
  </div>
);

export default App;
