import { ResponsiveBar } from '@nivo/bar';
import { memo, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import StateHistoricDataResp from '../../models/StateHistoricDataResp';

type ChartProps = {
  data: StateHistoricDataResp[];
};

const Chart: React.FC<ChartProps> = memo(({ data }) => {
  const pastWeekData = data.slice(0, 7).reverse();
  const dataSetOptions = useMemo(
    () => [
      {
        name: 'total',
        displayName: 'Total',
      },
      {
        name: 'positive',
        displayName: 'Positive Cases',
      },
      { name: 'deathIncrease', displayName: 'Death Increase' },
    ],
    [],
  );
  const [currentDataSet, setCurrentDataSet] = useState('total');

  const selectModeOnClick = useCallback((mode: string) => {
    setCurrentDataSet(mode);
  }, []);

  return (
    <>
      <ButtonsContainer>
        {dataSetOptions.map((dataSet, i) => (
          <Button type="button" onClick={() => selectModeOnClick(dataSet.name)} key={i}>
            {dataSet.displayName}
          </Button>
        ))}
      </ButtonsContainer>
      <ChartContainer>
        <StyledResponsiveBar
          data={pastWeekData}
          keys={[currentDataSet]}
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
      </ChartContainer>
    </>
  );
});

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
`;

const StyledResponsiveBar = styled(ResponsiveBar)`
  height: 400px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export default Chart;
