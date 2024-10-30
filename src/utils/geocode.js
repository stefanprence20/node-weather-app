const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/autocomplete?text='+encodeURIComponent(address)+'&apiKey=3bda78e34f534a36a0a5c4b8d6a4501c&limit=1'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to service!')
        } else if (!body.features.length) {
            callback('Unable to find location. Try another search.')
        } else {
            const data = body.features[0].properties
            callback(undefined, {
                latitude: data.lat,
                longitude: data.lon,
                location: data.formatted 
            })
        }
    })
}

module.exports = geocode