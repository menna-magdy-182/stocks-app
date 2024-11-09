import {PAGINATION_LIMIT} from 'constants/common';

import apiClient from './apiClient';
import endpoints from './endpoints';

const fetchTickers = (search: string, cursor: string) =>
  apiClient.get(endpoints.tickers, {
    params: {limit: PAGINATION_LIMIT, search, cursor},
  });

const apiService = {fetchTickers};

export default apiService;
