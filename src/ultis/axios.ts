import axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  AxiosInstance,
  AxiosPromise,
} from "axios";
import Qs from "qs";
import { objectType } from "./types";

export const DEFAULT_LANGUAGE_SELECTED = "vi";
const api = process.env.NEXT_PUBLIC_API;
export const token = process.env.NEXT_PUBLIC_X_TOKEN;

const onSuccessInterceptorRequest = async (config: any) => {
  //   const authToken = await getCookie(AuthToken);
  const newConfig = { ...config };

  // NOTE: remove locale from headers (fixed CORS issue)
  delete newConfig.headers.locale;
  //   if (authToken) {
  //     newConfig.headers.Authorization = `${authToken}`;
  //   }
  newConfig.headers["x-token"] = token;
  newConfig.paramsSerializer = (params: any) =>
    Qs.stringify(params, {
      arrayFormat: "brackets",
    });
  return newConfig;
};

const onErrorInterceptorRequest = (error: AxiosError) => Promise.reject(error);
const onErrorInterceptorResponse = (error: AxiosError<objectType>) => {
  if (error.response && error.response.status) {
    // error.response.data?.errors?.length &&
    //   store.dispatch(
    //     notify(error.response.data?.errors[0].msg, 'error', {
    //       title: 'Oops',
    //       dismissAfter: 5000,
    //     }),
    //   );
    // if (error.response.status === 401) {
    //   removeCookie(AuthToken);
    //   store.dispatch(actions.logout());
    // }
  }
  return Promise.reject(error);
};
const onSuccessInterceptorResponse = (response: AxiosResponse) => {
  if (response.status === 200)
    console.debug(
      `${response?.config?.method?.toUpperCase()}: ${response.status}: ${
        response.config.url
      }`
    );
  return response;
};

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.post.Accept = "application/x-www-form-urlencoded";
axios.defaults.headers.put["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.post.Accept = "application/x-www-form-urlencoded";
const _axios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API || "",
  timeout: 120 * 1000,
  // withCredentials: true, // Check cross-site Access-Control
});

_axios.interceptors.request.use(
  onSuccessInterceptorRequest,
  onErrorInterceptorRequest
);

_axios.interceptors.response.use(
  onSuccessInterceptorResponse,
  onErrorInterceptorResponse
);

/**
 *
 * @NOTE primary methods axios
 *
 */
class AxiosXHRConstructor {
  axiosInstance: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.$get = this.$get.bind(this);
    this.$getWithAuth = this.$getWithAuth.bind(this);
    this.$post = this.$post.bind(this);
    this.$put = this.$put.bind(this);
    this.$delete = this.$delete.bind(this);
  }

  $getWithAuth(url: string, params: AxiosRequestConfig<any> | undefined) {
    return this.axiosInstance.get(url, params);
  }

  $get(url: string, params?: objectType, config?: objectType): AxiosPromise {
    return this.axiosInstance.get(url, {
      params,
      ...config,
    });
  }

  $post(url: string, data?: objectType, config?: objectType): AxiosPromise {
    return this.axiosInstance.post(url, data, config);
  }

  $put(url: string, data?: objectType, config?: objectType): AxiosPromise {
    return this.axiosInstance.put(url, data, config);
  }

  $delete(url: string, data?: objectType, config?: objectType): AxiosPromise {
    return this.axiosInstance.delete(url, {
      data,
      ...config,
    });
  }
}
export const BaseXHR = new AxiosXHRConstructor(_axios);
export default _axios;
