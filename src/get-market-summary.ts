export type MarketSummaryResponse = {
  logo?: string;
  companyName: string;
  exchangeStockSymbol: string;
  price: string;
  closed: string;
  open: string;
  high: string;
  low: string;
  mktCap: string;
  wk52high: string;
  wk52low: string
}

export interface MarketSummaryScraper {
  getMarketSummary(stockSymbol: string): Promise<MarketSummaryResponse>;
}

export class MarketSummary {
  constructor(private ws: MarketSummaryScraper) { }

  async getMarketSummary(stockSymbol: string): Promise<MarketSummaryResponse> {
    const response: MarketSummaryResponse = await this.ws.getMarketSummary(stockSymbol)
    return response;
  }

}


