const got = require('got');
const config = require('../config.json');
const qs = require('qs');

module.exports = {
    getPlaces: async () => {
        let response = await got(config.ApiUrl + '/geo/v1.0?apikey=' + config.ApiKey);

        return JSON.parse(response.body);
    },
    getFlights: async (cabinclass, country, currency, language, fromDist, toDist, fromDate, toDate, adults, children, infants) => {
        try {
            let postData = {
                cabinclass: cabinclass,
                country: country,
                currency: currency,
                locale: language,
                locationSchema: 'iata',
                originplace: fromDist,
                destinationplace: toDist,
                outbounddate: fromDate,
                inbounddate: toDate,
                adults: adults,
                children: children,
                infants: infants,
                apikey: config.ApiKey
            }

            let response = await got.default.post(config.ApiUrl + '/pricing/v1.0', 
                { 
                    headers:{ 
                        'Content-Type' : 'application/x-www-form-urlencoded' 
                    }, 
                    body: qs.stringify(postData),
		            responseType: 'json'
                }
            );

            let location = response.headers.location;

            response = await got(location + '?apikey=' + config.ApiKey);

            return JSON.parse(response.body);
        } catch (e) {
            console.log(e);
        }
    }
}