import React from "react";
import {Grid,Typography} from "@material-ui/core";
import CardComponent from "./CardComponent";

export const Cards = (props) => {
    if (!props.data.confirmed) {
        return 'Loading...';
    }
    return(
        <div className="card-container">
            <Typography gutterBottom variant="h4" component="h2">Global Report</Typography>
            <br/>
            <Grid container spacing={3} justifyContent="center">
                <CardComponent
                    className="infected"
                    cardTitle="Total Infected"
                    value={props.data.confirmed.value}
                    cardSubtitle="Number of active cases for COVID-19."
                    lastUpdate={props.data.lastUpdate}
                />
                <CardComponent
                    className="recovered"
                    cardTitle="Total Recovered"
                    value={props.data.recovered.value}
                    cardSubtitle="Number of recoveries from COVID-19."
                    lastUpdate={props.data.lastUpdate}
                />
                <CardComponent
                    className="deaths"
                    cardTitle="Total Deaths"
                    value={props.data.deaths.value}
                    cardSubtitle="Number of deaths caused by COVID-19."
                    lastUpdate={props.data.lastUpdate}
                />
            </Grid>
        </div>

    )
}