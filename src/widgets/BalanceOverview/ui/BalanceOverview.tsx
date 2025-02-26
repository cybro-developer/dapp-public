import React from 'react';

import { BalanceChart } from '@/entities/BalanceChart/ui';
import { Group, PeriodTabs, Stack, Title } from '@/shared/ui';

import { balanceOverviewPeriods } from '../lib/constants';
import { useBalanceOverview } from '../model/useBalanceOverview';

export const BalanceOverview = () => {
  const { balanceData, isLoading, period, setPeriod } = useBalanceOverview();

  return (
    <Stack className="gap-5">
      <Group className="justify-center sm:justify-between gap-y-3">
        <Title order={3} uppercase className="text-center sm:text-left">
          Balance Overview
        </Title>
        <PeriodTabs
          periods={balanceOverviewPeriods}
          period={period}
          onPeriodChange={setPeriod}
        />
      </Group>
      <BalanceChart data={balanceData} isLoading={isLoading} />
    </Stack>
  );
};
