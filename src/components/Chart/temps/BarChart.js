import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = (props) => {

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
        <Bar
            width={props.width ? props.width : 500}
            height={props.height ? props.height : 250}
            data={props.data}
            options={options}
        />
    </div>
};

export default BarChart;