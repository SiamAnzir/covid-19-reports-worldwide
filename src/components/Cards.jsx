import React, {lazy,Suspense, useEffect, useState} from "react";
import {Grid,Typography} from "@material-ui/core";
import {fetchGlobalData} from "../api";
import {Loading} from "./Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobe, faHandHoldingMedical, faSkull, faVirus} from "@fortawesome/free-solid-svg-icons";

const CardComponent = lazy(() => import('./CardComponent'));

const Cards = (props) => {
    const [data,setData] = useState({});

    useEffect(
        () => {
            const fetchResult = async () => {
                const result = await fetchGlobalData();
                setData(result);
            };
            fetchResult().then(response => response);
        },[]
    );
    if (!data) {
        return <Loading/>;
    }
    return(
        <div className="card-container">
            <Typography gutterBottom variant="h4" component="h2"><FontAwesomeIcon icon={faGlobe}/> Global Reports</Typography>
            <br/>
            <Suspense fallback={<Loading/>}>
                <Grid container spacing={3} justifyContent="center">
                    <CardComponent
                        className="infected"
                        cardTitle="Total Infected"
                        value={data.cases}
                        cardSubtitle="Number of active cases for COVID-19."
                        lastUpdate={data.updated}
                        cardBackground={props.themeState.cardBackground}
                        foreground={props.themeState.foreground}
                        icon={faVirus}
                    />
                    <CardComponent
                        className="recovered"
                        cardTitle="Total Recovered"
                        value={data.recovered}
                        cardSubtitle="Number of recoveries from COVID-19."
                        lastUpdate={data.updated}
                        cardBackground={props.themeState.cardBackground}
                        foreground={props.themeState.foreground}
                        icon={faHandHoldingMedical}
                    />
                    <CardComponent
                        className="deaths"
                        cardTitle="Total Deaths"
                        value={data.deaths}
                        cardSubtitle="Number of deaths caused by COVID-19."
                        lastUpdate={data.updated}
                        cardBackground={props.themeState.cardBackground}
                        foreground={props.themeState.foreground}
                        icon={faSkull}
                    />
                </Grid>
            </Suspense>
        </div>

    )
}

export default Cards;