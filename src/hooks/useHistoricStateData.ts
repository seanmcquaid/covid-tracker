import { useEffect, useState } from 'react';
import StateHistoricDataResp from '../models/StateHistoricDataResp';
import { getHistoricDataForState } from '../services/historicDataService';

const useHistoricStateData = (state: string) => {
  const [response, setResponse] = useState<StateHistoricDataResp[]>([]);
  console.log(response);

  useEffect(() => {
    getHistoricDataForState(state).then(({ data }) => {
      setResponse(data);
    });
  }, [state]);

  return response;
};

export default useHistoricStateData;
