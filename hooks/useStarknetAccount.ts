import { usePrivy } from '@privy-io/react-auth';
import { useAccount } from '@starknet-react/core';

export function useStarknetAccount() {
  const { user } = usePrivy();
  const { address, isConnected } = useAccount();

  return { account: address, isConnected };
} 