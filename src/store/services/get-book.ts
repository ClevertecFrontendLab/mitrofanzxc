import { cleverlandConfig } from './cleverland-config';

export const getBook = async (id: string) => {
  try {
    const response = await cleverlandConfig.get(`/api/books/${id}`);

    /* eslint-disable-next-line no-console */
    console.log(response);

    return response;
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(error);

    return error;
  }
};
