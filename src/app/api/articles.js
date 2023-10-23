import Article from '../models/Article';

export async function getArticles(query, language, from, sortBy) {

    const isLocalApi = false;

    // this code is added to prevent unnecessary API calls 
    // console.log(getLocalApiURL(isLocalApi, query, language, from, sortBy));
    // return [];
    
    const response = await fetch(getLocalApiURL(isLocalApi, query, language, from, sortBy));
    
    let articlesData = await response.json();
    
    // if(articlesData.status == "error"){
    //     return [];
    // }

    articlesData ={
        "status": "ok",
        "totalResults": 12775,
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "aol.com",
                "title": "I drove electric SUVs from Tesla and Mercedes-Benz. Here's how they stack up and which I'd buy",
                "description": "None Tesla isn't the only game in town anymore. • None Mercedes has Elon Musk's firm in its sights. • None I drove the Tesla Model Y and Mercedes-Benz EQE SUV to see how they compare. Tesla is far from the only game in town anymore as legacy automakers from V…",
                "url": "https://biztoc.com/x/35093113e746e2ee",
                "urlToImage": "https://c.biztoc.com/p/35093113e746e2ee/s.webp",
                "publishedAt": "2023-10-22T10:56:08Z",
                "content": "None Tesla isn't the only game in town anymore.None Mercedes has Elon Musk's firm in its sights.None I drove the Tesla Model Y and Mercedes-Benz EQE SUV to see how they compare.Tesla is far from the … [+293 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "investing.com",
                "title": "Top 5 things to watch in markets in the week ahead",
                "description": "Investing.com -- The risk-off mood dominating markets looks likely to continue in the coming week, while four out of seven megacap companies are due to report earnings. U.S. data will give markets another update on the strength of the economy. Oil prices look…",
                "url": "https://biztoc.com/x/04f30c0ccb247343",
                "urlToImage": "https://c.biztoc.com/p/04f30c0ccb247343/s.webp",
                "publishedAt": "2023-10-22T10:52:08Z",
                "content": "Investing.com -- The risk-off mood dominating markets looks likely to continue in the coming week, while four out of seven megacap companies are due to report earnings. U.S. data will give markets an… [+300 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Fark.com"
                },
                "author": null,
                "title": "If you won an iguana at Apple Scrapple then the state of Delaware may want a word with you [Strange]",
                "description": "If you won an iguana at Apple Scrapple then the state of Delaware may want a word with you",
                "url": "https://www.fark.com/comments/13030796/If-you-won-an-iguana-at-Apple-Scrapple-then-state-of-Delaware-may-want-a-word-with-you",
                "urlToImage": "https://usrimg-full.fark.net/k/kz/fark_kz3hlnB8seLLx_gI2ZfuB3enjz4.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1698638400&Signature=A0tzIGJBi5vQ%2FqVocbUDQ2j9fHI%3D",
                "publishedAt": "2023-10-22T10:45:27Z",
                "content": "<li>Links are submitted by members of the Fark community.\r\n</li><li>When community members submit a link, they also write a custom headline for the story.\r\n</li><li>Other Farkers comment on the links… [+177 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slickdeals.net"
                },
                "author": "kchan26",
                "title": "Apple Watch Series 8 GPS Smartwatch: 41mm Cellular $325, 41mm $225, 45mm $255 & More + Free Shipping",
                "description": "Target has Apple Watch Series 8 GPS Smartwatch (41mm or 45mm, various colors) on sale for $175 off the retail price. Shipping is free or select free store pickup where available.\r\n\r\nThanks to Comm ...",
                "url": "https://slickdeals.net/f/17007277-apple-watch-series-8-gps-smartwatch-41mm-cellular-325-41mm-225-45mm-255-more-free-shipping",
                "urlToImage": "https://static.slickdealscdn.com/attachment/2/0/7/1/3/1/3/8/14405431.attach",
                "publishedAt": "2023-10-22T10:36:43Z",
                "content": "Target has Apple Watch Series 8 GPS Smartwatch (41mm or 45mm, various colors) on sale for $175 off the retail price. Shipping is free or select free store pickup where available.Thanks to Community M… [+216 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slickdeals.net"
                },
                "author": "kchan26",
                "title": "Apple Watch Series 8 GPS 45mm Midnight Aluminum Case with Midnight Sport Band - S/M - $254.99",
                "description": "45mm All color $254.99, 41mm all color $224.99 \n \nhttps://www.target.com/p/apple-watch-series-8-gps-45mm-midnight-aluminum-case-with-midnight-sport-band-s-m/-/A-85973638",
                "url": "https://slickdeals.net/f/17007277-apple-watch-series-8-gps-45mm-midnight-aluminum-case-with-midnight-sport-band-s-m-254-99",
                "urlToImage": "https://static.slickdealscdn.com/attachment/2/0/7/1/3/1/3/8/14405431.attach",
                "publishedAt": "2023-10-22T10:36:43Z",
                "content": "Are you sure you want to report this deal as expired? This will send the deal to our moderators for review. \r\n If you'd like to report this thread for another reason (spam, repost, etc.) please use t… [+17 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "feedfeeder",
                "title": "China launches investigation into iPhone maker Foxconn, says state media - Financial Times",
                "description": "China launches investigation into iPhone maker Foxconn, says state mediaFinancial Times Foxconn faces tax audit, land use probe, Chinese state media reportsReuters Apple supplier Foxconn subjected to tax inspections by Chinese authoritiesThe Associated Press …",
                "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172081609",
                "urlToImage": null,
                "publishedAt": "2023-10-22T10:12:32Z",
                "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "investing.com",
                "title": "Foxconn faces tax audit, land use probe, Chinese state media reports",
                "description": "Taiwan's Foxconn, the largest supplier of Apple (NASDAQ: ) iPhones, is the subject of tax audits in China at some of its key subsidiaries, suspected of violating laws and regulations, Chinese state media reported on Sunday. China's natural resources departmen…",
                "url": "https://biztoc.com/x/a4ce3f312bb88104",
                "urlToImage": "https://c.biztoc.com/p/a4ce3f312bb88104/s.webp",
                "publishedAt": "2023-10-22T10:10:07Z",
                "content": "Taiwan's Foxconn, the largest supplier of Apple (NASDAQ: ) iPhones, is the subject of tax audits in China at some of its key subsidiaries, suspected of violating laws and regulations, Chinese state m… [+279 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Tim Levin",
                "title": "I drove electric SUVs from Tesla and Mercedes-Benz. Here's how they stack up and which I'd buy.",
                "description": "The Model Y has the edge when it comes to pricing and a minimalist interior. But the EQE SUV wins on luxury.",
                "url": "https://www.businessinsider.com/tesla-model-y-vs-mercedes-benz-eqe-suv-review-2023-10",
                "urlToImage": "https://i.insider.com/6532e8ccbe9edfa8eda6a06d?width=1200&format=jpeg",
                "publishedAt": "2023-10-22T10:03:01Z",
                "content": "The Tesla Model Y Long Range and Mercedes-Benz EQE 500 4MATIC SUV.Tim Levin/Insider\r\n<ul><li>Tesla isn't the only game in town anymore. </li><li>Mercedes has Elon Musk's firm in its sights. </li><li>… [+8075 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Forbes"
                },
                "author": "William Pesek, Senior Contributor, \n William Pesek, Senior Contributor\n https://www.forbes.com/sites/williampesek/",
                "title": "Why ¥1,000,000,000,000,000 Buys Way Less GDP Than You’d Think",
                "description": "How much has Japan gotten out of 1.01 quadrillion yen of liquidity? A lot less than you’d think.",
                "url": "https://www.forbes.com/sites/williampesek/2023/10/22/why-1000000000000000-buys-way-less-gdp-than-youd-think/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/647582da77f0abbc585a26a2/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                "publishedAt": "2023-10-22T10:00:44Z",
                "content": "Graph Falling Down in Front Of Japan Flag. Crisis Concept\r\ngetty\r\nA quadrillion here, a quadrillion there, and pretty soon youre talking about real money.\r\nWith apologies to 1950s U.S. Senator Everet… [+4616 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slickdeals.net"
                },
                "author": "AdmiralAsshat",
                "title": "Publisher Ebook Sale: Tales of the Dying Earth by Jack Vance - $2.99",
                "description": "The digital ebook version of Tales of the Dying Earth by Jack Vance is on sale for $2.99 at these outlets: \n \nAmazon \nKobo \nGoogle Play \nBarnes and Noble \nApple Books \n \nJack Vance is one of the most  ...",
                "url": "https://slickdeals.net/f/17007241-publisher-ebook-sale-tales-of-the-dying-earth-by-jack-vance-2-99",
                "urlToImage": "https://static.slickdealscdn.com/attachment/3/8/3/9/8/9/8/14405374.attach",
                "publishedAt": "2023-10-22T09:58:03Z",
                "content": "Jack Vance is one of the most remarkable talents to ever grace the world of science fiction. His unique, stylish voice has been beloved by generations of readers. One of his enduring classics is his … [+438 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Marketscreener.com"
                },
                "author": null,
                "title": "Foxconn faces tax audit, land use probe - Chinese state media",
                "description": "(marketscreener.com) Taiwan's Foxconn,\nthe largest supplier of Apple iPhones, is the subject\nof tax audits in China at some of its key subsidiaries,\nsuspected of violating laws and regulations, Chinese state media\nreported on Sunday.\n China's natural resource…",
                "url": "https://www.marketscreener.com/quote/index/MSCI-TAIWAN-STRD-107361484/news/Foxconn-faces-tax-audit-land-use-probe-Chinese-state-media-45120509/",
                "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
                "publishedAt": "2023-10-22T09:47:49Z",
                "content": "BEIJING, Oct 22 (Reuters) - Taiwan's Foxconn,\r\nthe largest supplier of Apple iPhones, is the subject\r\nof tax audits in China at some of its key subsidiaries,\r\nsuspected of violating laws and regulati… [+1193 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slate Magazine"
                },
                "author": "Dan Kois",
                "title": "Killers of the Flower Moon’s Author on the Changes the Movie Makes to the Book",
                "description": "There’s more than one reason the adaptation shifted its focus.",
                "url": "https://slate.com/culture/2023/10/killers-of-the-flower-moon-movie-book-david-grann.html",
                "urlToImage": "https://compote.slate.com/images/bc3d9501-dad7-4c5f-8f0d-cf7d38e651a7.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
                "publishedAt": "2023-10-22T09:45:00Z",
                "content": "Martin Scorseses career-capping Killers of the Flower Moon likely never would have happened without David Grann, the New Yorker writer with a preternatural knack for unearthing astonishing, dramatic … [+10528 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Rupendra Brahambhatt",
                "title": "Cavendish bananas face extinction and not all experts agree on how to save it",
                "description": "Are bananas going extinct? The Gros Michel did, and the Cavendish variety is battling disease. Here's how scientists are trying to save it.",
                "url": "https://www.businessinsider.com/bananas-going-extinct-gros-michel-cavendish-disease-2023-9",
                "urlToImage": "https://i.insider.com/652daa5a55f52b01b360d92a?width=1200&format=jpeg",
                "publishedAt": "2023-10-22T09:17:01Z",
                "content": "Banana splits may taste different in the future.Marita G./Yelp\r\n<ul>\n<li>Cavendish, the most commonly available banana variety, is facing the risk of extinction.</li>\n<li>A fungus that ravages roots … [+6944 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MacRumors"
                },
                "author": "Tim Hardwick",
                "title": "YouTube Music Integration Comes to HomePod",
                "description": "YouTube Music is now available directly on Apple's HomePod and HomePod mini, thanks to new Siri integration support in the YouTube Music app.\n\n\n\n\n\nThe change means subscribers to the streaming service can now choose to use voice commands to start YouTube Musi…",
                "url": "https://www.macrumors.com/2023/10/22/youtube-music-integration-comes-to-homepod/",
                "urlToImage": "https://images.macrumors.com/t/JjxEUiy6GbKQnCRaVhhMzq8ebn0=/1600x/article-new/2023/09/youtube-music-logo.png",
                "publishedAt": "2023-10-22T09:12:56Z",
                "content": "YouTube Music is now available directly on Apple's HomePod and HomePod mini, thanks to new Siri integration support in the YouTube Music app.\r\nThe change means subscribers to the streaming service ca… [+2208 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "ET Online",
                "title": "Navratri Day 8: India invokes two forms of Goddess Durga - serene Ma Mahagauri & fearsome Ma Chamunda",
                "description": "​Considered the eighth form of Navadurga (the nine forms of Goddess Durga), Maa Mahagauri is depicted with four hands. Seated atop a white bull, she is seen carrying a trident and a drum.",
                "url": "https://economictimes.indiatimes.com/magazines/panache/navratri-day-8-india-invokes-two-forms-of-goddess-durga-serene-ma-mahagauri-fearsome-ma-chamunda/articleshow/104625570.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-104625633,width-1200,height-630,imgsize-73736,overlay-etpanache/photo.jpg",
                "publishedAt": "2023-10-22T09:09:49Z",
                "content": "Today marks one of the most important days of Navratri - Maha Ashtami. This is when Durgotsav celebrations reach their crescendo. It falls on the eighth day of Shardiya Navratri and the third day of … [+2769 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Securityaffairs.com"
                },
                "author": "Pierluigi Paganini",
                "title": "Security Affairs newsletter Round 442 by Pierluigi Paganini – INTERNATIONAL EDITION",
                "description": "A new round of the weekly SecurityAffairs newsletter arrived! Every week the best security articles from Security Affairs are free for you in your email box. Enjoy a new round of the weekly SecurityAffairs newsletter, including the international press. A thre…",
                "url": "https://securityaffairs.com/152822/breaking-news/security-affairs-newsletter-round-442-by-pierluigi-paganini-international-edition.html",
                "urlToImage": "https://securityaffairs.com/wp-content/uploads/2015/03/newsletter.png",
                "publishedAt": "2023-10-22T09:09:03Z",
                "content": "Security Affairs newsletter Round 442 by Pierluigi Paganini INTERNATIONAL EDITION\r\n | A threat actor is selling access to Facebook and Instagram's Police Portal\r\n | Threat actors breached Okta suppor… [+15547 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "reuters.com",
                "title": "Foxconn faces tax audit, land use probe - Chinese state media",
                "description": "A woman drives past the logo of Foxconn outside the company's building in Taipei, Taiwan November 9, 2022. REUTERS/Ann Wang/File Photo Acquire Licensing Rights BEIJING, Oct 22 (Reuters) - Foxconn Technology Group (2317.TW), Apple Inc's (AAPL.O) largest suppli…",
                "url": "https://biztoc.com/x/5ce780124651fbee",
                "urlToImage": "https://c.biztoc.com/p/5ce780124651fbee/s.webp",
                "publishedAt": "2023-10-22T09:08:09Z",
                "content": "A woman drives past the logo of Foxconn outside the company's building in Taipei, Taiwan November 9, 2022. REUTERS/Ann Wang/File Photo Acquire Licensing RightsBEIJING, Oct 22 (Reuters) - Foxconn Tech… [+268 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Digital Trends"
                },
                "author": "Albert Bassili",
                "title": "The perfect holiday gift? AirPods are discounted to $99 right now",
                "description": "If you'd like to grab some AirPods without spending a ton of money, this deal for the AirPods 2 will net you a pair for just $99",
                "url": "https://www.digitaltrends.com/home-theater/apple-airpods-2-deal-amazon-october-2023/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2020/07/air-pods-2-charging-case-airpods-vs-galaxy-buds-scaled.jpg?resize=1200%2C630&p=1",
                "publishedAt": "2023-10-22T09:04:47Z",
                "content": "Image used with permission by copyright holder\r\nApple set the standard for wireless earbuds with the original AirPods, and while the latest generation can be quite expensive, you can still get some o… [+2088 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "ft.com",
                "title": "China launches investigation into iPhone maker Foxconn, says state media",
                "description": "Tax authorities said to have inspected a number of the Apple supplier’s sites in provinces #apple",
                "url": "https://biztoc.com/x/5a5e318959319340",
                "urlToImage": "https://c.biztoc.com/p/5a5e318959319340/s.webp",
                "publishedAt": "2023-10-22T09:00:06Z",
                "content": "Tax authorities said to have inspected a number of the Apple suppliers sites in provinces\r\n#apple\r\nThis story appeared on ft.com, ."
            },
            {
                "source": {
                    "id": null,
                    "name": "Ladowntownnews.com"
                },
                "author": "By Luke Netzley, LA Downtown News Deputy Editor",
                "title": "Chinatown Pilot Project: Little Tokyo Service Center acquires site for affordable shared housing",
                "description": "With the vision of providing inclusive living opportunities to low-income communities across Los Angeles, community nonprofit and developer Little Tokyo Service Center (LTSC) has closed construction financing for an affordable shared housing pilot project at …",
                "url": "http://www.ladowntownnews.com/news/chinatown-pilot-project-little-tokyo-service-center-acquires-site-for-affordable-shared-housing/article_91ba2c94-6f98-11ee-935e-cb517c7b6c1d.html",
                "urlToImage": "https://bloximages.chicago2.vip.townnews.com/ladowntownnews.com/content/tncms/assets/v3/editorial/b/e8/be8ad3e0-6f98-11ee-aef5-076d4d5ffe45/65330070237b9.image.jpg?crop=1280%2C672%2C0%2C144&resize=1200%2C630&order=crop%2Cresize",
                "publishedAt": "2023-10-22T08:45:00Z",
                "content": "With the vision of providing inclusive living opportunities to low-income communities across Los Angeles, community nonprofit and developer Little Tokyo Service Center (LTSC) has closed construction … [+4325 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Fly4free.com"
                },
                "author": "Giovanni",
                "title": "Cheap flights from Prague to New York from €350",
                "description": "Visit lively New York City! Star Alliance partners are offering cheap flights from Prague to the Big Apple starting at only €350 for a round trip.",
                "url": "https://www.fly4free.com/flight-deals/europe/flights-from-prague-to-new-york-e350/",
                "urlToImage": "https://assets.fly4free.com/wp-content/uploads/2023/09/New-York_PH_cris-tagupa-zM9_h_5N7Xw-unsplash.jpg",
                "publishedAt": "2023-10-22T08:40:53Z",
                "content": "Visit lively New York City! Star Alliance partners are offering cheap flights from Prague to the Big Apple starting at only 350 for a round trip.New York has so much to offer to its visitors! Go to B… [+1246 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "barrons.com",
                "title": "Why Chip Makers Favor Arizona",
                "description": "To the Editor: Along with Taiwan Semiconductor Manufacturing’s $40 billion investment in Arizona, Intel is investing $20 billion in expanding its already large research and manufacturing presence in nearby Chandler (“How Global Conflict Led to a Surprising Pl…",
                "url": "https://biztoc.com/x/2435d5a73d8ccc02",
                "urlToImage": "https://c.biztoc.com/p/2435d5a73d8ccc02/s.webp",
                "publishedAt": "2023-10-22T08:30:05Z",
                "content": "To the Editor:Along with Taiwan Semiconductor Manufacturings $40 billion investment in Arizona, Intel is investing $20 billion in expanding its already large research and manufacturing presence in ne… [+201 chars]"
            },
            {
                "source": {
                    "id": "cbc-news",
                    "name": "CBC News"
                },
                "author": null,
                "title": "LGBTQ policies and curricula in schools: What are your questions?",
                "description": "On Wednesday, CBC Radio's The Signal dedicates a full hour to LGBTQ policies and inclusive education in Newfoundland and Labrador's schools. Have a question? Share it, and we'll try to cover it in the show.",
                "url": "https://www.cbc.ca/news/canada/newfoundland-labrador/lgbtq-curriculum-1.7002566",
                "urlToImage": "https://i.cbc.ca/1.7002568.1697810409!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/with-adam-walsh-1.jpg",
                "publishedAt": "2023-10-22T08:30:00Z",
                "content": "Over the summer and into the school year, we have seen people across Newfoundland and Labrador protesting LGBTQ policies and curricula in the province's schools.\r\nIt's part of a larger Canada-wide de… [+856 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Goodthingsguy.com"
                },
                "author": "Tyler Leigh Vivier",
                "title": "New Desks and Gym Get A-Plus From KwaMagxaki Learners",
                "description": "150 brand-new desks bring much-needed relief to KwaMagxaki High School matrics who have struggled to focus while sharing cramped workspaces.",
                "url": "https://www.goodthingsguy.com/business/new-desks-and-gym-get-a-plus-from-kwamagxaki-learners/",
                "urlToImage": "https://www.goodthingsguy.com/wp-content/uploads/2023/10/1-damane-ntolokoma-1024x683.jpg",
                "publishedAt": "2023-10-22T08:05:45Z",
                "content": "South Africa (22 October 2023) – A donation of 150 brand-new desks is set to bring much-needed relief to KwaMagxaki High School matrics who have struggled to focus while sharing cramped workspaces.\r\n… [+4347 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNET"
                },
                "author": "Mary-Elisabeth Combs",
                "title": "Not a Fan of NameDrop? Here's How You Can Disable Apple's Latest Contact-Sharing Feature",
                "description": "If you're not comfortable with NameDrop's contact-sharing capabilities, don't worry. There's a super quick fix to disable it.",
                "url": "https://www.cnet.com/tech/mobile/not-a-fan-of-namedrop-heres-how-you-can-disable-apples-latest-contact-sharing-feature/",
                "urlToImage": "https://www.cnet.com/a/img/resize/16ea8ae1375b2667576fc991d0cae2d3cb245568/hub/2023/06/05/0b068e1e-33e6-40df-8c40-0559b1e4c0c7/namedrop.png?auto=webp&fit=crop&height=675&width=1200",
                "publishedAt": "2023-10-22T08:00:04Z",
                "content": "iOS 17 is available to download and the iPhone 15 series has been on shelves for a few weeks, so Apple fans have been getting their hands on all the new software these upgrades brought. While there a… [+2600 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Futurism"
                },
                "author": "Frank Landymore",
                "title": "Apple Reportedly Ditched Jon Stewart Because They Didn't Like His Thoughts About AI",
                "description": "Comedian and political commentator Jon Stewart is now out of a job. On Thursday, the former \"Daily Show\" host told his staff that he was leaving his show on Apple TV, \"The Problem With Jon Stewart,\" just as its third season was set to begin filming in a few w…",
                "url": "https://futurism.com/the-byte/apple-jon-stewart-show-ai",
                "urlToImage": "https://wp-assets.futurism.com/2023/10/apple-end-jon-stewart-show-ai.jpg",
                "publishedAt": "2023-10-22T08:00:01Z",
                "content": "\"The Problem With Jon Stewart\" has abruptly ended. \r\nForbidden Fruit\r\nComedian and political commentator Jon Stewart is now out of a job. On Thursday, the former \"Daily Show\" host told his staff that… [+2071 chars]"
            },
            {
                "source": {
                    "id": "techradar",
                    "name": "TechRadar"
                },
                "author": "mark.wilson@futurenet.com (Mark Wilson)",
                "title": "The iPad Air turns 10 – is our first ever five-star tablet still a bargain buy?",
                "description": "Ten years ago today, Apple revealed the first iPad Air. But while it looks impressively modern, it's now more of a museum piece.",
                "url": "https://www.techradar.com/tablets/the-ipad-air-turns-10-is-our-first-ever-five-star-tablet-still-a-bargain-buy",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/ofzy8axtHZgdLbXsW6zykY-1200-80.jpg",
                "publishedAt": "2023-10-22T08:00:00Z",
                "content": "Ten years ago today, Apple revealed a tablet that it called the \"biggest step yet in delivering the vision that is iPad\". It was called the iPad Air and it became the first tablet to receive a five-s… [+4992 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Sostav.ru"
                },
                "author": null,
                "title": "��� ������� ��������? ���-10 �������� ��� ����� ���������",
                "description": "����� �� �������� ������. ���������� ����������, ��� � ������ � 2021 ���� �������� ������� 850 ���. �������. �� � ������ �� �� ����������� ������������ �������� ����� �������� ����� ���������, �� ������� ����� � ��������� ������� �� �������� ������������. ���…",
                "url": "https://www.sostav.ru/blogs/263398/41425",
                "urlToImage": "https://www.sostav.ru/appi/blogs/feedSocialImage/get?feedId=41425",
                "publishedAt": "2023-10-22T07:56:32Z",
                "content": ". , 2021 850 . . , .\r\n 10 , , .\r\n  , Apple Podcasts. , 20 . , .\r\n , , Siri. Siri , .\r\n :  Apple iPhone, iPad, Mac, Home Pod. Android, Apple ID.\r\n:  + , .\r\n, 2018 Apple Podcasts. , 2 . , . Google Assi… [+823 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "1970-01-01T00:00:00Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Vietnamplus.vn"
                },
                "author": "VNA",
                "title": "Industrial land demand, rents jump in ‘attractive’ Vietnam",
                "description": "Industrial land rents are expected to increase by up to 10% in the next two years in both the north and south thanks to growing demand from various industries, experts have said.",
                "url": "https://en.vietnamplus.vn/industrial-land-demand-rents-jump-in-attractive-vietnam/269995.vnp",
                "urlToImage": null,
                "publishedAt": "2023-10-22T07:38:00Z",
                "content": "HCM City (VNS/VNA) - Industrial land rents are\r\nexpected to increase by up to 10% in the next two years in both the north and\r\nsouth thanks to growing demand from various industries, experts have sai… [+4473 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "reuters.com",
                "title": "Foxconn faces tax audit, land use probe - Chinese state media",
                "description": "A woman drives past the logo of Foxconn outside the company's building in Taipei, Taiwan November 9, 2022. REUTERS/Ann Wang/File Photo Acquire Licensing Rights BEIJING, Oct 22 (Reuters) - Foxconn Technology Group (2317.TW), Apple Inc's (AAPL.O) largest suppli…",
                "url": "https://biztoc.com/x/58eb3500123b2548",
                "urlToImage": "https://c.biztoc.com/p/58eb3500123b2548/og.webp",
                "publishedAt": "2023-10-22T07:26:10Z",
                "content": "A woman drives past the logo of Foxconn outside the company's building in Taipei, Taiwan November 9, 2022. REUTERS/Ann Wang/File Photo Acquire Licensing RightsBEIJING, Oct 22 (Reuters) - Foxconn Tech… [+268 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Techviral.net"
                },
                "author": "Amarnath Chakraborty",
                "title": "10 Best Blur Background Apps for iPhone in 2023",
                "description": "You don’t actually need a premium DSLR to capture pictures with blurred backgrounds. The camera unit of modern iPhones is powerful enough to capture DSLR-type pictures. On iPhone, you can install several third-party photo editing apps to give your photos a un…",
                "url": "https://techviral.net/blur-background-apps-for-iphone/",
                "urlToImage": "https://techviral.net/wp-content/uploads/2023/10/Blur-background-min.jpg",
                "publishedAt": "2023-10-22T07:12:09Z",
                "content": "You dont actually need a premium DSLR to capture pictures with blurred backgrounds. The camera unit of modern iPhones is powerful enough to capture DSLR-type pictures.\r\nOn iPhone, you can install sev… [+6064 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Exystence.net"
                },
                "author": "driX",
                "title": "The Grogans – Find Me A Cloud (2023)",
                "description": "Find Me A Cloud is an album that has felt a little different to other albums we’ve written in the sense that we had an idea of where we wanted to take it, other times it has been whatever tracks we had ready to go. No concepts or themes but more of an auditiv…",
                "url": "http://exystence.net/blog/2023/10/22/the-grogans-find-me-a-cloud-2023/",
                "urlToImage": null,
                "publishedAt": "2023-10-22T07:00:45Z",
                "content": "Find Me A Cloud is an album that has felt a little different to other albums we’ve written in the sense that we had an idea of where we wanted to take it, other times it has been whatever tracks we h… [+940 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizchina.com"
                },
                "author": "Abid Ahsan Shanto",
                "title": "What Are RISC-V Chipsets and How Will They Redefine Next-gen Wearable Tech",
                "description": "ARM and x86 are the common names that come up when you’re talking about computer hardware. These architectures have been around for decades and power ...\nThe post What Are RISC-V Chipsets and How Will They Redefine Next-gen Wearable Tech appeared first on Giz…",
                "url": "https://www.gizchina.com/2023/10/22/risc-v-chipsets-and-wearable-tech/",
                "urlToImage": "https://www.gizchina.com/wp-content/uploads/images/2023/10/laura-ockel-pGVr8YRtQ80-unsplash-1200x675.jpg",
                "publishedAt": "2023-10-22T06:35:41Z",
                "content": "ARM and x86 are the common names that come up when youre talking about computer hardware. These architectures have been around for decades and power some of the strong and robust CPUs in the market. … [+5374 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livejournal.com"
                },
                "author": "wintersfire",
                "title": "ONTD Original: Underrated Horror Films Directed by Women",
                "description": "Happy spooky season! I really wanted to make a post about some of my favorite women directed horror films that I feel are underrated. Most people are aware of Jennifer's Body, The Babadook, and Raw so I wanted to highlight some lesser known women directed hor…",
                "url": "https://ohnotheydidnt.livejournal.com/127085543.html",
                "urlToImage": "https://l-files.livejournal.net/og_image/3616053/496427?v=1697955660",
                "publishedAt": "2023-10-22T06:12:07Z",
                "content": "Happy spooky season! I really wanted to make a post about some of my favorite women directed horror films that I feel are underrated. Most people are aware of Jennifer's Body, The Babadook, and Raw s… [+3347 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Glyphdrawing.club"
                },
                "author": null,
                "title": "Amiga ASCII Art",
                "description": "My thesis on Amiga ASCII art translated to English.",
                "url": "https://blog.glyphdrawing.club/amiga-ascii-art/",
                "urlToImage": "https://blog.glyphdrawing.club/assets/EsbT0V61jN-300.jpeg",
                "publishedAt": "2023-10-22T05:45:37Z",
                "content": "In my thesis, I study Amiga ASCII text art. Amiga ASCII is a form of text art where the composition of letter characters set in the Amiga computer's font forms a two-dimensional representation or ima… [+71842 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "1970-01-01T00:00:00Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Philippine Star"
                },
                "author": "Francis J. Kong",
                "title": "Being nice can be toxic",
                "description": "A very nice and honest doctor says grimly to a patient: “You are a very sick man.",
                "url": "https://www.philstar.com/business/2023/10/21/2305291/being-nice-can-be-toxic",
                "urlToImage": "https://media.philstar.com/images/filler/business-logo-filler-thumbnail.jpg",
                "publishedAt": "2023-10-22T05:19:52Z",
                "content": "A very nice and honest doctor says grimly to a patient: “You are a very sick man. You’ve been simultaneously diagnosed with COVID, monkeypox, swine flu, Ebola and bubonic plague.”\r\n“Is there anything… [+4908 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "Aabhas Sharma",
                "title": "Struggle to remember passwords? Passkeys provide an easier option of safeguarding your phone",
                "description": "​ The requirements that make a password strong — combinations of lowercase, uppercase, and specialcharacters with numbers interspersed — can make them a pain to remember.",
                "url": "https://economictimes.indiatimes.com/magazines/panache/struggle-to-remember-passwords-passkeys-provide-an-easier-option-of-safeguarding-your-phone/articleshow/104620447.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-104621237,width-1200,height-630,imgsize-25084,overlay-etpanache/photo.jpg",
                "publishedAt": "2023-10-22T05:19:51Z",
                "content": "Passwords have always been considered a necessary evil, in the absence of an alternative.But the requirements that make a password strong combinations of lowercase, uppercase, and special\r\ncharacters… [+1757 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Americanthinker.com"
                },
                "author": null,
                "title": "After the Jim Jordan fiasco in Congress, the GOP's traitors out themselves",
                "description": "“A nation can survive its fools, and even the ambitious.  But it cannot survive treason from within.  An enemy at the gates is less formidable, for he is known and carries his banner openly.  But the traitor moves ...",
                "url": "https://www.americanthinker.com/blog/2023/10/after_the_jim_jordan_fiasco_in_congress_the_traitors_among_us_out_themselves.html",
                "urlToImage": "https://www.americanthinker.com/images/bucket/2023-10/249627.jpg",
                "publishedAt": "2023-10-22T05:00:00Z",
                "content": "“A nation can survive its fools, and even the ambitious.  But it cannot survive treason from within.  An enemy at the gates is less formidable, for he is known and carries his banner openly.  But the… [+5133 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizchina.com"
                },
                "author": "Abid Ahsan Shanto",
                "title": "What is Conversation Awareness on AirPods and How to Use It?",
                "description": "Apple launched the AirPods Pro 2nd Generation with some great features. For example, this pair of wireless earbuds offer excellent noise-cancellation performance. The outside world ...\nThe post What is Conversation Awareness on AirPods and How to Use It? appe…",
                "url": "https://www.gizchina.com/2023/10/22/apple-airpods-pro-conversation-awareness/",
                "urlToImage": "https://www.gizchina.com/wp-content/uploads/images/2023/10/AirPods-Pro-2-1200x675.jpg",
                "publishedAt": "2023-10-22T04:45:13Z",
                "content": "Apple launched the AirPods Pro 2nd Generation with some great features. For example, this pair of wireless earbuds offer excellent noise-cancellation performance. The outside world wont encroach on y… [+3403 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "abcnews.go.com",
                "title": "Apple supplier Foxconn subjected to tax inspections by Chinese authorities",
                "description": "BANGKOK -- Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities, state media reported Sunday. Foxconn, a Taiwanese -headquartered company officially registered as Hon Hai Precisi…",
                "url": "https://biztoc.com/x/b9950478807880c5",
                "urlToImage": "https://c.biztoc.com/p/b9950478807880c5/s.webp",
                "publishedAt": "2023-10-22T04:40:05Z",
                "content": "BANGKOK -- Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities, state media reported Sunday.Foxconn, a Taiwanese -hea… [+289 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Amazon.co.jp"
                },
                "author": null,
                "title": "日清食品 特上 カップヌードル チリトマトヌードル [唐辛子謎肉入り] 80g ×20個",
                "description": "Amazon.co.jp: Nissin Foods Special Cup Noodle, Chili Tomato Noodle, Includes Pepper Mystery Meat, 2.8 oz (80 g) x 20 Packs : Food, Beverages & Alcohol",
                "url": "https://www.amazon.co.jp/-/en/Nissin-Special-Noodle-Tomato-Mystery/dp/B0CF12SS4G",
                "urlToImage": null,
                "publishedAt": "2023-10-22T04:35:00Z",
                "content": "Product Description\r\nSuperior soup and ingredients. Noodle cup noodle, soup and ingredients. A cup of noodle tomato with an improved soup with stimulating chili oil and mysterious chili pepper meat.\r… [+1030 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Livemint",
                "title": "iPhone supplier Foxconn facing tax audit, land use investigation at key subsidiaries for suspected rule violations",
                "description": "China's natural resources department has initiated on-site investigations into the land usage of Foxconn enterprises located in Henan province, Hubei province, and other areas",
                "url": "https://www.livemint.com/companies/news/iphone-supplier-foxconn-facing-tax-audit-land-use-investigation-at-key-subsidiaries-for-suspected-rule-violations-11697943063731.html",
                "urlToImage": "https://www.livemint.com/lm-img/img/2023/10/22/1600x900/foxconn2-kIkC-621x414LiveMint_1697947871275_1697947871413.JPG",
                "publishedAt": "2023-10-22T04:30:22Z",
                "content": "Foxconn Technology Group is facing scrutiny through tax audits and on-site investigations at some of its important subsidiaries, Reuters reported citing Chinese state media reports on October 22.  Do… [+1812 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "New York Post"
                },
                "author": "Katherine Donlevy, Steven Vago",
                "title": "Central Park illuminated by first-ever drone show",
                "description": "Thousands of spectators stood in silence as the drones soared above the Lake at Central Park for the first time in the park's history.",
                "url": "https://nypost.com/2023/10/22/central-park-illuminated-by-first-ever-drone-show/",
                "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/10/NYPICHPDPICT000062216028.jpg?quality=75&strip=all&w=1024",
                "publishedAt": "2023-10-22T04:23:36Z",
                "content": "Thousands of drones lit up the Big Apple sky in a breathtaking installation Saturday night — marking the first orchestrated drone flights to dance above Central Park.\r\nThe show, organized by Dutch st… [+2324 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "seattletimes.com",
                "title": "Apple supplier Foxconn subjected to tax inspections by Chinese authorities",
                "description": "Chinese state media report that Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities.#foxconn #appleiphones",
                "url": "https://biztoc.com/x/7345235fc5a855bd",
                "urlToImage": "https://c.biztoc.com/p/7345235fc5a855bd/s.webp",
                "publishedAt": "2023-10-22T04:21:16Z",
                "content": "Chinese state media report that Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities.\r\n#foxconn#appleiphones\r\nThis sto… [+33 chars]"
            },
            {
                "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                },
                "author": "HUIZHONG WU Associated Press",
                "title": "Apple supplier Foxconn subjected to tax inspections by Chinese authorities",
                "description": "Chinese state media report that Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities",
                "url": "https://abcnews.go.com/Technology/wireStory/apple-supplier-foxconn-subjected-tax-inspections-chinese-authorities-104202606",
                "urlToImage": "https://i.abcnewsfe.com/a/b6c6da65-e78c-4733-9e78-aeaecefc0dde/wirestory_cba0a0eb5154d6067c00a38575d907b0_16x9.jpg?w=992",
                "publishedAt": "2023-10-22T04:06:51Z",
                "content": "BANGKOK -- Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities, state media reported Sunday.\r\nFoxconn, a Taiwanese -h… [+2120 chars]"
            },
            {
                "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                },
                "author": "HUIZHONG WU Associated Press",
                "title": "Apple supplier Foxconn subjected to tax inspections by Chinese authorities",
                "description": "Chinese state media report that Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities",
                "url": "https://abcnews.go.com/Business/wireStory/apple-supplier-foxconn-subjected-tax-inspections-chinese-authorities-104202605",
                "urlToImage": "https://i.abcnewsfe.com/a/b6c6da65-e78c-4733-9e78-aeaecefc0dde/wirestory_cba0a0eb5154d6067c00a38575d907b0_16x9.jpg?w=992",
                "publishedAt": "2023-10-22T04:06:45Z",
                "content": "BANGKOK -- Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities, state media reported Sunday.\r\nFoxconn, a Taiwanese -h… [+2120 chars]"
            },
            {
                "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                },
                "author": "HUIZHONG WU Associated Press",
                "title": "Apple supplier Foxconn subjected to tax inspections by Chinese authorities",
                "description": "Chinese state media report that Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities",
                "url": "https://abcnews.go.com/International/wireStory/apple-supplier-foxconn-subjected-tax-inspections-chinese-authorities-104202603",
                "urlToImage": "https://i.abcnewsfe.com/a/b6c6da65-e78c-4733-9e78-aeaecefc0dde/wirestory_cba0a0eb5154d6067c00a38575d907b0_16x9.jpg?w=992",
                "publishedAt": "2023-10-22T04:06:40Z",
                "content": "BANGKOK -- Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities, state media reported Sunday.\r\nFoxconn, a Taiwanese -h… [+2120 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "apnews.com",
                "title": "Apple supplier Foxconn subjected to tax inspections by Chinese authorities",
                "description": "Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities, state media reported Sunday. Foxconn, a Taiwanese -headquartered company officially registered as Hon Hai Precision Industry…",
                "url": "https://biztoc.com/x/6b602e7a184d6caf",
                "urlToImage": "https://c.biztoc.com/p/6b602e7a184d6caf/s.webp",
                "publishedAt": "2023-10-22T04:06:31Z",
                "content": "Foxconn, a Fortune 500 company known globally for making Apple iPhones, was recently subjected to searches by Chinese tax authorities, state media reported Sunday.Foxconn, a Taiwanese -headquartered … [+288 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Worldsoccertalk.com"
                },
                "author": "World Soccer Talk",
                "title": "Where to find NC Courage vs Gotham FC on US TV",
                "description": "Here are all of the details of where you can watch NC Courage vs Gotham FC on US television and via legal streaming: WHO NC Courage vs Gotham FC WHAT National Women's Soccer League Playoffs WHEN 7:00pm ET / 4:00pm PT • Sunday, October 22, 2023 WHERE CBS Sport…",
                "url": "https://worldsoccertalk.com/tv/where-to-find-nc-courage-vs-gotham-fc-on-us-tv-20231022-WST-463210.html",
                "urlToImage": "https://worldsoccertalk.com/api/request-image/?proxy=https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.worldsoccertalk.com%2Fjpg%2Ffull%2FWST_20231022_WST_463210_nc-goth-nwsl.jpg[ampersand]width=1200[ampersand]height=740",
                "publishedAt": "2023-10-22T04:05:00Z",
                "content": "Includes: Bundesliga &amp; La Liga\r\nSign Up"
            },
            {
                "source": {
                    "id": null,
                    "name": "Worldsoccertalk.com"
                },
                "author": "World Soccer Talk",
                "title": "Where to find Barcelona vs Athletic Club on US TV",
                "description": "Here are all of the details of where you can watch FC Barcelona vs Athletic Club on US television and via legal streaming: WHO FC Barcelona vs Athletic Club WHAT LaLiga WHEN 3:00pm ET / 12:00pm PT • Sunday, October 22, 2023 WHERE ESPN+, ESPN, ESPN Deportes, F…",
                "url": "https://worldsoccertalk.com/tv/where-to-find-barcelona-vs-athletic-club-on-us-tv-20231022-WST-463209.html",
                "urlToImage": "https://worldsoccertalk.com/api/request-image/?proxy=https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.worldsoccertalk.com%2Fjpg%2Ffull%2FWST_20231022_WST_463209_barca-bilbao-liga.jpg[ampersand]width=1200[ampersand]height=740",
                "publishedAt": "2023-10-22T04:03:00Z",
                "content": "Includes: Bundesliga &amp; La Liga\r\nSign Up"
            },
            {
                "source": {
                    "id": null,
                    "name": "Worldsoccertalk.com"
                },
                "author": "World Soccer Talk",
                "title": "Where to find Pumas vs Monterrey on US TV",
                "description": "Here are all of the details of where you can watch Pumas vs Monterrey on US television and via legal streaming: WHO Pumas vs Monterrey WHAT Liga MX Apertura WHEN 2:00pm ET / 11:00am PT • Sunday, October 22, 2023 WHERE ViX STREAM WATCH NOW With ViX, you can wa…",
                "url": "https://worldsoccertalk.com/tv/where-to-find-pumas-vs-monterrey-on-us-tv-20231022-WST-463208.html",
                "urlToImage": "https://worldsoccertalk.com/api/request-image/?proxy=https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.worldsoccertalk.com%2Fjpg%2Ffull%2FWST_20231022_WST_463208_pumas-mont-mx.jpg[ampersand]width=1200[ampersand]height=740",
                "publishedAt": "2023-10-22T04:02:00Z",
                "content": "Includes: Bundesliga &amp; La Liga\r\nSign Up"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boyculture.com"
                },
                "author": "Matthew Rettenmund",
                "title": "Strip Club's Birthday + Top Pop Song Ever? + Late, Great TV Stars + Kyle Soller's Butt + A Ballet Dancer's Bulging Talent + MORE! — 12-PACK",
                "description": "Strip Club's Birthday + Top Pop Song Ever? + Late, Great TV Stars + Kyle Soller's Butt + A Ballet Dancer's Bulging Talent + MORE! — 12-PACK",
                "url": "https://www.boyculture.com/boy_culture/2023/10/gay-nude-male-strippers-kyle-soller-daniel-landeros-madonna-roseanne-barr.html",
                "urlToImage": null,
                "publishedAt": "2023-10-22T04:01:00Z",
                "content": "ABOVE: William Zabka is aging like fine wine — ain't it a kick?\nBONUS: Vintage tintype that's such a drag! (Image via Peter Miller of New York)\nBELOW: Keep reading for a strip club's birthday, late g… [+2110 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Worldsoccertalk.com"
                },
                "author": "World Soccer Talk",
                "title": "Where to find Aston Villa vs West Ham on US TV",
                "description": "Here are all of the details of where you can watch Aston Villa vs West Ham on US television and via legal streaming: WHO Aston Villa vs West Ham WHAT English Premier League WHEN 11:30am ET / 8:30am PT • Sunday, October 22, 2023 WHERE USA, Telemundo, Fubo, Dir…",
                "url": "https://worldsoccertalk.com/tv/where-to-find-aston-villa-vs-west-ham-on-us-tv-20231022-WST-463207.html",
                "urlToImage": "https://worldsoccertalk.com/api/request-image/?proxy=https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.worldsoccertalk.com%2Fjpg%2Ffull%2FWST_20231022_WST_463207_villa-whu-epl.jpg[ampersand]width=1200[ampersand]height=740",
                "publishedAt": "2023-10-22T04:01:00Z",
                "content": "Includes: Bundesliga &amp; La Liga\r\nSign Up"
            },
            {
                "source": {
                    "id": null,
                    "name": "Worldsoccertalk.com"
                },
                "author": "World Soccer Talk",
                "title": "Where to find Hearts vs Celtic on US TV",
                "description": "Here are all of the details of where you can watch Hearts vs Celtic on US television and via legal streaming: WHO Hearts vs Celtic WHAT Scottish Premiership WHEN 9:15am ET / 6:15am PT • Sunday, October 22, 2023 WHERE Paramount+ FREE TRIAL WATCH NOW Paramount+…",
                "url": "https://worldsoccertalk.com/tv/where-to-find-hearts-vs-celtic-on-us-tv-2-20231022-WST-463206.html",
                "urlToImage": "https://worldsoccertalk.com/api/request-image/?proxy=https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.worldsoccertalk.com%2Fjpg%2Ffull%2FWST_20231022_WST_463206_hearts-celtic-spl.jpg[ampersand]width=1200[ampersand]height=740",
                "publishedAt": "2023-10-22T04:00:00Z",
                "content": "Includes: Bundesliga &amp; La Liga\r\nSign Up"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "1970-01-01T00:00:00Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gadgets360.com"
                },
                "author": "Richa Sharma",
                "title": "Discounts on iPhone 13, OnePlus 11R and More Mobiles on Amazon",
                "description": "Amazon Great Indian Festival sale 2023 is still ongoing will great deals and discounts on a number of electronic products, including smartphones, tablets and laptops. Mobile phones have become a necessity in these days. Be it an iPhone or an Android device, i…",
                "url": "https://www.gadgets360.com/internet/features/top-15-mobile-deals-during-amazon-great-indian-festival-sale-october-2023-4503303",
                "urlToImage": "https://i.gadgets360cdn.com/large/apple_earnings_reuters_1683258333592.jpg",
                "publishedAt": "2023-10-22T03:30:01Z",
                "content": "The ongoing Amazon Great Indian Festival sale 2023 is still live, offering great deals and discounts on a number of products, including smartphones, tablets and laptops. Mobile phones have become a n… [+2915 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "Reuters",
                "title": "Foxconn subsidiaries faces tax audit, land use probe: report",
                "description": "China's natural resources department conducted on-site investigations on the land use of enterprises of Foxconn in Henan, Hubei provinces and other places",
                "url": "https://economictimes.indiatimes.com/tech/technology/foxconn-subsidiaries-faces-tax-audit-land-use-probe-report/articleshow/104619065.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-104619094,width-1200,height-630,imgsize-419162,overlay-ettech/photo.jpg",
                "publishedAt": "2023-10-22T03:25:05Z",
                "content": "Foxconn Technology Group, Apple Inc's largest supplier of iPhones, has been subjected to tax audits at some of its key subsidiaries, suspected of violating laws and regulations, Chinese state media r… [+1378 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "Bloomberg",
                "title": "Stock pickers sidelined with world events overshadowing earnings",
                "description": "The current earnings season is being overshadowed by macroeconomic forces such as conflict in the Middle East and surging Treasury yields. As a result, S&P 500 Index constituents are moving in unison as global events sway the markets. This is making it diffic…",
                "url": "https://economictimes.indiatimes.com/markets/stocks/news/stock-pickers-sidelined-with-world-events-overshadowing-earnings/articleshow/104619020.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-104618997,width-1200,height-630,imgsize-25526,overlay-etmarkets/photo.jpg",
                "publishedAt": "2023-10-22T03:24:58Z",
                "content": "Earnings season typically is the time when investors can look past macroeconomic forces and focus on company-specific news moving stocks. This quarter, however, is turning out to be anything but typi… [+3742 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "wsj.com",
                "title": "Google and Apple Want You to Log In With Passkeys. Here’s What That Means",
                "description": "The biggest tech companies want you to ditch passwords for passkeys. You’re probably wondering: What even is a passkey? And do I have to use it? It’s a new type of login that uses cryptographic magic on your phone or laptop. Passkeys are safer than typing “pa…",
                "url": "https://biztoc.com/x/a456d69ecd1a43c8",
                "urlToImage": "https://c.biztoc.com/p/a456d69ecd1a43c8/s.webp",
                "publishedAt": "2023-10-22T03:04:07Z",
                "content": "The biggest tech companies want you to ditch passwords for passkeys. Youre probably wondering: What even is a passkey? And do I have to use it?Its a new type of login that uses cryptographic magic on… [+208 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Everything-everywhere.com"
                },
                "author": "Gary Arndt",
                "title": "The Magna Carta",
                "description": "Podcast Transcript In the early 13th century, England suffered through the worst monarch it would have in its history: King John. John and his arbitrary policies and high taxation angered the nobility, the church, and the common people.  However, out of his d…",
                "url": "https://everything-everywhere.com/the-magna-carta/",
                "urlToImage": "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-pvQvZ57/0/9dc93c44/L/1202episodeart-L.jpg",
                "publishedAt": "2023-10-22T03:00:53Z",
                "content": "Subscribe Apple | Google | Spotify | Amazon | Player.FM | TuneInCastbox | Podurama | Podcast Republic | RSS | Patreon\r\nIn the early 13th century, England suffered through the worst monarch it would h… [+12972 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gadgets360.com"
                },
                "author": "Gadgets 360 Staff",
                "title": "Amazon Great Indian Festival: Best Deals on Smartwatches",
                "description": "The Amazon Great Indian Festival sale is ongoing, bringing deep discounts and value-for-money offers on a wide variety of products and electronic devices. Smartphones, of course, are the major draw, but laptops, gaming consoles, tablets, PCs, computer accesso…",
                "url": "https://www.gadgets360.com/internet/features/amazon-great-indian-festival-best-deals-on-smartwatches-samsung-galaxy-watch-4-apple-watch-se-2-amazfit-pop-3s-4500997",
                "urlToImage": "https://i.gadgets360cdn.com/large/galaxy_watch_4_samsung_1694499272509.jpg",
                "publishedAt": "2023-10-22T03:00:01Z",
                "content": "The Amazon Great Indian Festival sale is ongoing, bringing deep discounts and value-for-money offers on a wide variety of products and electronic devices. Smartphones are the major draw during the Am… [+2601 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Investing.com"
                },
                "author": "Reuters",
                "title": "Foxconn faces tax audit, land use probe - Chinese state media",
                "description": "Foxconn faces tax audit, land use probe - Chinese state media",
                "url": "https://www.investing.com/news/stock-market-news/foxconn-faces-tax-audit-land-use-probe--chinese-state-media-3204922",
                "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEB9606Q_L.jpg",
                "publishedAt": "2023-10-22T02:50:28Z",
                "content": "BEIJING (Reuters) - Foxconn Technology Group, Apple Inc (NASDAQ:AAPL)'s largest supplier of iPhones, has been subjected to tax audits at some of its key subsidiaries, suspected of violating laws and … [+990 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNA"
                },
                "author": null,
                "title": "Foxconn faces tax audit, land use probe - Chinese state media",
                "description": "BEIJING : Foxconn Technology Group, Apple Inc's largest supplier of iPhones, has been subjected to tax audits at some of its key subsidiaries, suspected of violating laws and regulations, Chinese state media reported on Sunday.China's natural resources depart…",
                "url": "https://www.channelnewsasia.com/business/foxconn-faces-tax-audit-land-use-probe-chinese-state-media-3864296",
                "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--4X1Vc-l5--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-10-22t024521z_1_lynxmpej9l00o_rtroptp_3_foxconn-china.jpg?itok=C6kXt6Dq",
                "publishedAt": "2023-10-22T02:45:21Z",
                "content": "BEIJING : Foxconn Technology Group, Apple Inc's largest supplier of iPhones, has been subjected to tax audits at some of its key subsidiaries, suspected of violating laws and regulations, Chinese sta… [+966 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNA"
                },
                "author": null,
                "title": "Foxconn faces tax audit, land use probe, Chinese state media reports",
                "description": "BEIJING : Taiwan's Foxconn, the largest supplier of Apple iPhones, is the subject of tax audits in China at some of its key subsidiaries, suspected of violating laws and regulations, Chinese state media reported on Sunday.China's natural resources department …",
                "url": "https://www.channelnewsasia.com/business/foxconn-faces-tax-audit-land-use-probe-chinese-state-media-reports-3864296",
                "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--4X1Vc-l5--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-10-22t024521z_1_lynxmpej9l00o_rtroptp_3_foxconn-china.jpg?itok=C6kXt6Dq",
                "publishedAt": "2023-10-22T02:45:21Z",
                "content": "BEIJING : Taiwan's Foxconn, the largest supplier of Apple iPhones, is the subject of tax audits in China at some of its key subsidiaries, suspected of violating laws and regulations, Chinese state me… [+1067 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Marketscreener.com"
                },
                "author": null,
                "title": "Foxconn faces tax audit, land use probe - Chinese state media",
                "description": "(marketscreener.com) Foxconn Technology Group\n, Apple Inc's largest supplier of iPhones, has\nbeen subjected to tax audits at some of its key subsidiaries,\nsuspected of violating laws and regulations, Chinese state media\nreported on Sunday.\n China's natural re…",
                "url": "https://www.marketscreener.com/quote/stock/HON-HAI-PRECISION-INDUSTR-6492357/news/Foxconn-faces-tax-audit-land-use-probe-Chinese-state-media-45120357/",
                "urlToImage": "https://www.marketscreener.com/images/reuters/2023-09/2023-09-17T142308Z_1_LYNXMPEJ8G04O_RTROPTP_3_FOXCONN-CHINA.JPG",
                "publishedAt": "2023-10-22T02:39:15Z",
                "content": "BEIJING, Oct 22 (Reuters) - Foxconn Technology Group\r\n, Apple Inc's largest supplier of iPhones, has\r\nbeen subjected to tax audits at some of its key subsidiaries,\r\nsuspected of violating laws and re… [+1073 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MacRumors"
                },
                "author": "Tim Hardwick",
                "title": "Apple's Unreleased HomePod With a Display Allegedly Shown in Images",
                "description": "Apple is rumored to be developing a new HomePod with a screen, and new images shared online allegedly give us a first glimpse of the new smart speaker.\n\n\n\n\n\nThe above image appears to show a HomePod similar in size to the second-generation HomePod that was la…",
                "url": "https://www.macrumors.com/2023/10/21/images-show-new-homepod-with-screen/",
                "urlToImage": "https://images.macrumors.com/t/OxshlYPjHD4S1Ud_MuiX0xETylA=/1920x/article-new/2023/10/lcd-screen-homepod-kosutami.jpg",
                "publishedAt": "2023-10-22T02:24:03Z",
                "content": "Apple is rumored to be developing a new HomePod with a screen, and new images shared online allegedly give us a first glimpse of the new smart speaker.\r\nThe above image appears to show a HomePod simi… [+2218 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "thewrap.com",
                "title": "Reese Witherspoon Says Women’s Stories Are ‘Good Business’: ‘People Are Starving For It’",
                "description": "Reese Witherspoon emphasized that she and her production company Hello Sunshine go after women’s stories on purpose at Hello Sunshine’s very first Shine Away event, a conference between the different brands under Hello Sunshine as well as authors of previous …",
                "url": "https://biztoc.com/x/b629a4f216df6445",
                "urlToImage": "https://c.biztoc.com/p/b629a4f216df6445/s.webp",
                "publishedAt": "2023-10-22T02:18:06Z",
                "content": "Reese Witherspoon emphasized that she and her production company Hello Sunshine go after womens stories on purpose at Hello Sunshines very first Shine Away event, a conference between the different b… [+324 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "TheWrap"
                },
                "author": "Dessi Gomez",
                "title": "Reese Witherspoon Says Women’s Stories Are ‘Good Business’: ‘People Are Starving For It’",
                "description": "The actress-producer also discusses the November Reese's Book Club pick and at at Hello Sunshine’s Shine Away conference on Saturday\nThe actress-producer also discusses the November Reese's Book Club pick and at at Hello Sunshine’s Shine Away conference on Sa…",
                "url": "http://www.thewrap.com/reese-witherspoon-says-womens-stories-are-good-business-shine-away/",
                "urlToImage": "https://www.thewrap.com/wp-content/uploads/2021/05/reese.jpg",
                "publishedAt": "2023-10-22T02:01:07Z",
                "content": "Reese Witherspoon emphasized that she and her production company Hello Sunshine go after womens stories on purpose at Hello Sunshines very first Shine Away event, a conference between the different b… [+4379 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Screen Rant"
                },
                "author": "Erin Johnson",
                "title": "Long Shot Soundtrack Guide: Every Song In The Movie & When It Plays",
                "description": "The romantic comedy Long Shot has an upbeat and emotional soundtrack to complement Fred and Charlotte's unconventional yet remarkable love story.",
                "url": "https://screenrant.com/long-shot-soundtrack-song-guide/",
                "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/long-shot-soundtrack-song-guide.jpg",
                "publishedAt": "2023-10-22T01:40:16Z",
                "content": "Summary\r\n<ul><li> The soundtrack of Long Shot is filled with both modern and nostalgic tunes that perfectly complement the romantic journey of the lead characters. </li><li> The songs in the movie ra… [+6491 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Ozbargain.com.au"
                },
                "author": "AkuroPlays",
                "title": "Apple AirPods (2nd Generation) $164 Delivered @ Amazon AU",
                "description": "Amazon is currently selling Apple AirPods (2nd Gen) from the original price of $219 to $164, a 25% off deal.\n\nAlso noticeably, beating a previous price drop in June by $4.\n\nEnjoy!",
                "url": "https://www.ozbargain.com.au/node/807083",
                "urlToImage": "https://files.ozbargain.com.au/n/83/807083x.jpg?h=cfdd33ef",
                "publishedAt": "2023-10-22T01:37:12Z",
                "content": "True! Better deal than this one if you got a hold of the 15% off Celebration Gift Cards @ Coles (Until 24th Oct 2023)\r\nYou'd be saving $24.60 + Extra Flybuys Points when shopping at Officeworks if st… [+321 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Freerepublic.com"
                },
                "author": "Food and Wine",
                "title": "From Johnny Appleseed to Cosmic Crisp, Here’s Everything You Need to Know About Apples in America Right Now",
                "description": "There's never been a better time to eat — and cook with — American apple varieties.One day in 2004, Brooke Hazen noticed something unusual about one of his Golden Delicious apple trees. “Some people are lucky enough in their career to have their own bud mutat…",
                "url": "https://freerepublic.com/focus/f-chat/4191377/posts",
                "urlToImage": null,
                "publishedAt": "2023-10-22T01:31:57Z",
                "content": "Skip to comments.\r\nFrom Johnny Appleseed to Cosmic Crisp, Heres Everything You Need to Know About Apples in America Right NowFood and Wine ^\r\n | October 10, 2023\r\n | Betsy Andrews\r\nPosted on 10/21/20… [+12498 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Independent.ie"
                },
                "author": "Lucy White",
                "title": "Three spook-tacular podcasts to get you in the Halloween spirit",
                "description": "Halloween is drawing near which means terrestrial TV, streamers and cinema are each pushing out their ‘spooky’ content to get us into the witchy mood. This week’s column is no different, gathering a treat of terrors and tricks.",
                "url": "https://www.independent.ie/entertainment/radio/three-spook-tacular-podcasts-to-get-you-in-the-halloween-spirit/a1885002596.html",
                "urlToImage": "https://focus.independent.ie/thumbor/FR9xbkNWV8Prjubbvr_J5z98ZNw=/7x0:5998x3992/5991x3992/prod-mh-ireland/211ed07a-cf65-4374-9c52-d1141c3c7af0/a506861d-ee2e-4b1e-91d7-d974ca736125/211ed07a-cf65-4374-9c52-d1141c3c7af0.jpg",
                "publishedAt": "2023-10-22T01:30:00Z",
                "content": "Halloween is drawing near which means terrestrial TV, streamers and cinema are each pushing out their spooky content to get us into the witchy mood. This weeks column is no different, gathering a tre… [+884 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Daily Beast"
                },
                "author": "The Daily Beast",
                "title": "How the Pentagon Changed the Plot of ‘Top Gun’",
                "description": "Photo Illustration by Erin O'Flynn/The Daily Beast/Getty Images and Paramount Pictures\r\nListen to this full episode of The New Abnormal on Apple Podcasts, Spotify, Amazon and Stitcher.Did you know that Charlie Blackwood, Kelly McGillis’ character in Top Gun, …",
                "url": "https://www.thedailybeast.com/the-new-abnormal-talks-to-walter-hickey-about-how-the-pentagon-changed-top-gun-and-how-movies-impact-us",
                "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1697910811/231021-tna-bonus-top-gun-pentagon-hero_flsfrv",
                "publishedAt": "2023-10-22T01:29:03Z",
                "content": "Listen to this full episode of The New Abnormal on Apple Podcasts, Spotify, Amazon and Stitcher.\r\nDid you know that Charlie Blackwood, Kelly McGillis character in Top Gun, was originally meant to be … [+1974 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Erickimphotography.com"
                },
                "author": "ERIC KIM",
                "title": "NEW PARENT TIPS",
                "description": "Advice I just gave some (to be expecting): Early potty training. 5 months is a good time to start. When you play with your kid or go to the park, just leave the phone locked up in the car, glove compartment etc. Uppababy stuff is the best; car seat, stroller …",
                "url": "https://erickimphotography.com/blog/2023/10/21/new-parent-tips/",
                "urlToImage": null,
                "publishedAt": "2023-10-22T01:26:28Z",
                "content": "Advice I just gave some (to be expecting):\r\n<ol><li>Early potty training. 5 months is a good time to start.</li><li>When you play with your kid or go to the park, just leave the phone locked up in th… [+1082 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slickdeals.net"
                },
                "author": "Eragorn",
                "title": "New & Select Returning Subscribers: 4-Months of Apple Music, Arcade, News+ Free & More (5-Months for Total/Plus Members)",
                "description": "Best Buy offers select Apple Trial Subscription Services for Free listed below valid for New or Select Returning Subscribers only.\r\n\r\nThanks to Slickdeals Staff Eragorn for finding this deal.\r\n\r\nNote: ...",
                "url": "https://slickdeals.net/f/17006851-new-select-returning-subscribers-4-months-of-apple-music-arcade-news-free-more-5-months-for-total-plus-members",
                "urlToImage": "https://static.slickdealscdn.com/attachment/1/4/8/5/3/3/0/14404696.attach",
                "publishedAt": "2023-10-22T01:21:52Z",
                "content": "I've used a bunch of these Best Buy free promos. I think I reached my limit because I ordered a MacBook and it came with a similar free 3 months and it didn't work. I have total tech and got the 5 mo… [+76 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slickdeals.net"
                },
                "author": "Eragorn",
                "title": "New & Returning Subscribers: 4-Months of Apple Music, Arcade, News+ Free and More (5-Months for Total/Plus Members)",
                "description": "Best Buy offers select Apple Trial Subscription Services for Free listed below valid for New or Select Returning Subscribers only. \n \nAvailable Offers: \n \n4-Month Apple Music Trial Subscription Free \n ...",
                "url": "https://slickdeals.net/f/17006851-new-returning-subscribers-4-months-of-apple-music-arcade-news-free-and-more-5-months-for-total-plus-members",
                "urlToImage": "https://static.slickdealscdn.com/attachment/1/4/8/5/3/3/0/14404696.attach",
                "publishedAt": "2023-10-22T01:21:52Z",
                "content": "Are you sure you want to report this deal as expired? This will send the deal to our moderators for review. \r\n If you'd like to report this thread for another reason (spam, repost, etc.) please use t… [+17 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slickdeals.net"
                },
                "author": "Eragorn",
                "title": "New & Select Returning Subscribers: 4-Months of Apple Music, Arcade, News+ Free and More (5-Months for Total/Plus Members)",
                "description": "Best Buy offers select Apple Trial Subscription Services for Free listed below valid for New or Select Returning Subscribers only. \n \nAvailable Offers: \n \n4-Month Apple Music Trial Subscription Free \n ...",
                "url": "https://slickdeals.net/f/17006851-new-select-returning-subscribers-4-months-of-apple-music-arcade-news-free-and-more-5-months-for-total-plus-members",
                "urlToImage": "https://static.slickdealscdn.com/attachment/1/4/8/5/3/3/0/14404696.attach",
                "publishedAt": "2023-10-22T01:21:52Z",
                "content": "I've used a bunch of these Best Buy free promos. I think I reached my limit because I ordered a MacBook and it came with a similar free 3 months and it didn't work. I have total tech and got the 5 mo… [+76 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "wsj.com",
                "title": "Google and Apple Want You to Log In With Passkeys. Here’s What That Means",
                "description": "The biggest tech companies want you to ditch passwords for passkeys. You’re probably wondering: What even is a passkey? And do I have to use it? It’s a new type of login that uses cryptographic magic on your phone or laptop. Passkeys are safer than typing “pa…",
                "url": "https://biztoc.com/x/b54d9818ba73cb61",
                "urlToImage": "https://c.biztoc.com/p/b54d9818ba73cb61/s.webp",
                "publishedAt": "2023-10-22T01:12:06Z",
                "content": "The biggest tech companies want you to ditch passwords for passkeys. Youre probably wondering: What even is a passkey? And do I have to use it?Its a new type of login that uses cryptographic magic on… [+208 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "PennLive"
                },
                "author": "Chris Mautner",
                "title": "Jon Stewart, Apple part ways due to disagreements over China, Israel coverage: reports",
                "description": "The company reportedly had concerns about the topics Stewart planned to discuss in the new season, including China, Israel and artificial intelligence.",
                "url": "https://www.pennlive.com/entertainment/2023/10/jon-stewart-apple-part-ways-due-to-disagreements-over-china-israel-coverage-reports.html",
                "urlToImage": "https://www.pennlive.com/resizer/jfIGmEJJPLZsZb7KDVge7V2AklU=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/KXJZR6LPOBCEDGPLADQSEWQNPE.webp",
                "publishedAt": "2023-10-22T01:01:40Z",
                "content": "Jon Stewarts show, The Problem with Jon Stewart will not be returning for a third season on Apple TV, according to multiple media reports. \r\nThe former Daily Show host told his staff that he and Appl… [+884 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "SlashGear"
                },
                "author": "Ketaki Bhojnagarwala",
                "title": "How To Unpair An Apple Watch Without The iPhone It's Connected To",
                "description": "If you don&amp;#39;t have access to your iPhone, there&amp;#39;s a way to unpair directly on the Apple Watch. You can also delink it remotely if you&amp;#39;ve already given it away.",
                "url": "https://www.slashgear.com/1422391/how-to-unpair-an-apple-watch-without-iphone/",
                "urlToImage": "https://www.slashgear.com/img/gallery/how-to-unpair-an-apple-watch-without-the-iphone-its-connected-to/l-intro-1697526544.jpg",
                "publishedAt": "2023-10-22T01:01:36Z",
                "content": "The Apple Watch is an extension of your iPhone, letting you access calls, messages, apps, and notifications from your wrist. Even a cellular Apple Watch needs to be set up and paired with an iPhone b… [+850 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Daily Dot"
                },
                "author": "Melody Heald",
                "title": "‘Willingness to work overtime and weekends on short notice’: Worker blasts job demanding, degree-requiring listing from major media company that pays $16.50",
                "description": "Job applicants have been putting companies on blast for having high standards and requirements but offering barely above minimum wage. A TikTok user is joining that chorus by calling out NBC for demanding so many requirements and responsibilities—for a measly…",
                "url": "https://www.dailydot.com/news/job-listing-demands-degree-starts-16-dollars-an-hour/",
                "urlToImage": "https://uploads.dailydot.com/2023/10/Job-Request.jpg?auto=compress&fm=pjpg",
                "publishedAt": "2023-10-22T00:47:09Z",
                "content": "Job applicants have been putting companies on blast for having high standards and requirements but offering barely above minimum wage. A TikTok user is joining that chorus by calling out NBC for dema… [+2801 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "HuffPost"
                },
                "author": "AP",
                "title": "Martin Scorsese Still Curious At 80 As Latest Epic Hits Theaters",
                "description": "“Killers of the Flower Moon” is an audacious big swing by Martin Scorsese to continue his kind of ambitious, personal filmmaking on the largest scale.",
                "url": "https://www.huffpost.com/entry/film-martin-scorsese-killers-of-the-flower-moon_n_65346cade4b011a9cf79c2a9",
                "urlToImage": "https://img.huffingtonpost.com/asset/65346dd6230000430b54abb8.jpeg?cache=Vqva35j1l0&ops=1200_630",
                "publishedAt": "2023-10-22T00:40:12Z",
                "content": "US film director Martin Scorsese arrives for Apple Original Films' \"Killers of the Flower Moon\" Los Angeles premiere at the Dolby theatre in Hollywood, California, October 16, 2023. (Photo by VALERIE… [+8867 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "feedfeeder",
                "title": "Apple is repeating a major mistake from its past with the Vision Pro - Digital Trends",
                "description": "Apple is repeating a major mistake from its past with the Vision ProDigital Trends  If you&rsquo;re excited about what the Apple Vision Pro promises, just wait until you see the Vision Pro 2Softonic EN   View Full Coverage on Google News   ...",
                "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172072705",
                "urlToImage": null,
                "publishedAt": "2023-10-22T00:33:45Z",
                "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MMA Fighting"
                },
                "author": "MMA Fighting Newswire",
                "title": "UFC 294 post-fight show: Reaction to Makhachev’s stunning knockout, Chimaev’s return",
                "description": "MMA Fighting reacts to Islam Makhachev’s brutal finish of Alexander Volkanovski, Khamzat Chimaev’s win, and more from a wild UFC 294 event.",
                "url": "https://www.mmafighting.com/2023/10/21/23926864/ufc-294-post-fight-show-reaction-to-islam-makhachevs-stunning-knockout-khamzat-chimaevs-return",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/dgH7r3Mobk2OKq8qLkuxWo095d0=/0x0:4455x2332/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25021597/1748862149.jpg",
                "publishedAt": "2023-10-22T00:33:39Z",
                "content": "Photo by Chris Unger/Zuffa LLC via Getty Images\r\n\n \n\n Islam Makhachev got his closure against Alexander Volkanovski, and he did it in incredibly brutal fashion as he knocked the featherweight champio… [+1031 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slickdeals.net"
                },
                "author": "wooyeom",
                "title": "Mac Studio M1 Max at Costco YMMV $999.97",
                "description": "In-store only. Dropped from $1299.97 to $999.97 \n \nApple M1 Max Chip \n \n10-core CPU with 8 performance cores and 2 efficiency cores \n \n24-core GPU \n \n16-core Neural Engine",
                "url": "https://slickdeals.net/f/17006776-mac-studio-m1-max-at-costco-ymmv-999-97",
                "urlToImage": "https://slickdeals.net/images/avatar/sd/new/sd-facebook-5-2.png",
                "publishedAt": "2023-10-22T00:26:54Z",
                "content": "In-store only. Dropped from $1299.97 to $999.97Apple M1 Max Chip\r\n10-core CPU with 8 performance cores and 2 efficiency cores\r\n24-core GPU\r\n16-core Neural Engine\r\n400GB/s memory bandwidth\r\n32GB RAM (… [+438 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "feedfeeder",
                "title": "If you’re excited about what the Apple Vision Pro promises, just wait until you see the Vision Pro 2 - Softonic EN",
                "description": "If you&rsquo;re excited about what the Apple Vision Pro promises, just wait until you see the Vision Pro 2Softonic EN  Apple is repeating a major mistake from its past with the Vision ProDigital Trends   View Full Coverage on Google News   ...",
                "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172072439",
                "urlToImage": null,
                "publishedAt": "2023-10-22T00:14:13Z",
                "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "C-sharpcorner.com"
                },
                "author": "Sarathlal Saseendran",
                "title": "Easily Record An Audio In Angular 16 And Save It As WAV Format",
                "description": "In this post, we will see how to record an audio in Angular 16 from microphone and save it as WAV format.",
                "url": "https://www.c-sharpcorner.com/article/easily-record-an-audio-in-angular-16-and-save-it-as-wav-format/",
                "urlToImage": "https://www.c-sharpcorner.com/images/csharp-corner.png",
                "publishedAt": "2023-10-22T00:00:00Z",
                "content": "Introduction \r\nThe full form of WAV is \"Waveform Audio File Format.\" It is standard for storing an audio bitstream on computers. Developed by IBM and Microsoft, the WAV format is based on the Resourc… [+13236 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Notebookcheck.net"
                },
                "author": "Sanjiv Sathiah",
                "title": "Exclusive: Geekbench founder responds to Pixel 8 benchmark blocking controversy",
                "description": "Geekbench 6 founder John Poole has responded to the Pixel 8 and Pixel 8 Pro benchmarking controversy. In exclusive comments obtained by Notebookcheck, Poole says Primate Labs is unaware of any issues with compatibility that might have otherwise resulted in th…",
                "url": "https://www.notebookcheck.net/Exclusive-Geekbench-founder-responds-to-Pixel-8-benchmark-blocking-controversy.761277.0.html",
                "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Screenshot-2023-10-22-at-10.07.34am.png",
                "publishedAt": "2023-10-21T23:41:00Z",
                "content": "Notebookcheck recently broke the story about the fact that Google appears to have blocked writers reviewing its new Pixel 8 and Pixel 8 Pro devices from being able to easily install popular benchmark… [+6405 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "9to5Mac"
                },
                "author": "Filipe Espósito",
                "title": "Apple actively working on new HomePod with an LCD screen on top, sources say",
                "description": "Apple this year introduced the second generation HomePod, two years after discontinuing the first generation of its full-size smart speaker. Since then, there have been rumors about Apple developing many HomePod prototypes, some of them with an LCD display. P…",
                "url": "https://9to5mac.com/2023/10/21/new-homepod-lcd-display/",
                "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/HomePod-LCD-prototype.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2023-10-21T23:40:32Z",
                "content": "Apple this year introduced the second generation HomePod, two years after discontinuing the first generation of its full-size smart speaker. Since then, there have been rumors about Apple developing … [+2531 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "redmondpie.com"
                },
                "author": "RP Staff",
                "title": "Halloween ’23 Microsoft Software Sale: Get Windows 11 Pro Genuine License For Only $20, Microsoft Office For Just $28, Windows 10 For $14, And More",
                "description": "You need never pay full price for Microsoft software again with the folks at SCDKey offering some big savings across a range of releases. And now the outfit is offering eve bigger discounts when you enter our special code at checkout.\nThe post Halloween ’23 M…",
                "url": "https://www.redmondpie.com/halloween-23-microsoft-software-sale-get-windows-11-pro-genuine-license-for-only-20-microsoft-office-for-just-28-windows-10-for-14-and-more/",
                "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2023/10/175-1.png",
                "publishedAt": "2023-10-21T23:32:13Z",
                "content": "You need never pay full price for Microsoft software again with the folks at SCDKey offering some big savings across a range of releases. And now the outfit is offering eve bigger discounts when you … [+725 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yanko Design"
                },
                "author": "Srishti Mitra",
                "title": "Top 10 Eco-Friendly Designs To Incorporate In Your Home To Support A Green Lifestyle",
                "description": "Top 10 Eco-Friendly Designs To Incorporate In Your Home To Support A Green LifestyleOur unhealthy practices and way of living are truly harmful to the environment and have been slowly leading to its deterioration. And the world has...",
                "url": "https://www.yankodesign.com/2023/10/21/top-10-eco-friendly-designs-to-incorporate-in-your-home-to-support-a-green-lifestyle/",
                "urlToImage": "https://www.yankodesign.com/images/design_news/2023/10/top-10-eco-friendly-designs-to-incorporate-in-your-home-to-support-a-green-lifestyle/top_10_eco_friendly_designs_yanko_design_hero.jpeg",
                "publishedAt": "2023-10-21T23:30:46Z",
                "content": "Our unhealthy practices and way of living are truly harmful to the environment and have been slowly leading to its deterioration. And the world has been changing (for the worse) because of this. Henc… [+8492 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "redmondpie.com"
                },
                "author": "RP Staff",
                "title": "Latest: 4 Ways To Unlock iPhone 15 Without Passcode",
                "description": "This latest method works! Here are 4 ways to unlock your iPhone 15 without passcode the easy way.\nThe post Latest: 4 Ways To Unlock iPhone 15 Without Passcode first appeared on Redmond Pie.",
                "url": "https://www.redmondpie.com/latest-4-ways-to-unlock-iphone-15-without-passcode/",
                "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2023/09/iPhone-15-pro.jpg",
                "publishedAt": "2023-10-21T23:25:01Z",
                "content": "The iPhone 15 has just been released, and you may have forgotten your passcode or want to bypass it to access the phone. While there are legitimate reasons to unlock your iPhone without a passcode, i… [+6561 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Forbes"
                },
                "author": "Brittany Anas, Contributor, \n Brittany Anas, Contributor\n https://www.forbes.com/sites/brittanyanas/",
                "title": "Why It Can Be So Difficult To Identify Bed Bugs, According To Pest Experts",
                "description": "Only 16 percent of people are confident they can recognize bed bugs, according to a new  survey from YouGuv. Here's how to spot bed bugs in your hotel and when traveling.",
                "url": "https://www.forbes.com/sites/brittanyanas/2023/10/21/why-it-can-be-so-difficult-to-identify-bed-bugs-according-to-pest-experts/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65345a4cda4fea2a18b0fd77/0x0.jpg?format=jpg&crop=2508,1411,x0,y129,safe&height=900&width=1600&fit=bounds",
                "publishedAt": "2023-10-21T23:17:11Z",
                "content": "An adult bed bug is the size of apple seed.\r\ngetty\r\nIf youre a frequent traveler, youre probably well aware of the recent bed bug infestations in major cities like Paris and Las Vegas. But would you … [+4720 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Punch"
                },
                "author": "Dr. Sylvester Ikhisemojie",
                "title": "Dealing with skin tags",
                "description": "A skin tag is a soft piece of tiny skin tissue that may have a stalk. That stalk is also known as a peduncle. It is also known as acrochordons and may affect as much as 60 per cent of the population. The blood supply to the tag often flows through that pedunc…",
                "url": "https://punchng.com/dealing-with-skin-tags/",
                "urlToImage": null,
                "publishedAt": "2023-10-21T23:05:57Z",
                "content": "A skin tag is a soft piece of tiny skin tissue that may have a stalk. That stalk is also known as a peduncle. It is also known as acrochordons and may affect as much as 60 per cent of the population.… [+12637 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Independent.ie"
                },
                "author": "Paul Whitington and Sheena McGinley",
                "title": "What to watch on TV, Netflix, Apple TV+, Prime and Disney+ today: The Devil’s Confession, Joaquin Phoenix in Joker and Frasier reboot",
                "description": "Planning a night on the couch? Here are the top picks for today’s TV and streaming options.",
                "url": "https://www.independent.ie/entertainment/television/what-to-watch-on-tv-netflix-apple-tv-prime-and-disney-today-the-devils-confession-joaquin-phoenix-in-joker-and-frasier-reboot/a362673296.html",
                "urlToImage": "https://focus.independent.ie/thumbor/L9IGWsengXv26oclDJYQedcK6ak=/37x0:459x281/422x281/prod-mh-ireland/679424b5-fc57-4bd7-a236-37315acb11ea/681653ca-5456-40c6-a131-ddf7cdca20a7/679424b5-fc57-4bd7-a236-37315acb11ea.jpg",
                "publishedAt": "2023-10-21T23:00:00Z",
                "content": "Planning a night on the couch? Here are the top picks for todays TV and streaming options.The Devils Confession: The Lost Eichmann TapesBBC2, 9pm On January 20, 1942, senior Nazi Reinhard Heydrich ho… [+5551 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Dark Horizons"
                },
                "author": "Garth Franklin",
                "title": "Scorsese May Co-Direct “The Wager”",
                "description": "With filmmaker Martin Scorsese turning 81 next month, age is catching up to him and he’s aware of it. During promotion for his new film “Killers of the Flower Moon,” he’s suggested he may only have “one or two more films” in him left, but plans to keep going …",
                "url": "https://www.darkhorizons.com/scorsese-may-co-direct-the-wager/",
                "urlToImage": "https://cdndh.darkhorizons.com/wp-content/uploads/2023/10/scorsese-may-co-direct-the-wager.jpg",
                "publishedAt": "2023-10-21T22:52:36Z",
                "content": "With filmmaker Martin Scorsese turning 81 next month, age is catching up to him and he’s aware of it.\r\nDuring promotion for his new film “Killers of the Flower Moon,” he’s suggested he may only have … [+1589 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Notebookcheck.net"
                },
                "author": "Hannes Brecher",
                "title": "Apple iPhone 13, iPhone 14 and iPhone 15 Pro get color E ink secondary display via the Reink Case C1",
                "description": "The Reink Case C1 adds a color E ink display onto the back of an Apple iPhone. Both communication and power are supplied via the NFC chip, so the case never needs to be charged and power consumption is minimal.",
                "url": "https://www.notebookcheck.net/Apple-iPhone-13-iPhone-14-and-iPhone-15-Pro-get-color-E-ink-secondary-display-via-the-Reink-Case-C1.761275.0.html",
                "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_15_E-Ink.jpg",
                "publishedAt": "2023-10-21T22:17:00Z",
                "content": "E ink specialist Reink Stone is offering one of the most unusual protective cases for the Apple iPhone in the Reink Case C1, for it features a 3.7-inch E ink display on the back that can reproduce im… [+467 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Freerepublic.com"
                },
                "author": "Daily Mail",
                "title": "Seattle lawmaker (Kshama Sawant) furiously denies her support for defunding the police is to blame for soaring crime in city, after children were forced to CRAWL inside a daycare facility following drive-by shooting",
                "description": "A Seattle lawmaker has furiously denied her support for defunding the police is to blame for soaring crime in the city. Council member Kshama Sawant said the city should not add police resources to the Central District neighborhood after 24 children had to cr…",
                "url": "https://freerepublic.com/focus/f-chat/4191344/posts",
                "urlToImage": null,
                "publishedAt": "2023-10-21T22:13:20Z",
                "content": "Skip to comments.\r\nSeattle lawmaker (Kshama Sawant) furiously denies her support for defunding the police is to blame for soaring crime in city, after children were forced to CRAWL inside a daycare f… [+3763 chars]"
            }
        ]
    }


    
    const result = isLocalApi ? articlesData : articlesData.articles;

    // Convert the articles data to Article objects.
    const articles = result.map((articleData) => {

        const article = new Article(
            articleData.title,
            articleData.description,
            articleData.url,
            articleData.urlToImage,
            articleData.publishedAt,
            articleData.author,
            articleData.content,
            articleData.source.id,
            articleData.source.name,
        );

        return article;
    });

    return articles;
}

function getLocalApiURL(isLocalApi, query, language, from, sortBy){
    if(isLocalApi)
        return `${process.env.LOCAL_API_URL}?query=${query}&language=${language}`;
    
    return `${process.env.API_URL}?q=${query}&language=${language}&from=${from}&sortBy=${sortBy}&apiKey=${process.env.API_KEY}`;
}