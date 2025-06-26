import { type AxiosResponse } from 'axios';

import { request, type RequestConfig } from './axios';

// HTTP请求方法列表
const methodList = ['get', 'delete', 'post', 'put', 'patch'] as const;
type HttpMethod = (typeof methodList)[number];

// 请求参数类型
type RequestParams = [string, Record<string, unknown>?, RequestConfig?];

// 动态创建HTTP请求方法
const http = methodList.reduce(
  (acc, method) => {
    acc[method] = <T = unknown>(...args: RequestParams): Promise<AxiosResponse<T>> => {
      const [url, dataOrParams, config = {}] = args;
      const paramKey = ['get', 'delete'].includes(method) ? 'params' : 'data';
      const reqConfig: RequestConfig = {
        url,
        method: method.toUpperCase(),
        [paramKey]: dataOrParams,
        ...config,
      };
      return request<T>(reqConfig);
    };
    return acc;
  },
  {} as Record<HttpMethod, <T = unknown>(...args: RequestParams) => Promise<AxiosResponse<T>>>,
);

export default http;
