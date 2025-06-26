import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

export type RequestConfig = AxiosRequestConfig & {};

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 1000 * 120,
  withCredentials: true,
  xsrfCookieName: 'X-CSRFToken',
});

// 处理HTTP错误
const handleHttpError = (error: AxiosError): string => {
  let message = '网络错误';
  if (error.response) {
    // 服务器返回了错误状态码
    switch (error.response.status) {
      case 400:
        message = '请求错误';
        break;
      case 401:
        message = '未授权，请重新登录';
        break;
      case 403:
        message = '拒绝访问';
        break;
      case 404:
        message = '请求地址出错';
        break;
      case 500:
        message = '服务器内部错误';
        break;
      case 502:
        message = '网关错误';
        break;
      default:
        message = `未知错误(${error.response.status})`;
    }
  } else if (error.request) {
    // 请求已发出但未收到响应
    message = '服务器未响应';
  } else {
    // 请求配置出错
    message = error.message;
  }
  return message;
};

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在请求发送之前做一些处理...

    return config;
  },
  (error) => {
    // 处理请求错误
    console.error('请求错误:', error);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 处理HTTP请求成功
    const res = response.data;
    if (res.status !== 200) {
      // 处理业务错误，确保与后端沟通以确认正确的字段名称和成功状态码
      console.error('业务错误:', res.message);
      // 根据错误码处理特定逻辑...

      return Promise.reject(new Error(res.message || '未知错误'));
    }
    // 返回成功响应
    return res;
  },
  (error: AxiosError) => {
    // 处理HTTP错误
    const message = handleHttpError(error);
    console.error('响应错误:', message);
    return Promise.reject(error);
  },
);

// 封装请求方法
export const request = <T = unknown>(config: RequestConfig): Promise<AxiosResponse<T>> => {
  return service(config)
    .then((res) => res.data)
    .catch((error) => {
      const message = handleHttpError(error);
      console.error('请求错误:', message);
      return Promise.reject(error);
    });
};

export default request;
