import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {TickerItem} from 'components';
import {Ticker} from 'models/api';
import React from 'react';

jest.mock('react-native-fast-image', () => 'FastImage');

jest.mock('services/endpoints', () => ({
  tickerLogo: jest.fn().mockReturnValue('http://mocked-url.com/logo.png'),
}));

const mockTicker: Ticker = {
  ticker: 'AAPL',
  name: 'Apple Inc.',
  active: false,
  currency_name: '',
  last_updated_utc: '',
  locale: '',
  market: '',
  type: '',
};

describe('TickerItem', () => {
  it('renders ticker symbol and name correctly', () => {
    const {getByText} = render(<TickerItem item={mockTicker} />);

    expect(getByText('AAPL')).toBeTruthy();
    expect(getByText('Apple Inc.')).toBeTruthy();
  });

  it('renders the image correctly', () => {
    const {getByTestId} = render(<TickerItem item={mockTicker} />);

    const fastImage = getByTestId('test:id/ticker-image');
    expect(fastImage).toBeTruthy();
    expect(fastImage.props.source.uri).toBe('http://mocked-url.com/logo.png');
  });

  it('shows fallback text when image fails to load', async () => {
    const {getByText, getByTestId} = render(<TickerItem item={mockTicker} />);

    const fastImage = getByTestId('test:id/ticker-image');
    fireEvent(fastImage, 'error');

    await waitFor(() => expect(getByText('AA')).toBeTruthy());
  });
});
