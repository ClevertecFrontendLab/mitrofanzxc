import { cleverlandConfig } from './cleverland-config';

export const getAllBooks = async () => {
  try {
    const response = await cleverlandConfig.get('/api/books');

    /* eslint-disable-next-line no-console */
    console.log(response);

    return response;
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(error);

    return error;
  }
};
