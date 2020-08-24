const request = require('request')
const geocode= require('../weather-apps/utils/geocode')
const forecast = require('../weather-apps/utils/forecast')

const address = process.argv[2]


//console.log(process.argv)
geocode(address, (error, data) => {
    if(error){
        return console.log(error)
    }
    forecast(data.longitude,data.latitude,(error,forecastdata) => {
        if (error){
        return console.log(error)
        }
        console.log(data.location)
        console.log(forecastdata)
})
})

