import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import {fetchDailyData} from "../api";
import { Container, Typography} from "@material-ui/core";
import {Loading} from "./Skeleton";

export const LineChart = () => {
    const [dailyData,setDailyData] = useState([]);
    useEffect(
        () => {
            const fetchResult = async () => {
                const result = await fetchDailyData();
                const {
                    data: {
                        cases: dayBeforeCases,
                        deaths: dayBeforeDeaths,
                        recovered: dayBeforeRecovered,
                    },
                } = result;
                setDailyData([dayBeforeCases, dayBeforeDeaths, dayBeforeRecovered]);
            };
            fetchResult().then(response => response);
        },[]
    );
    if (!dailyData[0]) {
        return <Loading/>;
    }
    let dates = [];
    let allCases = [];
    let allDeaths = [];
    let allRecovered = [];
    Object.keys(dailyData[0]).forEach(key => {
        dates.push(key);
        allCases.push(dailyData[0][key]);
    });
    Object.keys(dailyData[1]).forEach(key => {
        allDeaths.push(dailyData[1][key]);
    });
    Object.keys(dailyData[2]).forEach(key => {
        allRecovered.push(dailyData[2][key]);
    });
    const infectedLineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dates.map(date => new Date(date).toDateString()),
                    datasets: [{
                        data: allCases.map((data) => data),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: false,
                        tension: 0.1,
                    },{
                        data: allRecovered.map((data) => data),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: false,
                        tension: 0.1,
                    },
                    ],
                }}
            />
        ) : null
    );
    const deathLineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dates.map(date => new Date(date).toDateString()),
                    datasets: [{
                        data: allDeaths.map((data) => data),
                        label: 'Deaths',
                        borderColor: 'red',
                        borderWidth: 0.1,
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );
    return(
        <Container maxWidth="md">
            <div className="card-container">
                <Typography gutterBottom variant="h5" component="h3">
                    Total Infected & Recovered
                </Typography>
                {infectedLineChart}
            </div>
            <div className="card-container">
                <Typography gutterBottom variant="h5" component="h3">
                    Total Deaths
                </Typography>
                {deathLineChart}
            </div>
        </Container>
    )
};
