window.__RUNTIME_CONFIG__ = {
  INDEXER__URL: http://localhost:3000,
  CHAINBRIDGE: {
    chains: [
      {
        domainId: 0,
        networkId: 42,
        name: Chikochain,
        decimals: 18,
        bridgeAddress: 0xbEF958CB1E0Dd1c7D8c5033c7D19DFc88598283e,
        erc20HandlerAddress: 0x66b5B3Bbff39231c423855AaD19e51f150F4e202,
        rpcUrl: http://70.34.216.42:9934,
        type: Ethereum,
        nativeTokenSymbol: CHK,
        tokens: [
          {
            address: 0x2e5E530dC2C6b2A8f214ee929dC4a302575881A9,
            name: Wrapped Chiko Token,
            symbol: WCHK,
            imageUri: https://ibb.co/4Mdk1Bj,
            resourceId:
              0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00,
          },
        ],
      },
      {
        domainId: 1,
        networkId: 137,
        name: Polygon,
        decimals: 18,
        bridgeAddress: 0x006f485B4216759cfb8979DE2E4974f74c95585D,
        erc20HandlerAddress: 0xaFfCFf9AA352E8f3960e2B9538164053F8C9E264,
        rpcUrl: wss://polygon-mainnet.g.alchemy.com/v2/Sziok2o64OsCpH9HP339wQdHe-akTGFi,
        type: Ethereum,
        nativeTokenSymbol: CHK,
        tokens: [
          {
            address: 0x9e1a245707799e747B4482E965B18BDd7cB4df57,
            name: Wrapped Chiko Token,
            symbol: WCHK,
            imageUri: https://ibb.co/4Mdk1Bj,
            resourceId:
              0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00,
          },
        ],
      },
    ],
  },
};
