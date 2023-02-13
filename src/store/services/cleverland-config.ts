import axios from 'axios';

import { BASE_URL_API } from '../../constants';

export const cleverlandConfig = axios.create({
  baseURL: BASE_URL_API,
});
