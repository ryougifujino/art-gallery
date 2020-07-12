import React from 'react';
import styles from './Photo.module.less';
import { Photo as DataPhoto } from '../../../api';

const Photo: React.FunctionComponent<DataPhoto> = (photo: DataPhoto) => (
  <img className={styles.photo} src={photo.url} />
);

export default Photo;
