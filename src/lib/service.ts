import axios from "axios";

const isProd = process.env.NODE_ENV === "production";

const instance = axios.create({
  // 开发环境走 proxy
  // 生产环境直接请求线上地址
  baseURL: isProd ? "https://www.onlineinline.cn" : "https://172.25.11.120",
  timeout: 15000,
  withCredentials: true,
});

// 请求拦截器 —— 注意要挂在 instance 上，而非全局 axios
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || "网络异常，请稍后重试";
    console.error("[API Error]", message);
    return Promise.reject(error);
  }
);

export const get = (url: string, params: Record<string, unknown> = {}) =>
  instance.get(url, { params }).then((res) => res.data);

export const post = (url: string, data: Record<string, unknown> = {}) =>
  instance.post(url, data).then((res) => res.data);

export const put = (url: string, data: Record<string, unknown> = {}) =>
  instance.put(url, data).then((res) => res.data);

export const patch = (url: string, data: Record<string, unknown> = {}) =>
  instance.patch(url, data).then((res) => res.data);

export const del = (url: string) =>
  instance.delete(url).then((res) => res.data);

export default instance;
