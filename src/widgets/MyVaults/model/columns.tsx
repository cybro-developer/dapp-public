import Image from 'next/image';

import { links, TableColumns } from '@/shared/lib';
import { InvestmentData } from '@/shared/types';
import { Group, Typography } from '@/shared/ui';
import { formatUserMoney } from '@/shared/utils';

import { myVaultsPeriodNames } from '../lib/constants';

import { MyVaultPeriodState } from './types';

export const createTableColumns = (period: MyVaultPeriodState) => {
  const tableColumns: TableColumns<InvestmentData> = [
    {
      headerName: 'Vault name',
      key: 'fund.name',
    },
    {
      headerName: 'Token',
      key: 'token.name',

      renderCell: (row) => (
        <Group className="gap-1.5">
          <Image
            width={24}
            height={24}
            src={row.token.icon ?? links.noImage}
            alt={row.token.name}
          />
          <Typography
            variant="poppins"
            order={2}
            weight="regular"
            className="text-white/40"
          >
            {row.token.name}
          </Typography>
        </Group>
      ),
    },
    {
      mountInvisible: true,
      headerName: 'Share count',
      key: 'share_count',

      headerProps: {
        className: 'text-right',
      },
      cellProps: {
        className: 'text-right',
      },

      renderCell: (row) =>
        row.share_count ? formatUserMoney(row.share_count, 6, 6) : '-',
    },
    {
      headerName: 'Balance in token',
      key: 'equity_in_token',

      headerProps: {
        className: 'text-right',
      },
      cellProps: {
        className: 'text-right',
      },

      renderCell: (row) =>
        row.equity_in_token ? formatUserMoney(row.equity_in_token, 6, 6) : '-',
    },
    {
      headerName: 'Balance in USD',
      key: 'equity_currency',

      headerProps: {
        className: 'text-right',
      },
      cellProps: {
        className: 'text-right',
      },

      renderCell: (row) =>
        row.equity_currency
          ? `$${formatUserMoney(row.equity_currency, 2, 2)}`
          : '-',
    },
    {
      headerName: `Profit (${period ? myVaultsPeriodNames[period] : 'All time'})`,
      key: 'profit',

      headerProps: {
        className: 'text-right',
      },
      cellProps: {
        className: 'text-right',
      },

      renderCell: (row) =>
        row.profit ? `${formatUserMoney(row.profit, 6, 6)}` : '-',
    },
    {
      headerName: `Profitability (${period ? myVaultsPeriodNames[period] : 'All time'})`,
      key: 'profitability',

      headerProps: {
        className: 'text-right',
      },
      cellProps: {
        className: 'text-right',
      },

      renderCell: (row) =>
        row.profitability ? `${row.profitability}%` : 'n/a',
    },
  ] as const;

  return tableColumns;
};
