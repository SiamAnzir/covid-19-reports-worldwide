// noinspection JSUnresolvedVariable

import React, {useState, useEffect, lazy,Suspense} from "react";
import {fetchCountriesData,fetchCountryInfo,fetchCountryDailyData} from "../api";
import {FormControl, NativeSelect, Container, Typography, Grid} from "@material-ui/core";
import {Pie} from "react-chartjs-2";
import {CountryLineChart} from "./CountryChart";
import {Loading} from "./Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBan,
    faClinicMedical, faFlag,
    faHandHoldingMedical, faSearch,
    faSkull,
    faSkullCrossbones,
    faVirus, faViruses
} from "@fortawesome/free-solid-svg-icons";

const CardComponent = lazy(() => import('./CardComponent'));

export const SelectCountry = (props) => {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({});
    const [dailyData,setDailyData] = useState({});
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setCountries(await fetchCountriesData());
        };

        fetchCountriesAPI().then(response => response);
    }, []);
    const handleCountryChange = async (country) => {
        setLoading(true);
        const data = await fetchCountryInfo(country);
        if(data){
            setCountry(data);
            setLoading(false);
        }
        const dailyInfo = await fetchCountryDailyData(country);
        if(dailyInfo.data){
            setDailyData(dailyInfo.data.timeline);
            setError(false);
            setLoading(false);
        }else {
            setError(true);
            setLoading(false);
        }
    }
    if(loading){
        return <Loading/>;
    }
    return(
        <Container className="selectCountry">
            <br/>
            <Typography gutterBottom variant="h5" component="h2"><FontAwesomeIcon icon={faFlag} /> Country Base Reports <FontAwesomeIcon icon={faSearch}/> </Typography>
            <FormControl className="formControl" style={{ backgroundColor: props.themeState.cardBackground,
                color: props.themeState.foreground}}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} style={{ backgroundColor: props.themeState.cardBackground,
                    color: props.themeState.foreground}}>
                    <option value="" style={{ backgroundColor: props.themeState.cardBackground,
                        color: props.themeState.foreground}}> Select Country</option>
                    {countries.map((country, index) => <option key={index} value={country} style={{ backgroundColor: props.themeState.cardBackground,
                        color: props.themeState.foreground}}>{country}</option>)}
                </NativeSelect>
            </FormControl>
            {
                (!country.data) ? (
                    <div>
                        <Typography><FontAwesomeIcon icon={faBan}/> No Country Selected</Typography>
                    </div>
                ) : (
                    <Container>
                        <div className="card-container">
                            <Suspense fallback={<Loading/>}>
                                <Typography gutterBottom variant="h5" component="h3">Showing Results for {country.data.country} <img className="flagLogo" src={country.data.countryInfo.flag} alt="countryFlag"/> </Typography>
                                <br/>
                                <Grid container spacing={3} justifyContent="center">
                                    <CardComponent
                                        className="infected"
                                        cardTitle="Last 24 hours Infected"
                                        value={country.data.todayCases}
                                        cardSubtitle="Active cases for COVID-19."
                                        lastUpdate={country.data.updated}
                                        cardBackground={props.themeState.cardBackground}
                                        foreground={props.themeState.foreground}
                                        icon={faViruses}
                                    />
                                    <CardComponent
                                        className="recovered"
                                        cardTitle="Last 24 hours Recovered"
                                        value={country.data.todayRecovered}
                                        cardSubtitle="Recoveries from COVID-19."
                                        lastUpdate={country.data.updated}
                                        cardBackground={props.themeState.cardBackground}
                                        foreground={props.themeState.foreground}
                                        icon={faClinicMedical}
                                    />
                                    <CardComponent
                                        className="deaths"
                                        cardTitle="Last 24 hours Deaths"
                                        value={country.data.todayDeaths}
                                        cardSubtitle="Deaths caused by COVID-19."
                                        lastUpdate={country.data.updated}
                                        cardBackground={props.themeState.cardBackground}
                                        foreground={props.themeState.foreground}
                                        icon={faSkullCrossbones}
                                    />
                                </Grid>
                            </Suspense>
                            <br/>
                            <br/>
                            <Suspense fallback={<Loading/>}>
                                <Grid container spacing={3} justifyContent="center">
                                    <CardComponent
                                        className="infected"
                                        cardTitle="Total Infected"
                                        value={country.data.cases}
                                        cardSubtitle="Active cases for COVID-19."
                                        lastUpdate={country.data.updated}
                                        cardBackground={props.themeState.cardBackground}
                                        foreground={props.themeState.foreground}
                                        icon={faVirus}
                                    />
                                    <CardComponent
                                        className="recovered"
                                        cardTitle="Total Recovered"
                                        value={country.data.recovered}
                                        cardSubtitle="Recoveries from COVID-19."
                                        lastUpdate={country.data.updated}
                                        cardBackground={props.themeState.cardBackground}
                                        foreground={props.themeState.foreground}
                                        icon={faHandHoldingMedical}
                                    />
                                    <CardComponent
                                        className="deaths"
                                        cardTitle="Total Deaths"
                                        value={country.data.deaths}
                                        cardSubtitle="Deaths caused by COVID-19."
                                        lastUpdate={country.data.updated}
                                        cardBackground={props.themeState.cardBackground}
                                        foreground={props.themeState.foreground}
                                        icon={faSkull}
                                    />
                                </Grid>
                            </Suspense>
                        </div>
                        <div>
                            <Grid container spacing={3} justifyContent="center">
                                <Grid item xs={12} md={6} className="chart-container" style={{ backgroundColor: props.themeState.cardBackground,
                                    color: props.themeState.foreground}}>
                                    {
                                        (error) ? (
                                            <Typography>Country not found or doesn't have any historical data</Typography>
                                        ) : (
                                            <CountryLineChart deaths={dailyData.deaths}/>
                                        )
                                    }
                                </Grid>
                                <Grid item xs={12} md={3} className="pie-chart-container" style={{ backgroundColor: props.themeState.cardBackground,
                                    color: props.themeState.foreground}}>
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
};
