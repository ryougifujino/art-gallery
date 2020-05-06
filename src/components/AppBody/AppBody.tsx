import React from 'react';
import styles from './AppBody.module.less';
import Photo from '../UI/Photo/Photo';

const AppBody: React.FunctionComponent = () => (
  <div className={styles.body}>
    {Array(10)
      .fill(null)
      .map(() => (
        <Photo />
      ))}
  </div>
);

export default AppBody;
