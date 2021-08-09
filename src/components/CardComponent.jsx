import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardComponent = ({className, cardTitle,value,cardSubtitle,lastUpdate,cardBackground,foreground,icon}) => (
    <Grid item xs={12} md={3} component={Card} className="card" style={{ backgroundColor: cardBackground,
        color: foreground}}>
        <CardContent className={className}>
            <Typography >
                <FontAwesomeIcon icon={icon} style={{marginRight: '.5rem'}}/>
                {cardTitle}
            </Typography>
            <br/>
            <Typography variant="h5" component="h1">
                <CountUp start={0} end={value} duration={2.75} separator="," />
            </Typography>
            <Typography variant="body2" component="p">
                {cardSubtitle}
            </Typography>
            <br/>
            <Typography>
                {new Date(lastUpdate).toDateString()}
            </Typography>
        </CardContent>
    </Grid>
);

export default CardComponent;