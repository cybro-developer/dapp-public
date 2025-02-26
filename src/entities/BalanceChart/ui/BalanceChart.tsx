import React, { Dispatch, SetStateAction } from 'react';

import clsx from 'clsx';
import dayjs from 'dayjs';
import {
  VictoryAxis,
  VictoryChart,
  VictoryContainer,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
} from 'victory';

import { CustomTooltip } from '@/entities/BalanceChart/ui/components';
import { ComponentWithProps, DashboardBalance } from '@/shared/types';
import { Loader, Text } from '@/shared/ui';
import { formatUserMoney } from '@/shared/utils';

import styles from './BalanceChart.module.scss';

type BalanceChartProps = {
  data: DashboardBalance[];
  isLoading?: boolean;
};

export const BalanceChart: ComponentWithProps<BalanceChartProps> = ({
  data,
  isLoading = false,
  className,
}) => {
  const [width, setWidth] = React.useState<number>();
  const [chartWidth, setChartWidth] = React.useState(0);
  const chartRef = React.useRef<HTMLDivElement>(null);
  const [hoveredTransaction, setHoveredTransaction] = React.useState<
    string | null
  >(null);

  const updateWidth = () => {
    setWidth(window.innerWidth);

    if (chartRef.current) {
      setChartWidth(chartRef.current.offsetWidth);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);

    if (chartRef.current) {
      updateWidth();
    }

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [chartRef.current?.offsetWidth]);

  // Process the data for the chart
  const chartData = data.map((item) => ({
    x: dayjs(item.date).format('DD MMM'),
    y: parseFloat(item.balance_usd),
    data: item,
  }));

  return (
    <div ref={chartRef} className={clsx(styles.root, className)}>
      {isLoading ? (
        <Loader className={styles.loader} />
      ) : (
        <React.Fragment>
          {chartWidth && chartData.length ? (
            <VictoryChart
              theme={VictoryTheme.material}
              containerComponent={<VictoryContainer />}
              width={chartWidth - 7 * 2}
              height={width || 0 >= 1100 ? 450 : 350}
              domainPadding={{ x: 30, y: 10 }}
            >
              <VictoryAxis
                tickFormat={(t) => t}
                tickCount={5}
                style={{
                  axis: { stroke: 'transparent' },
                  ticks: { stroke: 'transparent' },
                  grid: { stroke: 'transparent' },
                }}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={(x) => `$${formatUserMoney(x, 2)}`}
                style={{
                  grid: {
                    stroke: 'rgba(255, 255, 255, 0.09)',
                    strokeDasharray: '3,3',
                  },
                  axis: { stroke: 'transparent' },
                  ticks: { stroke: 'transparent' },
                }}
              />
              <VictoryLine
                data={chartData}
                style={{
                  data: { stroke: '#F9E727' },
                }}
              />
              <VictoryScatter
                data={chartData}
                size={5}
                style={{
                  data: {
                    fill: (d) =>
                      hoveredTransaction &&
                      d.datum.data.date === hoveredTransaction
                        ? '#FFD700'
                        : '#24252E',
                    stroke: '#F9E727',
                    strokeWidth: 3,
                  },
                }}
                labels={({ datum }) => ''}
                labelComponent={
                  <VictoryTooltip flyoutComponent={<CustomTooltip />} />
                }
                events={[
                  {
                    target: 'data',
                    eventHandlers: {
                      onMouseOver: () => [
                        {
                          target: 'data',
                          mutation: (props) => {
                            setHoveredTransaction(props.datum.data.date);
                          },
                        },
                        {
                          target: 'labels',
                          mutation: () => ({ active: true }),
                        },
                      ],
                      onMouseOut: () => [
                        {
                          target: 'data',
                          mutation: () => {
                            setHoveredTransaction(null);
                          },
                        },
                        {
                          target: 'labels',
                          mutation: () => ({ active: false }),
                        },
                      ],
                    },
                  },
                ]}
              />
            </VictoryChart>
          ) : (
            <Text className={styles.emptyText}>No info for period</Text>
          )}
        </React.Fragment>
      )}
    </div>
  );
};
