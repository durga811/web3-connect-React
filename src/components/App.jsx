import React from "react";

import Navbar from "./navbar";
import Wallets from "./wallets";
import { useWeb3React } from "@web3-react/core";
const App = () => {
  const { active, chainId, account } = useWeb3React();
  return (
    <>
      <Navbar infos={{ account, chainId, active }} />
      <Wallets />
    </>
  );
};

export default App;
