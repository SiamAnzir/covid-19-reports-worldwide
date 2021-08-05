// noinspection JSUnresolvedVariable

import React,{useState,useEffect} from "react";
import {fetchCountriesData,fetchCountryInfo} from "../api";
import {FormControl, NativeSelect, Container, Typography, Grid} from "@material-ui/core";
import CardComponent from "./CardComponent";

export const SelectCountry = () => {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({});

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setCountries(await fetchCountriesData());
        };

        fetchCountriesAPI().then(response => response);
    }, []);
    console.log(country);
    const handleCountryChange = async (country) => {
        const data = await fetchCountryInfo(country);

        setCountry(data);
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
                )
            }
        </Container>
    )
}