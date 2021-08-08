// noinspection JSUnresolvedVariable

import React,{useState,useEffect} from "react";
import {fetchCountriesData,fetchCountryInfo,fetchCountryDailyData} from "../api";
import {FormControl, NativeSelect, Container, Typography, Grid} from "@material-ui/core";
import CardComponent from "./CardComponent";
import {Pie} from "react-chartjs-2";
import {CountryLineChart} from "./CountryChart";

export const SelectCountry = () => {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({});
    const [dailyData,setDailyData] = useState({});

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setCountries(await fetchCountriesData());
        };

        fetchCountriesAPI().then(response => response);
    }, []);
    const handleCountryChange = async (country) => {
        const data = await fetchCountryInfo(country);
        const dailyInfo = await fetchCountryDailyData(country);
        console.log(country);
        setCountry(data);
        setDailyData(dailyInfo.data.timeline);
    }
    return(
        <Container className="selectCountry">
            <br/>
            <Typography gutterBottom variant="h5" component="h2">Country Base Reports</Typography>
            <FormControl className="formControl">
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Select Country</option>
                    {countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
            {
                (!country.data) ? (
                    <div>
                        <Typography>No Country Selected</Typography>
                    </div>
                ) : (
                    <Container>
                        <div className="card-container">
                            <Typography gutterBottom variant="h5" component="h3">Showing Results for {country.data.country} <img className="flagLogo" src={country.data.countryInfo.flag} alt="countryFlag"/> </Typography>
                            <br/>
                            <Grid container spacing={3} justifyContent="center">
                                <CardComponent
                                    className="infected"
                                    cardTitle="Last 24 hours Infected"
                                    value={country.data.todayCases}
                                    cardSubtitle="Active cases for COVID-19."
                                    lastUpdate={country.data.updated}
                                />
                                <CardComponent
                                    className="recovered"
                                    cardTitle="Last 24 hours Recovered"
                                    value={country.data.todayRecovered}
                                    cardSubtitle="Recoveries from COVID-19."
                                    lastUpdate={country.data.updated}
                                />
                                <CardComponent
                                    className="deaths"
                                    cardTitle="Last 24 hours Deaths"
                                    value={country.data.todayDeaths}
                                    cardSubtitle="Deaths caused by COVID-19."
                                    lastUpdate={country.data.updated}
                                />
                            </Grid>
                            <br/>
                            <br/>
                            <Grid container spacing={3} justifyContent="center">
                                <CardComponent
                                    className="infected"
                                    cardTitle="Total Infected"
                                    value={country.data.cases}
                                    cardSubtitle="Active cases for COVID-19."
                                    lastUpdate={country.data.updated}
                                />
                                <CardComponent
                                    className="recovered"
                                    cardTitle="Total Recovered"
                                    value={country.data.recovered}
                                    cardSubtitle="Recoveries from COVID-19."
                                    lastUpdate={country.data.updated}
                                />
                                <CardComponent
                                    className="deaths"
                                    cardTitle="Total Deaths"
                                    value={country.data.deaths}
                                    cardSubtitle="Deaths caused by COVID-19."
                                    lastUpdate={country.data.updated}
                                />
                            </Grid>
                        </div>
                        <div>
                            <Grid container spacing={3} justifyContent="center">
                                <Grid item xs={12} md={6} className="chart-container" >
                                    <CountryLineChart deaths={dailyData.deaths}/>
                                </Grid>
                                <Grid item xs={12} md={3} className="pie-chart-container" >
                                    <Pie
                                        data = {{
                                            labels:['Infected', 'Recovered', 'Deaths'],
                                            datasets: [{
                                                label: 'Covid-19 Reports',
                                                data: [country.data.cases,country.data.recovered, country.data.deaths],
                                                backgroundColor: [
                                                    'rgba(0,0,255,0.5)',
                                                    'rgba(0, 255, 0,0.5)',
                                                    'rgba(255,0, 0,0.5)'
                                                ],
                                                hoverOffset: 4
                                            }]
                                        }}
                                    />
                                    <br/>
                                    <Typography>Total Infected,Recovered & Deaths</Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                )
            }
        </Container>
    )
}