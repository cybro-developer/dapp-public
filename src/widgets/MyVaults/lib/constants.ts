import { MyVaultPeriod } from '../model/types';

export const myVaultsPeriods = [
  {
    key: MyVaultPeriod.Today,
    label: 'Today',
  },
  {
    key: MyVaultPeriod.Yesterday,
    label: 'Yesterday',
  },
  {
    key: MyVaultPeriod.Week,
    label: 'Last week',
  },
  {
    key: MyVaultPeriod.Month,
    label: 'Last month',
  },
  {
    key: MyVaultPeriod.Quarter,
    label: 'Last quarter',
  },
  {
    key: MyVaultPeriod.Year,
    label: 'Last year',
  },
];

export const myVaultsPeriodNames = myVaultsPeriods.reduce(
  (acc, value) => ({ ...acc, [value.key]: value.label }),
  {},
) as Record<MyVaultPeriod, string>;
