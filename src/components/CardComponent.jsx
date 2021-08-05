import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import CountUp from "react-countup";

const CardComponent = ({className, cardTitle,value,cardSubtitle,lastUpdate}) => (
    <Grid item xs={12} md={3} component={Card} className="card" >
        <CardContent className={className}>
            <Typography color="textSecondary">
                {cardTitle}
            </Typography>
            <Typography variant="h5" component="h2">
                <CountUp start={0} end={value} duration={2.75} separator="," />
            </Typography>
            <Typography variant="body2" component="p">
                {cardSubtitle}
            </Typography>
            <br/>
            <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
            </Typography>
        </CardContent>
    </Grid>
);

export default CardComponent;