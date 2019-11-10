const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/cf53ea46ec8f37c439ba5b473cbc930b/' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + 
            body.currently.temperature + ' degrees out. There is a ' + 
            body.currently.precipProbability + '% chance of rain. \nThe highest temperature today is ' + 
            body.daily.data[0].temperatureHigh)
        }
    })    
}

module.exports = forecast;

