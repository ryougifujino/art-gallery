import React from 'react';
import styles from './Logo.module.less';

const Logo: React.FunctionComponent = () => (
  <img className={styles.logo} src={process.env.PUBLIC_URL + '/logo512.png'} alt="Logo" />
);

export default Logo;
