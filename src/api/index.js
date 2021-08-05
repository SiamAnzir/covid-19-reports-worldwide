import axios from "axios";

const url =  'https://covid19.mathdro.id/api';

export const fetchGlobalData = async () => {
    try {
        const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(url)

        return { confirmed, recovered, deaths, lastUpdate };
        //console.log(data);
    }
    catch (error){
        return error
    }
};

export const fetchGraphData = async () => {
    try {
        const {data} = await axios.get('https://covid19.mathdro.id/api/daily')
        return data.map(({confirmed, deaths, reportDate: date}) => ({
            confirmed: confirmed.total,
            deaths: deaths.total,
            date
        }));
    } catch (error) {
        return error
    }
};

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        return {data};
    }
    catch (error){
        return error
    }
}