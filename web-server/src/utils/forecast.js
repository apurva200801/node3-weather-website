
// const request = require('request')
// const forecast = (( latitude,longitude,callback) => {
//     const url = 'https://api.darksky.net/forecast/57b80532419d0af7845e484581dc9414/'+ encodeURIComponent(latitude)+','+encodeURIComponent(longitude)

//     request({url:url, json:true},(error,response)=>{
//         if(error){
//             callback('unable to connect to weather services',undefined)
//         }
//         else if(response.body.error) {
//             callback('unable to find location, try another search',undefined)
//         }
//         else{
//             callback(undefined, response.body.daily[0].summary+ ' It is ' + response.body.currently[0].temprature+ ' degrees outside. The chance of raining are '+ response.body.currently[0].precipProbability + ' % today.')
//         }
    
        
//     })
// })

// module.exports = forecast
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/57b80532419d0af7845e484581dc9414/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + ' chance of rain.')
        }
    })
}

module.exports = forecast