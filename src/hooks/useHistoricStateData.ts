import { useEffect, useState } from 'react';
import { getHistoricDataForState } from '../services/historicDataService';

const useHistoricStateData = (state: string) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    if (state.length < 2) {
      return;
    }
    getHistoricDataForState(state).then(({ data }) => {
      setResponse(data);
    });
  }, []);

  return response;
};

export default useHistoricStateData;
