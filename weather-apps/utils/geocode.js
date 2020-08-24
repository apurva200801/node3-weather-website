const request = require('request')
const geocode = ((adress,callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(adress)+ '.json?access_token=pk.eyJ1IjoiYXB1cnZhMDhzaW5naCIsImEiOiJja2NkaDRyZXIwZXE0MnBvYWNyaHFpM3F0In0.mN1HbiH5zhbMtsslghMILA'
    request({url:url, json:true},(error,response) => {
        if(error){
            callback('unable to connect to location services',undefined)
        }
        else if(response.body.error) {
            callback('unable to find location, try another search',undefined)
        }
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })    
})
module.exports = geocode