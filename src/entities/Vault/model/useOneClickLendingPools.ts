import { ChainId } from '@lifi/sdk';
import { useQuery } from '@tanstack/react-query';

import { getProviderByChainId } from '@/entities/LiFi';
import { createTokenContract, createVaultContract } from '@/shared/lib';
import { FundType } from '@/shared/types';

export type IOneClickLendingPool = {
  name: string;
  value: number;
};

export const useOneClickLendingPools = (
  vaultAddress: string,
  chainId: ChainId,
) => {
  const query = useQuery({
    enabled: Boolean(vaultAddress),
    queryFn: async () => {
      try {
        const provider = getProviderByChainId(chainId);

        if (!provider) {
          throw new Error('useOneClickLendingPools() provider not found');
        }

        const vaultContract = createVaultContract(
          vaultAddress,
          FundType.oneClick,
          provider,
        );

        const addresses = await vaultContract.getPools();

        const pools: Array<IOneClickLendingPool> = [];
        for (const tokenAddress of addresses) {
          const tokenContract = createTokenContract(tokenAddress, provider);

          const name = (await tokenContract.name()).replace('OneClick ', '');
          const value =
            (await vaultContract.lendingShares(tokenAddress)).toNumber() / 100;

          pools.push({
            name,
            value,
          });
        }

        return pools;
      } catch (e) {
        return [];
      }
    },
    queryKey: ['OneClickLendingPools', vaultAddress, chainId],
  });

  return query;
};
