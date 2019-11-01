import axios from 'axios';

import { SERVER_API_URL, DEVELOPER_API_KEY } from '../constants/constants';

export default function callApi(endpoint, method = 'get', body) {
  return body
    ? axios[method](`${SERVER_API_URL}/${endpoint}?developer=${DEVELOPER_API_KEY}`, body)
    : axios[method](`${SERVER_API_URL}/${endpoint}?developer=${DEVELOPER_API_KEY}`);
}
