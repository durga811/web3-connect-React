import React from "react";
import { ConnectionInfo, WalletStatus } from "./styles";

const Navbar = ({ infos }) => {
  return (
    <>
      <WalletStatus>
        <ConnectionInfo>Network Id: {infos.chainId}</ConnectionInfo>
        <ConnectionInfo>Account: {infos.account}</ConnectionInfo>
        <ConnectionInfo>
          status: {infos.active ? "connected" : "Not connect"}
        </ConnectionInfo>
      </WalletStatus>
    </>
  );
};

export default Navbar;
