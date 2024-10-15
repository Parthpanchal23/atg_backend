const axios = require('axios');
const HttpError = require('./http-error');
const API_KEY = 'ABNCEFDFVD';

async function getCordinateForAddress(address) {
//    const result =  await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${API_KEY}`);

//    const data = result.data;

//    if (!data || data.status === 'ZERO_RESULTS') {
//    next(new HttpError("Couldn't  find location for the specified addess",422));
//    }

//     const cordinates = data?.results.[0].geomaetry?.location;

//     return cordinates;

    return {
        lat:"40.726",
        lng:"22,212"
    }
    
}

module.exports = getCordinateForAddress;