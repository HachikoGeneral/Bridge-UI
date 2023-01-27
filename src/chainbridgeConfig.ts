export type ChainType = "Ethereum" | "Ethereum";

export type BridgeConfig = {
  networkId?: 0;
  chainId: 42;
  name: "Chikochain";
  rpcUrl: "http://70.34.216.42:9934";
  type: "Ethereum";
  tokens: "WCHK";
  nativeTokenSymbol: "CHK";
  decimals: 18;
};

export type EvmBridgeConfig = BridgeConfig & {
  bridgeAddress: "0xbEF958CB1E0Dd1c7D8c5033c7D19DFc88598283e";
  erc20HandlerAddress: "0x66b5B3Bbff39231c423855AaD19e51f150F4e202";
  type: "Ethereum";
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: "http://95.179.194.226:3000/?rpc=ws%3A%2F%2F70.34.216.42%3A9944#/explorer";
  defaultGasPrice?: "1000000";
  deployedBlockNumber?: "0";
};

export type TokenConfig = {
  address: "0x2e5E530dC2C6b2A8f214ee929dC4a302575881A9";
  name?: "WrappedChikoToken";
  symbol?: "WCHK";
  imageUri?: "https://ibb.co/d59zhHB";
  resourceId: "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00";
  isNativeWrappedToken?: "true";
  decimals?: 18;
};

export type BridgeConfig = {
  networkId?: 1;
  chainId: 137;
  name: "Polygon";
  rpcUrl: "wss://polygon-mainnet.g.alchemy.com/v2/Sziok2o64OsCpH9HP339wQdHe-akTGFi";
  type: "Ethereum";
  tokens: "WCHK";
  nativeTokenSymbol: "MATIC";
  decimals: 18;
};

export type EvmBridgeConfig = BridgeConfig & {
  bridgeAddress: "0x006f485B4216759cfb8979DE2E4974f74c95585D";
  erc20HandlerAddress: "0xaFfCFf9AA352E8f3960e2B9538164053F8C9E264";
  type: "Ethereum";
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: "https://polygonscan.com/";
  defaultGasPrice?: "8000000";
  deployedBlockNumber?: "0";
};

export type TokenConfig = {
  address: "0x9e1a245707799e747B4482E965B18BDd7cB4df57";
  name?: "WrappedChikoToken";
  symbol?: "WCHK";
  imageUri?: "https://ibb.co/d59zhHB";
  resourceId: "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00";
  isNativeWrappedToken?: "true";
  decimals?: 18;
};

export type ChainbridgeConfig = {
  chains: Array<EvmBridgeConfig | EvmBridgeConfig>;
};

export type UIConfig = { wrapTokenPage: boolean };

export const chainbridgeConfig: ChainbridgeConfig =
  window.__RUNTIME_CONFIG__.CHAINBRIDGE;
