//API index
import axios from 'axios';

//covid19 stats api url
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        //const response = await axios.get(url);
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const data = await axios.get(`${url}/daily`);

        console.log(data);

    } catch (error) {

    }
}