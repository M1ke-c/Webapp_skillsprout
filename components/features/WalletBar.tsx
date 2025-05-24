"use client";
import { usePrivy } from '@privy-io/react-auth';
import { useAccount } from "@starknet-react/core";
import { useMemo } from "react";

function WalletConnected() {
  const { user, logout } = usePrivy();
  const { address } = useAccount();

  const shortenedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  return (
    <div className="flex items-center justify-between p-4 bg-[#1a1a1a]/80 backdrop-blur-xl border border-teal-500/10 rounded-lg shadow-xl">
      <div className="flex items-center">
        <span className="font-medium text-teal-400 text-sm">Connected:</span>
        <span className="ml-2 bg-[#2d2d2d] text-teal-400 px-3 py-1 rounded-full font-mono text-xs border border-teal-500/20">
          {shortenedAddress || user?.wallet?.address}
        </span>
      </div>
      <button
        onClick={logout}
        className="px-3 py-1 bg-[#2d2d2d] text-red-400 rounded-lg hover:bg-red-500/10 transition-all duration-300 border border-red-500/20 text-xs"
      >
        Disconnect
      </button>
    </div>
  );
}

function ConnectWallet() {
  const { login, ready } = usePrivy();

  if (!ready) {
    return (
      <div className="p-4 bg-[#1a1a1a]/80 backdrop-blur-xl border border-teal-500/10 rounded-lg shadow-xl">
        <div className="animate-pulse bg-[#2d2d2d] h-6 w-24 rounded"></div>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={login}
        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 
                 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-teal-500/20"
      >
        Sign In
      </button>
      <button
        onClick={login}
        className="px-4 py-2 bg-[#2d2d2d] text-white rounded-lg
                 border border-teal-500/20 hover:bg-teal-500/10 
                 transition-all duration-300 text-sm font-medium shadow-lg"
      >
        Create Account
      </button>
    </div>
  );
}

export default function WalletBar() {
  const { ready, authenticated } = usePrivy();
  const { address } = useAccount();

  if (!ready) {
    return (
      <div className="w-full max-w-xs mx-auto">
        <div className="p-4 bg-[#1a1a1a]/80 backdrop-blur-xl border border-teal-500/10 rounded-lg shadow-xl">
          <div className="animate-pulse bg-[#2d2d2d] h-6 w-24 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      {authenticated || address ? <WalletConnected /> : <ConnectWallet />}
    </div>
  );
}
