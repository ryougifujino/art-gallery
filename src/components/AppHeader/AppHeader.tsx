import React from 'react';
import styles from './AppHeader.module.less';
import SearchBar from './SearchBar';

const AppHeader: React.FunctionComponent = () => (
  <div className={styles.header}>
    <div className={styles.headerContent}>
      <SearchBar />
    </div>
  </div>
);

export default AppHeader;
