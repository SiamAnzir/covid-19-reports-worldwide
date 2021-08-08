import React, {lazy,Suspense, useEffect, useState} from "react";
import {Grid,Typography} from "@material-ui/core";
import {fetchGlobalData} from "../api";
import {Loading} from "./Skeleton";

const CardComponent = lazy(() => import('./CardComponent'));

const Cards = () => {
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
            <Typography gutterBottom variant="h4" component="h2">Global Reports</Typography>
            <br/>
            <Suspense fallback={<Loading/>}>
                <Grid container spacing={3} justifyContent="center">
                    <CardComponent
                        className="infected"
                        cardTitle="Total Infected"
                        value={data.cases}
                        cardSubtitle="Number of active cases for COVID-19."
                        lastUpdate={data.updated}
                    />
                    <CardComponent
                        className="recovered"
                        cardTitle="Total Recovered"
                        value={data.recovered}
                        cardSubtitle="Number of recoveries from COVID-19."
                        lastUpdate={data.updated}
                    />
                    <CardComponent
                        className="deaths"
                        cardTitle="Total Deaths"
                        value={data.deaths}
                        cardSubtitle="Number of deaths caused by COVID-19."
                        lastUpdate={data.updated}
                    />
                </Grid>
            </Suspense>
        </div>

    )
}

export default Cards;