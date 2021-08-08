import React from "react";
import {Line} from "react-chartjs-2";
import {Loading} from "./Skeleton";

export const CountryLineChart = (props) => {
    if (!props.deaths) {
        return <Loading/>;
    }
    let dates = [];
    let allDeaths = [];
    Object.keys(props.deaths).forEach(key => {
        dates.push(key);
        allDeaths.push(props.deaths[key]);
    });
    return(
        <div className="chart-container">
            <Line
                data={{
                    labels: dates.map(date => new Date(date).toDateString()),
                    datasets: [{
                        data: allDeaths.map((data) => data),
                        label: 'Deaths',
                        borderColor: 'red',
                        borderWidth: 0.1,
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: false,
                        tension: 0.1,
                    },
                    ],
                }}
            />
        </div>
    )
};