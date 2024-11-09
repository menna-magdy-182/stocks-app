const endpoints = {
  tickers: '/reference/tickers',
  tickerLogo: (ticker: string) =>
    `https://raw.githubusercontent.com/davidepalazzo/ticker-logos/refs/heads/main/ticker_icons/${ticker}.png`,
};

export default endpoints;
