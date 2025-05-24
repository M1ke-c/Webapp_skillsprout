import { sepolia } from "@starknet-react/chains";

// RPC URLs
export const RPC_URLS = {
  SEPOLIA: "https://starknet-sepolia.public.blastapi.io",
  // Puedes agregar más RPC URLs aquí para otras redes
};

// Configuración de la red Sepolia
export const sepoliaChain = {
  ...sepolia,
  rpcUrls: {
    default: {
      http: [RPC_URLS.SEPOLIA],
    },
    public: {
      http: [RPC_URLS.SEPOLIA],
    },
  },
};

// Configuración de las redes disponibles
export const AVAILABLE_NETWORKS = [sepoliaChain];

// Red por defecto
export const DEFAULT_NETWORK = sepoliaChain; 