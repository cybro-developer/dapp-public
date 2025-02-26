export interface VaultInvestmentProps {
  address: string;
  vaultId: number;
  vaultAddress: string;
}

export enum VaultInvestmentPeriod {
  Today = 'today',
  Week = 'week',
  Month = 'month',
  Year = 'year',
  All = 'all',
}
