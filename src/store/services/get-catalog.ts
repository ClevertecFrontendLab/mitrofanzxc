import { AxiosError } from 'axios';

import { cleverlandConfig } from './cleverland-config';

export const getCatalog = async () => {
  try {
    const response = await cleverlandConfig.get('/api/books');

    return response;
  } catch (error) {
    if (error instanceof Error || error instanceof AxiosError) {
      throw new Error(error.message);
    }

    return error;
  }
};
