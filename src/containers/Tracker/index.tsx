import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../components/Dropdown';
import LoadingSpinner from '../../components/LoadingSpinner';
import H1 from '../../components/Typography/H1';
import useHistoricStateData from '../../hooks/useHistoricStateData';
import Chart from './Chart';
import stateAbbreviations from './stateAbbreviations';

const Tracker: React.FC = () => {
  const states = useMemo(() => [...stateAbbreviations], []);
  const [selectedState, setSelectedState] = useState(states[0]);
  const { response, isLoading } = useHistoricStateData(selectedState);

  const onChange = useCallback((event?) => {
    const value = event.target.value;
    setSelectedState(value);
  }, []);

  return (
    <PageContainer>
      <Header>
        <H1>Weekly State Data - {selectedState}</H1>
      </Header>
      <Main>
        <Dropdown onChange={onChange} options={states} value={selectedState} />
        {isLoading ? <LoadingSpinner /> : <Chart data={response} />}
      </Main>
    </PageContainer>
  );
};

export default Tracker;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
