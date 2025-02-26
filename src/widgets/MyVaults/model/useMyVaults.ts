import React, { useState } from 'react';

import dayjs from 'dayjs';

import { QueryKey } from '@/shared/const';
import { useTable } from '@/shared/lib';
import { useFundsInvestmentsApiV1DashboardInvestmentsGet } from '@/shared/types';

import { getPeriodRange } from '../lib/utils';

import { createTableColumns } from './columns';
import { MyVaultPeriod, MyVaultPeriodState } from './types';

interface UseTransactionsProps {
  walletAddress: string;
  limit?: number;
}

export const useMyVaults = ({
  walletAddress,
  limit = 20,
}: UseTransactionsProps) => {
  const [period, setPeriod] = useState<MyVaultPeriodState>(null);
  const { since, to } = getPeriodRange(period);

  const tableColumns = React.useMemo(
    () => createTableColumns(period),
    [period],
  );

  const fromDate = dayjs(since * 1000).format('YYYY-MM-DD');
  const toDate = dayjs(to * 1000).format('YYYY-MM-DD');

  const tableProps = useTable({
    name: 'my_investments',
    columns: tableColumns,
    limit,
  });

  const { data, isFetching, isPending, isLoading } =
    useFundsInvestmentsApiV1DashboardInvestmentsGet(
      {
        address: walletAddress,
        currency: 'USD',
        offset: tableProps.offset,
        limit: tableProps.limit,
        from_date: fromDate,
        to_date: toDate,
      },
      {
        query: {
          enabled: Boolean(walletAddress),
          queryKey: [
            QueryKey.MyVaults,
            walletAddress,
            tableProps.offset,
            tableProps.limit,
            toDate,
            fromDate,
          ],
          placeholderData: (previousData) => previousData,
        },
      },
    );

  const vaults = data?.data?.data ?? [];
  const totalPages = data?.data?.page_count ?? 0;
  const total = data?.data?.total_count ?? 0;

  return {
    vaults,
    isLoading,
    isFetching: isFetching || isPending,
    totalPages,
    tableProps,
    total,
    period,
    setPeriod,
  };
};
