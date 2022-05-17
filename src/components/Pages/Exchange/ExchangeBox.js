import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api, useWeb3Transfer } from "react-moralis";
import web3utils from "web3-utils";

import imgExchange from "../../../assets/images/exchange.png";
import {
  switchNetworkBSC,
  switchNetworkEth,
  switchNetworkMatic,
} from "../../Helper/metamask";
import { t } from "i18next";
import {
  getArabcoinPrice,
  getBalancePerAddress,
  getSymbolPrice,
  newArabcoinRequest,
} from "../../Helper/arabApis";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

/**
 * TODO - Check swap for if price is change
 * TODO - add new networks
 * TODO - reduse fees of eth from max
 */

const chainIds = {
  matic: "0x89",
  eth: "0x1",
  bsc: "0x38",
};

const ExchangeBox = ({ dark, lang }) => {
  const { fetch, error, isFetching } = useWeb3Transfer();
  const [cookies, setCookie, removeCookie] = useCookies(["selectedNetwork"]);

  const [chain, setChain] = useState(cookies.selectedNetwork || "eth");

  const { account } = useMoralisWeb3Api();
  const {
    authenticate,
    isAuthenticated,
    user,
    web3,
    logout,
    enableWeb3,
    chainId,
    network,

    isInitializing,
    isLoggingOut,
    isAuthenticating,
  } = useMoralis();
  const [connectButtonState, setConnectButtonState] = useState(
    "success" | "waiting" | "error"
  );

  const [arabcoinBalance, setArabcoinBalance] = useState({
    loading: false,
    balance: 0,
    arabcoinPrice: 0,
  });
  const [networkAmount, setNetworkAmount] = useState(0);
  const [connectText, setConnectText] = useState(t("exchange.connect"));
  const [arabCoinDetail, setArabCoinDetail] = useState({
    arabCoin: 0,
    coinPrice: 0,
    coinPricePerArabCoin: 0,
    networkAddress: null,
  });
  const [swapButtonDisableState, setSwapDisableState] = useState(true);
  const [swapButtonLoading, setSwapButtonLoading] = useState(false);

  const [dropdownWallet, setDropdownWallet] = useState(false);
  const [arabBalance, setArabBalance] = useState(0);
  const [balance, setBalance] = useState(0);
  const [loadingBalance, setLoadingBalance] = useState(0);
  const handleSelectNetwork = (selectNetwork) => {
    setChain(selectNetwork);
    setDropdownWallet(false);
    if (selectNetwork === "eth") switchNetworkEth(web3);
    if (selectNetwork === "bsc") switchNetworkBSC(web3);
    if (selectNetwork === "matic") switchNetworkMatic(web3);
    setCookie("selectedNetwork", selectNetwork);
  };
  const getBalance = async () => {
    if (!user) {
      setBalance(0);
      setLoadingBalance(false);
    }
    setLoadingBalance(true);
    const nativeBalance = await account.getNativeBalance({
      chain: chain.toLowerCase(),
    });
    setBalance(web3utils.fromWei(nativeBalance.balance));
    setLoadingBalance(false);
  };
  const handleGetArabCoinBalance = async () => {
    setArabcoinBalance({
      loading: true,
      ...arabcoinBalance,
    });
    if (isAuthenticated && user) {
      const address = user.attributes.ethAddress;
      // const address = "0xD73c57e85e773417f6DaEF1390C79972FeE3C7DB";
      const getArabcoinBalance = await getBalancePerAddress(address);
      setArabcoinBalance({
        loading: false,
        balance: getArabcoinBalance.balance,
        arabcoinPrice: getArabcoinBalance.price,
      });
    } else {
      setArabcoinBalance({
        loading: false,
        ...arabcoinBalance,
      });
    }
  };

  useEffect(() => {
    (async () => {
      if (isAuthenticated && user) {
        setLoadingBalance(true);
        await enableWeb3();

        setConnectButtonState("error");
        setConnectText(t("exchange.disconnect"));
        const getArabCoinPrice = await getArabcoinPrice(
          chain.toLowerCase() === "bsc" ? "BNB" : chain.toUpperCase()
        );
        setArabCoinDetail(getArabCoinPrice);
        getBalance();
        setLoadingBalance(false);
        setSwapDisableState(false);
        await handleGetArabCoinBalance();
      } else {
        await enableWeb3();
        setSwapDisableState(true);

        setArabCoinDetail({
          arabCoin: 0,
          coinPrice: 0,
          coinPricePerArabCoin: 0,
          networkAddress: null,
        });
        setBalance(0);
        setArabBalance(0);
      }
    })();
  }, [isAuthenticated, user, chain]);
  useEffect(() => {
    const getCurrentChainId = chainIds[chain];
    if (getCurrentChainId !== chainId) {
      if (chainId === "0x1") handleSelectNetwork("eth");
      if (chainId === "0x89") handleSelectNetwork("matic");
      if (chainId === "0x38") handleSelectNetwork("bsc");
    }
  }, [chainId]);
  useEffect(() => {
    if (!arabCoinDetail?.networkAddress) {
      setSwapDisableState(true);
    } else {
      setSwapDisableState(false);
    }
  }, [arabCoinDetail]);

  const handleErrorOccured = (error = "error_message") => {
    toast.error(t(`exchange.${error}`), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      rtl: true,
    });
    setSwapButtonLoading(false);
    setSwapDisableState(false);
  };
  const handleSwapButton = async (e) => {
    e.preventDefault();
    console.log({ chainId, network });
    try {
      setSwapButtonLoading(true);
      setSwapDisableState(true);
      console.log({
        tt: web3utils.toWei(networkAmount.toFixed(18).toString(), "ether"),
      });
      const data = await fetch({
        params: {
          amount: web3utils.toWei(networkAmount.toFixed(18).toString()),
          receiver: arabCoinDetail.networkAddress,
          type: "native",
        },
        onError: (e) => {
          if (e?.code === 4001) handleErrorOccured("reject_message");
          else handleErrorOccured();
        },
      });
      if (!data) {
        return;
      }

      await newArabcoinRequest(
        user.attributes.ethAddress,
        arabCoinDetail.networkAddress,
        chain.toUpperCase(),
        networkAmount,
        arabBalance,
        data?.hash || ""
      );
      toast.success(t("exchange.success_message"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        rtl: true,
      });
      setSwapButtonLoading(false);
      setSwapDisableState(false);

      setArabBalance(0);
    } catch (e) {
      if (e?.code === 4001) handleErrorOccured("reject_message");
    }
  };
  // TODO - pervent user from swap with fake price
  const handleUpdateArabcoinPrice = async () => {
    if (isAuthenticated && user) {
      const getArabCoinPrice = await getArabcoinPrice(
        chain.toLowerCase() === "bsc" ? "BNB" : chain.toUpperCase()
      );

      const getDiff = Math.abs(
        arabCoinDetail.coinPricePerArabCoin -
          getArabCoinPrice.coinPricePerArabCoin
      );
    }
  };

  const handleSelectPercentage = (value) => {
    if (balance > 0 && arabCoinDetail.arabCoin > 0) {
      const newBalance = (value / 100) * balance;
      setNetworkAmount(newBalance);

      setArabBalance(newBalance * arabCoinDetail.coinPricePerArabCoin);
    }
  };
  const handleNetworkBalanceChange = (value) => {
    if (arabCoinDetail.arabCoin > 0) {
      const newBalance = value;
      setNetworkAmount(newBalance);

      setArabBalance(newBalance * arabCoinDetail.coinPricePerArabCoin);
    }
  };
  const handleArabCoinChange = (value) => {
    if (value === 0 || value === undefined) {
      setNetworkAmount(0);
      setArabBalance(0);
    }
    if (value > 0 && arabCoinDetail.arabCoin > 0) {
      const newBalance = value / arabCoinDetail.coinPricePerArabCoin;
      setNetworkAmount(newBalance);

      setArabBalance(value);
    }
  };

  const checkLogin = async (network = "eth") => {
    setConnectButtonState("waiting");
    setChain(network);
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: "Login for ArabGateWallet",
        onError: (e) => {
          setConnectButtonState("success");
        },
        onSuccess: async (user) => {
          await enableWeb3();

          handleSelectNetwork(network);
        },
      });
    } else {
      setConnectButtonState("waiting");
      await logout();
      setConnectText(t("exchange.connect"));
      setConnectButtonState("success");
    }
  };

  return (
    <>
      <div
        className={`exchange-box pb-100
                ${lang ? "exchange-box-rtl" : ""}
                ${dark ? "exchange-box-dark" : ""}
            `}
      >
        <div className="container">
          <div className="box-inner">
            <form action="#" method="post" className="row align-items-center">
              <div className="col-lg-6">
                <div className="dropdown-group mb-3">
                  <div className="group-inner">
                    {/* success -- waiting -- error */}
                    <button
                      type="button"
                      className={"btn  btn-drop  " + connectButtonState}
                      onClick={() => checkLogin(chain)}
                    >
                      {connectText}
                    </button>
                    <button
                      type="button"
                      className="btn btn-drop waiting"
                      disabled={!isAuthenticated}
                      onClick={() => setDropdownWallet(!dropdownWallet)}
                    >
                      {t(`exchange.${chain}`)}
                      <i className="fas fa-caret-down"></i>
                    </button>
                    <div
                      className={`wallet-menu ${
                        dropdownWallet ? "active" : ""
                      }`}
                    >
                      <div
                        className="item"
                        onClick={() => handleSelectNetwork("eth")}
                      >
                        {t("exchange.eth")}
                      </div>
                      <div
                        className="item"
                        onClick={() => handleSelectNetwork("matic")}
                      >
                        {t("exchange.matic")}
                      </div>
                      <div
                        className="item"
                        onClick={() => handleSelectNetwork("bsc")}
                      >
                        {t("exchange.bsc")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    value={networkAmount}
                    min="0"
                    step="0.01"
                    lang="en"
                    onChange={(e) => handleNetworkBalanceChange(e.target.value)}
                  />
                  <div className="input-group-append">
                    {loadingBalance ? (
                      <div className="load"></div>
                    ) : (
                      <>
                        <div className="coin"> {t(`exchange.${chain}`)}</div>
                        <div className="balance">
                          {t("exchange.balance")}: {balance}{" "}
                          <span className="badge"></span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="between-icon">
                  <i className="fas fa-exchange"></i>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    min={0}
                    value={arabBalance}
                    lang="en"
                    step={0.01}
                    onChange={(e) => handleArabCoinChange(e.target.value)}
                  />
                  <div className="input-group-append">
                    {arabcoinBalance.loading ? (
                      <div className="load"></div>
                    ) : (
                      <>
                        <div className="coin">ArabCoin</div>
                        <div className="balance">
                          {t("exchange.balance")}: {arabcoinBalance.balance}{" "}
                          <span className="badge"></span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="percentage-group mb-3">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadioInline1"
                      name="customRadioInline"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadioInline1"
                      onClick={() => handleSelectPercentage(50)}
                    >
                      50%
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadioInline2"
                      name="customRadioInline"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadioInline2"
                      onClick={() => handleSelectPercentage(75)}
                    >
                      75%
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadioInline3"
                      name="customRadioInline"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadioInline3"
                      onClick={() => handleSelectPercentage(90)}
                    >
                      90%
                    </label>
                  </div>
                </div>
                <div className="button-group">
                  <button
                    type="submit"
                    className={
                      "main-btn " + `${swapButtonLoading ? "loading" : ""}`
                    }
                    disabled={swapButtonDisableState}
                    onClick={handleSwapButton}
                  >
                    {t("exchange.support")}
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="exchange-image">
                  <div className="img-inner">
                    <img src={imgExchange} alt="img-name" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeBox;
