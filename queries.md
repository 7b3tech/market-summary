Array.from(document.querySelectorAll('div.glue-filter-result div.logo img')).map((logo) => logo.src)
patyners = Array.from(document.querySelectorAll('div.glue-filter-result h3.title')).map((partner) => partner.innerText.trim())

https://marketingplatform.google.com/about/partners/find-a-partner




   [...document.querySelectorAll('div#rcnt')].map(c => ({
        logo: c.querySelector('div.PZPZlf img').src,
        companyName: c.querySelector('div.EGmpye div.wx62f').innerText.trim(),
        exchangeStockSymbol: c.querySelector('div.EGmpye div.wx62f').innerText.trim(),
          price: c.querySelector('div.PZPZlf span[jsname="vWLAgc"]').innerText.trim(),
        closed: c.querySelector('div span[jsname="ihIZgd"]').innerText.trim(),
        open: c.querySelector('div.ZSM8k div[data-attrid="Open"]').innerText.trim(),
        high: c.querySelector('div.ZSM8k div[data-attrid="High"]').innerText.trim(),
        low: c.querySelector('div.ZSM8k div[data-attrid="Low"]').innerText.trim(),
        mktCap: c.querySelector('div.ZSM8k div[data-attrid="Mkt cap"]').innerText.trim(),
        wk52high: c.querySelector('div.ZSM8k div[data-attrid="52-wk high"]').innerText.trim(),
         wk52low: c.querySelector('div.ZSM8k div[data-attrid="52-wk low"]').innerText.trim() 
        
        
      }))
