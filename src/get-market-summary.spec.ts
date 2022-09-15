import { MarketSummary, MarketSummaryResponse, MarketSummaryScraper } from "./get-market-summary";
import { WebScraper } from "./web-scraper";

describe('Market Summary Tests', () => {
  it('should create a new MarketSummary', () => {
    const webScraper = new WebScraper();
    const marketSummary = new MarketSummary(webScraper);
    expect(marketSummary).toBeDefined()
  })

  it('should return a MarketSummaryResponse', async () => {
    const webScraper = new WebScraper();
    const marketSummary = new MarketSummary(webScraper);
    expect(await marketSummary.getMarketSummary('VALE3')).toStrictEqual({
      companyName: 'BVMF: VALE3',
      exchangeStockSymbol: 'BVMF: VALE3',
      price: '70.15',
      closed: 'Sep 12, 17:07 GMT-3',
      open: '70.09',
      high: '70.60',
      low: '69.26',
      mktCap: '330.87B'
    })

  })
})
