export enum MyVaultPeriod {
  Today = 'today',
  Yesterday = 'yesterday',
  Week = 'week',
  Month = 'month',
  Quarter = 'quarter',
  Year = 'year',
}

export type MyVaultPeriodState = MyVaultPeriod | null;
