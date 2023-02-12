import { AxiosError } from 'axios';

import { cleverlandConfig } from './cleverland-config';

export const getCategories = async () => {
  try {
    const response = await cleverlandConfig.get('/api/categories');

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }

    return error;
  }
};
