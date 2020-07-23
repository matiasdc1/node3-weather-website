const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c473e42d94b7591d868705aae4962f50&query=' + latitude + ',' + longitude +'&units=f'
    request ({url, json: true}, (error, {body}) =>{
        if (error){
            callback('Unable to connect to Forecast Service', undefined)
        } else if (body.error) {  
            callback('Unable to find location. Try another one.', undefined)
        } else {
            console.log(body)
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feels_like: body.current.feelslike,
                humidity: body.current.humidity
            })
        }
    })
}

module.exports = forecast