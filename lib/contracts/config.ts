export const NETWORK = {
  name: "Scroll Sepolia Testnet",
  chainId: 534351,
  rpcUrl: "https://sepolia-rpc.scroll.io/",
  blockExplorer: "https://sepolia.scrollscan.com/",
}

export const CONTRACTS = {
  DemoScrollToken: "0x6C176d28Ce1c6bE488ba989dE6Bae67B6A3B3157",
  MockImpactOracle: "0x3d92AD2ed2773e58C7D5fcDAf3e7fAF34E43054E",
  ContentVault: "0x0F7f3106594cBA402aE03f6BEb781663bB474AB1",
  UserRegistry: "0xFC9C2D839F3831c3431B5D454f3696EF85fd4Fc5",
  NetworkGraph: "0xd4EED03070E89BbC9F84f279d687F0bF48D10851",
} as const
