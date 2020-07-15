import { request } from '../util/fakeNetwork';
import { shuffle } from '../util/random';

export interface Photo {
  url: string;
}

export function getFeaturedPhotos(count = 10): Promise<Photo[]> {
  return new Promise((resolve) => {
    request(() => {
      const featuredPhotos: Photo[] = [];
      const indexArray = shuffle(
        Array(count)
          .fill(null)
          .map((value, index) => index + 1)
      );
      for (let i = 0; i < count; i++) {
        featuredPhotos.push({ url: `/samples/${indexArray[i]}.jpg` });
      }
      resolve(featuredPhotos);
    });
  });
}
