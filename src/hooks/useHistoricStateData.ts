import { useEffect, useState } from 'react';
import StateHistoricDataResp from '../models/StateHistoricDataResp';
import { getHistoricDataForState } from '../services/historicDataService';

const useHistoricStateData = (state: string) => {
  const [response, setResponse] = useState<StateHistoricDataResp[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHistoricDataForState(state).then(({ data }) => {
      setResponse(data);
      setIsLoading(false);
    });
  }, [state]);

  return { response, isLoading };
};

export default useHistoricStateData;
