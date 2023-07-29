// eslint-disable @typescript-eslint/no-explicit-any
/* eslint-disable no-underscore-dangle */
/**
 * Utility methods to be used for invoking API methods
 */

import Axios, { AxiosRequestHeaders } from "axios";
import queryString from "querystring";
import { Cookies } from "react-cookie";
Axios.defaults.withCredentials = true;
import { UriEndPoint } from "../Interface/index";

// Interfaces

export const hostname = () => "https://api.woodenvilla.ca/api";
// export const hostname = () => "http://localhost:5001/api";
// export const hostname = () => {
//   let hostUrl = "";
//   if (process.browser) {
//     switch (window.location.hostname) {
//       case "test.khushbir.info": // production
//         hostUrl = "https://api.khushbir.info";
//         break;
//       case "localhost": // dev
//       // hostUrl = 'https://api.khushbir.info'

//       default:
//         hostUrl = "https://api-test.memesake.managemyorg.com";
//         break;
//     }
//   }
//   return hostUrl;
// };
// const hostUrl = hostname();

export const cookies = new Cookies();

/**
 * Use this to get backend appliation domain
 * @returns
 */
// export const hostnameBackend = () => 'https://admin.managemyorg.com';

const hostUrl = hostname();
interface PathParams {
  [key: string]: string;
}
interface BodyParams {
  [key: string]: any;
}
interface QueryParams {
  [key: string]: string;
}

export const makeUrl = (
  { uri = "", pathParams, query, version }: any,
  host: any
) =>
  `${host || hostUrl}${version}${uri
    .split("/")
    .map((param: any) =>
      param.charAt(0) === ":" ? encodeURI(pathParams[param.slice(1)]) : param
    )
    .join("/")}${query ? `?${queryString.stringify(query)}` : ""}`;

// export const makeUrl = (
//   {
//     uri,
//     pathParams,
//     query,
//     version,
//   }: {
//     pathParams?: PathParams;
//     query?: QueryParams;
//     uri: string;
//     method: string;
//     version: string;
//     headerProps?: AxiosRequestHeaders;
//   },
//   host: string | undefined
// ): string => {
//   return `${host || hostUrl}${version}${uri
//     .split("/")
//     .map((param: string) =>
//       param.charAt(0) === ":"
//         ? encodeURI(pathParams?.[param.slice(1)] || "")
//         : param
//     )
//     .join("/")}${query ? `?${queryString.stringify(query)}` : ""}`;
// };

// export const getDefaultHeaders: any = () => {(
//   // refreshToken: cookies.get("refreshToken") || null,

//   Authorization: cookies.get("accessToken") || null;
//   // if (localStorage.getItem("authorization")) {
//   //   getDefaultHeaders;
//   // }
//   // return headers;
// });
export const getDefaultHeaders = () => {
  const headers: any = {};
  if (localStorage.getItem("accessToken")) {
    headers.Authorization = window.localStorage.getItem("accessToken");
  }
  return headers;
};
export const getDefaultCookies = () => ({
  Cookie: `accessToken=Bearer ${cookies.get("accessToken") || null}`,
  // refreshToken: cookies.get("refreshToken") || null,
  "Content-Type": "application/json",
  // "Content-Type": "application/x-www-form-urlencoded",
});

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
const clearLocalStroage = () => {
  window.localStorage.clear();
};
/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 1.0.0
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callAxios
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */

interface CallAxiosInput {
  uriEndPoint: UriEndPoint;
  pathParams?: PathParams;
  query?: QueryParams;
  body?: BodyParams;
  apiHostUrl?: string;
}
const callAxios = ({
  uriEndPoint,
  pathParams,
  query,
  body,
  apiHostUrl,
}: CallAxiosInput) =>
  Axios({
    method: uriEndPoint.method,
    url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
    withCredentials: true,
    headers: {
      ...getDefaultHeaders(),
      // ...getDefaultCookies(),
      // ...uriEndPoint.headerProps,
    },
    data: body || {},
  });

/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 1.0.0
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callMockios
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */
const callMockios = ({
  uriEndPoint,
  pathParams,
  query,
  body,
}: CallAxiosInput) =>
  Axios({
    method: uriEndPoint.method,
    withCredentials: true,
    url: makeUrl(
      { ...uriEndPoint, pathParams, query },
      `${window.location.protocol}//${window.location.hostname}:3030`
    ),
    headers: {
      ...getDefaultHeaders(),
      // ...getDefaultCookies(),
      // ...uriEndPoint.headerProps,
    },
    data: body || {},
  });

interface CallApiProps {
  uriEndPoint: UriEndPoint;
  pathParams?: PathParams;
  query?: QueryParams;
  body?: BodyParams;
  apiHostUrl?: string;
  mock?: boolean;
}
/**
 * Extract the error messages from a failed API response.
 * @param {} apiResponse
 */
// const extractErrors = () => {};
/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 2.0.0
 * @author Manjot Singh
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callApi
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {String} APIParamaters.apiHostUrl - Use this to override the host url for calling external apis, example weather api https://api.openweathermap.org.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */

export function callApi<ResponseType>({
  uriEndPoint,
  pathParams,
  query,
  body,
  apiHostUrl,
  mock,
}: CallApiProps): Promise<ResponseType> {
  return new Promise((resolve, reject) => {
    let callGenericApi = callAxios;
    if (mock) callGenericApi = callMockios;
    callGenericApi({
      uriEndPoint,
      pathParams,
      query,
      body,
      apiHostUrl,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        // if (!err.response) {
        //   reject({ isServerUnreachable: true });

        //   return;
        // }
        if (err?.response?.status === 401) {
          // unauthorized
          if (err?.config?.url !== `${hostname()}/api/me`) {
            clearLocalStroage();
            window.location.replace("/");
          }
          reject(err.response);
        }
        reject(err);
      });
  });
}
