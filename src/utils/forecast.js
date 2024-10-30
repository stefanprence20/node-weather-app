const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.tomorrow.io/v4/weather/forecast?location='+latitude+','+longitude+'&units=metric&apikey=QlypG6M98WNdPetGERirxskwYGgbBIxp'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to service!')
        } else if (body.code) {
            callback('Unable to find location!')
        } else {
            const currently = body.timelines.minutely[0].values
            callback(undefined, 'It is currently '+currently.temperature+' degrees out. There is a '+currently.precipitationProbability+'% chance of rain.')
        }
    })
}

module.exports = forecast