import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = (props) => {

    /*
    max: 5,
    min: 0,
    stepSize: 0.5
    */

    const optionsLocal = {
        maintainAspectRatio: false,
        responsive: false,
        legend: {
            display: true,
            reverse: false,
            // a callback that will handle
            onClick: function (e, legendItem) {
                return;
            },
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    const options = props.options ? props.options : optionsLocal;

    return <div>
        <Line
            width={props.width ? props.width : 500}
            height={props.height ? props.height : 250}
            data={props.data}
            options={options}
        />
    </div>
}

export default LineChart;