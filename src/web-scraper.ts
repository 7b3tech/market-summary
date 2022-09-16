import puppeteer from 'puppeteer';
import { MarketSummaryResponse, MarketSummaryScraper } from './get-market-summary';

export class WebScraper implements MarketSummaryScraper {
  async getMarketSummary(stockSymbol: string): Promise<MarketSummaryResponse> {

    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'], });

    const page = await browser.newPage();
    const url = `https://www.google.com/search?q=+${stockSymbol}&bih=334&biw=1033&hl=en&sxsrf=ALiCzsYNkQTq40Ri4fmYDMVJkFlQKWEZYg%3A1663013311422&ei=v5EfY9u4GY3U1sQP1-WwiAU&ved=0ahUKEwiblLyth5D6AhUNqpUCHdcyDFEQ4dUDCA8&uact=5&oq=+${stockSymbol}&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBggAEB4QBzIGCAAQHhAHMgUIABCABDoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFDsGVjsGWD4H2gBcAF4AIABrwGIAa8BkgEDMC4xmAEAoAEByAEIwAEB&sclient=gws-wiz`
    await page.goto(url)


    const marketSummary = await page.evaluate(() =>

      [...document.querySelectorAll('div#rcnt')].map(c => ({
        logo: (<HTMLImageElement>c.querySelector('div.PZPZlf img')).src,
        companyName: (<HTMLElement>c.querySelector('div.EGmpye div.wx62f')).innerText,
        exchangeStockSymbol: (<HTMLElement>c.querySelector('div.EGmpye div.wx62f')).innerText.trim(),
        price: (<HTMLElement>c.querySelector('div.PZPZlf span[jsname="vWLAgc"]')).innerText.trim(),
        closed: (<HTMLElement>c.querySelector('div span[jsname="ihIZgd"]')).innerText.trim(),
        open: (<HTMLElement>c.querySelector('div.ZSM8k div[data-attrid="Open"]')).innerText.trim(),
        high: (<HTMLElement>c.querySelector('div.ZSM8k div[data-attrid="High"]')).innerText.trim(),
        low: (<HTMLElement>c.querySelector('div.ZSM8k div[data-attrid="Low"]')).innerText.trim(),
        mktCap: (<HTMLElement>c.querySelector('div.ZSM8k div[data-attrid="Mkt cap"]')).innerText.trim(),
        wk52high: (<HTMLElement>c.querySelector('div.ZSM8k div[data-attrid="52-wk high"]')).innerText.trim(),
        wk52low: (<HTMLElement>c.querySelector('div.ZSM8k div[data-attrid="52-wk low"]')).innerText.trim()
      })))


    await browser.close()
    return marketSummary[0]
  }

}
