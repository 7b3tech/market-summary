import express from 'express'
import { MarketSummary } from './get-market-summary';
import { WebScraper } from './web-scraper';

const webScraper = new WebScraper();
const marketSummary = new MarketSummary(webScraper)

const app = express();
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('server is running on port:', PORT)
})

app.use(express.json())

app.get('/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const result = await marketSummary.getMarketSummary(symbol.toUpperCase())
  res.status(200).json(result)
})
