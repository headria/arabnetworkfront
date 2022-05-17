import callApi, { postApi } from "./apiCall";

export const getUDIDState = async (str) => {
  const request = await callApi("api/udid/one/" + str);
  const { data } = request;

  if (data?.app_version === 2) {
    if (data?.status === true) return "Signed2";
  }
  if (data?.status === true) return "Signed";
  if (data?.status === false) return "Pending";
  if (!data) return "Unregistred";
};

export const submitUDID = async (str) => {
  const body = {
    udid: str,
    status: false,
  };
  const request = await postApi("api/udid/one/add", body);
  const { data } = request;

  if (!data?.udid) return false;

  return true;
};
