import React from 'react';
import styles from './SearchBar.module.less';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar: React.FunctionComponent = () => (
  <div className={styles.searchBar}>
    <SearchOutlined className={styles.searchIcon} />
    <input className={styles.input} placeholder="搜索" />
  </div>
);

export default SearchBar;
