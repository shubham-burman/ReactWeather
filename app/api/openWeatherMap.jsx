import axios from 'axios';

const OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather';
const APP_ID = 'eeedfd266afc0b8c74eaebafffa85785';

var OpenWeatherMap =  {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location);

        let requestURL = `${OPEN_WEATHER_MAP}?q=${encodedLocation}&appid=${APP_ID}&units=metric`;

        return axios.get(requestURL).then(function (res) {
           return res.data.main.temp;
            /* if(res.data.cod  && reas.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }*/
        }, function (err) {
            throw new Error(err.response.data.message);
        })
    }
};

module.exports = OpenWeatherMap;
// http://api.openweathermap.org/data/2.5/weather&appid=eeedfd266afc0b8c74eaebafffa85785&units=metric
//?q=Delhi
//eeedfd266afc0b8c74eaebafffa85785