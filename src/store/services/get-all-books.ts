import { AxiosError } from 'axios';

import { cleverlandConfig } from './cleverland-config';

export const getAllBooks = async () => {
  try {
    const response = await cleverlandConfig.get('/api/books');
    console.log('response.data ===', response.data);

    return response;
  } catch (error) {
    console.log('error ===', error);

    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }

    return error;
  }
};
