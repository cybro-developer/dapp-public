import React from 'react';

import clsx from 'clsx';
import { FlyoutProps } from 'victory';

import { ComponentWithProps, DashboardBalance } from '@/shared/types';
import { Typography } from '@/shared/ui';
import { formatUserMoney } from '@/shared/utils';

import styles from './CustomTooltip.module.scss';

export const CustomTooltip: ComponentWithProps<FlyoutProps> = ({
  x,
  datum,
  y,
  className,
}) => {
  console.log(datum);
  const data = (datum as any)?.data as DashboardBalance;

  if (typeof x === 'undefined' || typeof y === 'undefined') {
    return '';
  }

  return (
    <foreignObject
      className={clsx(styles.root, className)}
      x={x - 75}
      y={y - 50}
      width={250}
      height={30}
      color={'red'}
    >
      <div className={styles.container}>
        <Typography order={3} className="text-white">
          Balance: ${formatUserMoney(data.balance_usd)}
        </Typography>
      </div>
    </foreignObject>
  );
};
