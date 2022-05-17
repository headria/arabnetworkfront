import axios from "axios";

const callApi = (destination, baseURL = "https://api.abcdarab.com/api/v1") => {
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
const postApi = (
  destination,
  data,
  baseURL = "https://api.abcdarab.com/api/v1"
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

export const getSymbolPrice = async (symbol) => {
  try {
    if (!symbol) return 0;
    const request = await callApi("/getPriceList1H?symbol=" + symbol);
    if (!request?.data) return 0;
    const { data } = request.data;

    return data?.price || 0;
  } catch {
    return 0;
  }
};

export const getArabcoinPrice = async (symbol) => {
  try {
    if (!symbol)
      return {
        arabCoin: 0,
        coinPrice: 0,
        coinPricePerArabCoin: 0,
        networkAddress: null,
      };
    const request = await callApi("/arabcoin/getprice?symbol=" + symbol);
    if (!request?.data)
      return {
        arabCoin: 0,
        coinPrice: 0,
        coinPricePerArabCoin: 0,
        networkAddress: null,
      };
    const { data } = request.data;

    return {
      arabCoin: data?.arabCoin || 0,
      coinPrice: data?.coinPrice || 0,
      coinPricePerArabCoin: data?.coinPricePerArabCoin || 0,
      networkAddress: data?.networkAddress || null,
    };
  } catch {
    return {
      arabCoin: 0,
      coinPrice: 0,
      coinPricePerArabCoin: 0,
      networkAddress: null,
    };
  }
};

export const getBalancePerAddress = async (address) => {
  try {
    if (!address)
      return {
        balance: 0,
        price: 0,
      };
    const request = await callApi(
      "/arabcoin/getbalanceperaccount?address=" + address
    );
    if (!request?.data)
      return {
        balance: 0,
        price: 0,
      };
    const { data } = request.data;

    return {
      balance: data?.balance || 0,
      price: data?.price || 0,
    };
  } catch {
    return {
      balance: 0,
      price: 0,
    };
  }
};

/**
 * {
  "from":"0x55140c7Fd926Ef5fC9467aBe40Af73eD60B2d991",
  "to":"0x55140c7Fd926Ef5fC9467aBe40Af73eD60B2d991",
  "network":"ETH",
  "amount_network":"0.05",
  "amount_arb":"3858",
  "hash":"0x55140c7Fd926Ef5fC9467aBe40Af73eD60B2d991"
}
 */
export const newArabcoinRequest = async (
  from = "",
  to = "",
  network = "",
  amount_network = "",
  amount_arb = "",
  hash = ""
) => {
  try {
    const request = await postApi("/arabcoin/buy", {
      from,
      to,
      network,
      amount_network,
      amount_arb,
      hash,
    });
    if (request?.data) return true;
    else return false;
  } catch {
    return false;
  }
};
