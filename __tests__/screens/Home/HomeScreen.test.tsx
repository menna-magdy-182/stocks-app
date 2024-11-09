import {fireEvent, waitFor} from '@testing-library/react-native';
import React from 'react';
import {HomeScreen} from 'screens';

import {renderWithProviders} from '../../__utils__/test.utils';

jest.mock('services/apiService', () => ({
  fetchTickers: jest.fn(),
}));

const mockFetchTickers = require('services/apiService').fetchTickers;

describe('HomeScreen', () => {
  beforeEach(() => {
    mockFetchTickers.mockClear();
  });

  it('renders correctly and shows the loader while fetching data', async () => {
    mockFetchTickers.mockResolvedValueOnce({
      data: {results: [{ticker: 'AAPL', name: 'Apple'}]},
    });

    const {getByTestId} = renderWithProviders(<HomeScreen />);

    expect(getByTestId('test:id/loadingIndicator')).toBeTruthy();

    await waitFor(() => expect(mockFetchTickers).toHaveBeenCalled());

    expect(getByTestId('test:id/tickers-list')).toBeTruthy();
  });

  it('renders ErrorFallback component when an error occurs', async () => {
    mockFetchTickers.mockRejectedValueOnce(new Error('Network error'));

    const {getAllByTestId} = renderWithProviders(<HomeScreen />);

    await waitFor(() =>
      expect(getAllByTestId('test:id/error-fallback')).toBeTruthy(),
    );
  });

  it('executes the search input correctly', async () => {
    const {getByTestId, getByText} = renderWithProviders(<HomeScreen />);

    const searchInput = getByTestId('test:id/search-input');
    fireEvent.changeText(searchInput, 'AAPL');

    expect(getByText('AAPL')).toBeTruthy();
  });
});
