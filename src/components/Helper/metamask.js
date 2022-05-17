export const switchNetworkBSC = async (web3) => {
  try {
    await web3.provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x38" }],
    });
  } catch (error) {
    if (error.code === 4902) {
      try {
        await web3.provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x38",
              chainName: "BNB Smart Chain Mainnet",
              rpcUrls: ["https://bsc-dataseed3.defibit.io"],
              nativeCurrency: {
                name: "BNB",
                symbol: "BNB",
                decimals: 18,
              },
              blockExplorerUrls: ["https://bscscan.com/"],
            },
          ],
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }
};

export const switchNetworkMatic = async (web3) => {
  try {
    await web3.provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x89" }],
    });
  } catch (error) {
    if (error.code === 4902) {
      try {
        await web3.provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x89",
              chainName: "Polygon",
              rpcUrls: ["https://polygon-rpc.com/"],
              nativeCurrency: {
                name: "Matic",
                symbol: "Matic",
                decimals: 18,
              },
              blockExplorerUrls: ["https://www.polygonscan.com/"],
            },
          ],
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }
};

export const switchNetworkEth = async (web3) => {
  console.log(web3);
  try {
    await web3.provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x1" }],
    });
  } catch (error) {
    if (error.code === 4902) {
      try {
        await web3.provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x1",
              chainName: "Ethereum Mainnet",
              rpcUrls: ["https://mainnet.infura.io/v3/"],
              nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
              },
              blockExplorerUrls: ["https://etherscan.io"],
            },
          ],
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
