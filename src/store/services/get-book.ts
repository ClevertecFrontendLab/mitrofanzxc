import { AxiosError } from 'axios';

import { cleverlandConfig } from './cleverland-config';

export const getBook = async (id: string) => {
  try {
    const response = await cleverlandConfig.get(`/api/books/${id}`);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }

    return error;
  }
};
