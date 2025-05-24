"use client";
import { ReactNode } from "react";
import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  jsonRpcProvider,
  voyager,
} from "@starknet-react/core";

// Configuración de la red Sepolia
const sepoliaChain = {
  ...sepolia,
  rpcUrls: {
    default: {
      http: ["https://starknet-sepolia.public.blastapi.io"],
    },
    public: {
      http: ["https://starknet-sepolia.public.blastapi.io"],
    },
  },
};

export function StarknetProvider({ children }: { children: ReactNode }) {
  console.log("StarknetProvider rendering");
  
  return (
    <StarknetConfig
      chains={[sepoliaChain]}
      provider={jsonRpcProvider({
        rpc: (chain) => ({
          nodeUrl: chain.rpcUrls.default.http[0],
        }),
      })}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
