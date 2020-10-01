//Require module
const express = require('express');
const webscraper = require('web-scraper-headless')

// Express Initialize
const app = express();
const port = 8000;
app.listen(port, () => {
    console.log('listen port 8000');
})

app.use(express.json())

const defaultOptions = {delay: 10, pageLoadDelay: 10, browser: 'headless'} // optional delay, pageLoadDelay and browser

//create api
app.get('/scrape', (req, res) => {
    webscraper(req.body.sitemap, req.body.options || defaultOptions)
    .then(function (scraped) {
        res.send(scraped);
    })
})