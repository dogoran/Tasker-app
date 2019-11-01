import axios from 'axios';

import { SERVER_API_URL, DEVELOPER_API_KEY } from '../constants/constants';

export default function callApi(endpoint, method = 'get', body) {
  const paramsSymbol = !endpoint || endpoint[endpoint.length - 1] === '/' ? '?' : '&';

  return body
    ? axios[method](`${SERVER_API_URL}/${endpoint}${paramsSymbol}developer=${DEVELOPER_API_KEY}`, body)
    : axios[method](`${SERVER_API_URL}/${endpoint}${paramsSymbol}developer=${DEVELOPER_API_KEY}`);
}
