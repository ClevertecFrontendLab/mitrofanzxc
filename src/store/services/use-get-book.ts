import { useEffect } from 'react';

import { cleverlandConfig } from './cleverland-config';

export const useGetBook = (id: string) => {
  useEffect(() => {
    const request = async () => {
      try {
        const response = await cleverlandConfig.get(`/products/${id}`);

        /* eslint-disable-next-line no-console */
        console.log(response);
      } catch (error) {
        /* eslint-disable-next-line no-console */
        console.error(error);
      }
    };

    request();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
};
