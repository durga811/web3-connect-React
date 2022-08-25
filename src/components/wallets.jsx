import React from "react";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

import { Button, Image, Wrapper, Disconnect } from "./styles";
const coinbase = new WalletLinkConnector({
  url: "https://mainnet.infura.io/v3/e6e8ff88e61c48f5a93af1f285b5731c",
  appName: "wallet-web3react",
  //   darkMode: true,
});
const walletConnect = new WalletConnectConnector({
  rpcUrl: "https://mainnet.infura.io/v3/e6e8ff88e61c48f5a93af1f285b5731c",
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
const metamask = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
const Wallets = () => {
  const { activate, deactivate } = useWeb3React();
  return (
    <Wrapper>
      <Button
        onClick={() => {
          activate(coinbase);
        }}
      >
        <Image>
          <img
            src="https://res.cloudinary.com/durga811/image/upload/v1661444958/coinbase_akps31.png"
            alt=""
            style={{
              width: "40%",
              height: "auto",
              backgroundColor: "transparent",
            }}
          />
        </Image>{" "}
        Coinbase Wallet
      </Button>
      <Button
        onClick={() => {
          activate(walletConnect);
        }}
      >
        <Image>
          <img
            src="https://res.cloudinary.com/durga811/image/upload/v1661376765/WalletConnect_ca5oa3.png"
            alt=""
            style={{
              width: "60%",
              height: "auto",
              backgroundColor: "transparent",
            }}
          />
        </Image>{" "}
        Wallet connect
      </Button>
      <Button
        onClick={() => {
          activate(metamask);
        }}
      >
        <Image>
          <img
            src="https://res.cloudinary.com/durga811/image/upload/v1661376765/Metamask_rasaf2.png"
            alt=""
            style={{
              width: "65%",
              height: "auto",
              backgroundColor: "transparent",
            }}
          />
        </Image>{" "}
        Metamask
      </Button>
      <Disconnect onClick={deactivate}>Disconnect</Disconnect>
    </Wrapper>
  );
};

export default Wallets;
