import axios from 'axios';

export const getHistoricDataForState = (state: string) =>
  axios.get(`https://api.covidtracking.com/v1/states/${state}/daily.json`);
