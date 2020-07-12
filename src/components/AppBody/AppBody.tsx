import React, { useEffect, useState } from 'react';
import styles from './AppBody.module.less';
import Photo from '../UI/Photo/Photo';
import { getFeaturedPhotos, Photo as DataPhoto } from '../../api';

const AppBody: React.FunctionComponent = () => {
  const initialPhotos: DataPhoto[] = [];
  const [photos, setPhotos] = useState(initialPhotos);

  useEffect(() => {
    (async function (): Promise<void> {
      const featuredPhotos = await getFeaturedPhotos(20);
      setPhotos(featuredPhotos);
    })();
  }, []);
  return (
    <div className={styles.body}>
      {photos.map((photo, index) => (
        <Photo url={photo.url} key={index} />
      ))}
    </div>
  );
};

export default AppBody;
