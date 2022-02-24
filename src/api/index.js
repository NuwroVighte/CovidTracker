//API index
import axios from 'axios';

//covid19 stats api url
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        //const response = await axios.get(url);
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);

        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        console.log(error);
    }
}

// export const fetchDailyData = async () => {
//     try {
//         const {data} = await axios.get(`${url}/daily`);

//         //console.log(data);
//         const modifiedData = data.map((dailyData) => ({
//             confirmed: dailyData.confirmed.total,
//             deaths: dailyData.deaths.total,
//             data: dailyData.reportDate
//         }));

//         return modifiedData;
//     } catch (error) {
//         console.log(error);
//     }
// }

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
        return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch(error) {
        return error;
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        
        return countries.map( (country) => country.name);

    } catch(error) {
        console.log(error);
    }
}