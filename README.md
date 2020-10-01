# web-scraper-api
Simple REST API for webscraper.io sitemap headless run.

Build for building docker image locate to repository root and run:

    docker image build -t konstiak/web-scraper-api:latest .

Run container with:

    docker container run -it -p 8000:8000 --rm --security-opt seccomp=./chrome.json konstiak/web-scraper-api:latest

Usage:

    curl --location --request GET 'http://localhost:8000/scrape' \
         --header 'Content-Type: application/json' \
         --data-raw '{
                "sitemap": 
                    ...sitemap json exported from webscraper.io chrome extension...
            }'