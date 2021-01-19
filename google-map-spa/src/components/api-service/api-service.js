import axios from "axios";

 const apiWeather = async (...cords) => {
    let response = null

    const {lat , lng} = cords[0]

     console.log(process.env.API_WEATHER_KEY)
    try{
        response  = await axios({
            method: "get",
            url:`/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.REACT_APP_API_WEATHER_KEY}`,
            baseURL: "http://api.openweathermap.org"
        })
    }catch (e) {
        console.log(e)
    }
    const { data } = response;
    const startForecast = 0;
    const endForeCast = 24;

    return data.list.slice(startForecast, endForeCast)
}
 const apiDistrict = async (...cords) => {
    let response = null;
    const {lat , lng} = cords[0];

    try{
        response  = await axios({
            method: "get",
            url:`/v4/geocoding/reverse?lat=${lat}&lng=${lng}`,
            baseURL: "http://api.traveltimeapp.com",
            headers: {
                "Accept-Language": "en-US",
                "X-Api-Key": "9b86b1e4bd7b7b85e96eb779633d67d4",
                "X-Application-Id": "97e50e48"
            }
        })
    }catch (e) {
        console.log(e)
    }
    const { data } = response;

    return data
}

export {
     apiDistrict,
    apiWeather
}