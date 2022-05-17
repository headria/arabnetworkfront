import axios from "axios";

const callApi = (destination, baseURL = "https://udidapi.abcdarab.com") => {
  const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {},
  });

  return new Promise((resolve, reject) => {
    instance
      .get(destination)
      .then((res) => {
        if (res.status === 200) return resolve(res);
        return reject(`error code: ${res.status}`);
      })
      .catch((e) => {
        return reject(`[apiCall] Error - ${e}`);
      });
  });
};
export const postApi = (
  destination,
  data,
  baseURL = "https://udidapi.abcdarab.com"
) => {
  const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {},
  });

  return new Promise((resolve, reject) => {
    instance
      .post(destination, data)
      .then((res) => {
        if (res.status === 200) return resolve(res);
        return reject(`error code: ${res.status}`);
      })
      .catch((e) => {
        return reject(`[apiCall] Error - ${e}`);
      });
  });
};

export default callApi;
