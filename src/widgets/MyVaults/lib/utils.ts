import dayjs from 'dayjs';

import { MyVaultPeriod, MyVaultPeriodState } from '../model/types';

export const getPeriodRange = (
  period: MyVaultPeriodState,
): { since: number; to: number } => {
  const now = dayjs().startOf('day');

  let since: number = 0;
  const to = now.endOf('day').unix();

  if (!period) {
    return { since, to };
  }

  switch (period) {
    case MyVaultPeriod.Today:
      since = now.unix();
      break;
    case MyVaultPeriod.Yesterday:
      since = now.add(-1, 'day').unix();
      break;
    case MyVaultPeriod.Week:
      since = now.add(-1, 'week').unix();
      break;
    case MyVaultPeriod.Month:
      since = now.add(-1, 'month').unix();
      break;
    case MyVaultPeriod.Quarter:
      since = now.add(-3, 'month').unix();
      break;
    case MyVaultPeriod.Year:
      since = now.add(-1, 'year').unix();
      break;
    default:
      throw new Error('Invalid period tab');
  }

  return {
    since,
    to,
  };
};
