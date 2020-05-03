import React from 'react';
import styles from './AppHeader.module.less';
import SearchBar from './SearchBar';
import Logo from './Logo';

const AppHeader: React.FunctionComponent = () => (
  <div className={styles.header}>
    <div className={styles.headerContent}>
      <Logo />
      <SearchBar />
    </div>
  </div>
);

export default AppHeader;
