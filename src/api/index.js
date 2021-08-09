import axios from "axios";

const url =  'https://disease.sh/v3/covid-19/all';

export const fetchGlobalData = async () => {
    try {
        const {data: { cases , recovered, deaths, updated }} = await axios.get(url)

        return { cases , recovered, deaths, updated };
    }
    catch (error){
        return error;
    }
};

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        return {data};
    }
    catch (error){
        return error;
    }
}
export const fetchCountriesData = async () => {
    try {
        const { data } = await axios.get(`https://disease.sh/v3/covid-19/countries/`);

        return data.map((country) => country.country);
    } catch (error) {
        return error;
    }
};

export const fetchCountryInfo = async (country) => {
    try {
        const { data } = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);

        return {data};
    } catch (error) {
        return error;
    }
}
export const fetchCountryDailyData = async (country) => {
    try {
        const {data} = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`);

        return {data};
    }
    catch (error){
        return error;
    }
}