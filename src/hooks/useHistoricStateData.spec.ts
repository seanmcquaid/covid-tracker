import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import StateHistoricDataResp from '../models/StateHistoricDataResp';
import useHistoricStateData from './useHistoricStateData';

describe('useHistoricStateData', () => {
  it('Loads data correctly', async () => {
    const data: StateHistoricDataResp[] = [];

    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });

    const { result, waitForNextUpdate } = renderHook(() => useHistoricStateData('NY'));

    expect(result.current.isLoading).toEqual(true);
    expect(result.current.response).toEqual([]);

    await waitForNextUpdate();

    expect(result.current.isLoading).toEqual(false);
    expect(result.current.response).toEqual([]);
  });
});
