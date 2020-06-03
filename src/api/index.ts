import { request } from '../util/fakeNetwork';
import { getRandomInt } from '../util/random';

interface Photo {
  url: string;
}

export function getFeaturedPhotos(count = 10): Promise<Photo[]> {
  return new Promise((resolve) => {
    request(() => {
      const featuredPhotos: Photo[] = [];
      for (let i = 0; i < count; i++) {
        featuredPhotos.push({ url: `/samples/${getRandomInt(1, 20)}.jpg` });
      }
      resolve(featuredPhotos);
    });
  });
}
