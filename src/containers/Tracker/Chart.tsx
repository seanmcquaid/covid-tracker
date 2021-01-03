import { ResponsiveBar } from '@nivo/bar';
import { memo, useCallback, useMemo, useState } from 'react';
import Button from '../../components/Button';

type ChartProps = {
  data: any[];
};

const Chart: React.FC<ChartProps> = memo(({ data }) => {
  const pastWeekData = data.slice(0, 7).reverse();
  const modes = useMemo(() => ['positive', 'deathIncrease', 'total'], []);
  const [currentMode, setCurrentMode] = useState('');

  const selectModeOnClick = useCallback((mode) => {
    setCurrentMode(mode);
  }, []);

  return (
    <div style={{ height: '500px' }}>
      <div>
        {modes.map((modeName, i) => (
          <Button type="button" onClick={() => selectModeOnClick(modeName)}>
            {modeName}
          </Button>
        ))}
      </div>
      <ResponsiveBar
        data={pastWeekData}
        keys={[currentMode.length > 0 ? currentMode : 'total']}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
});

export default Chart;
