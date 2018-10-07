import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarMixChart = (props) => {

    const optionsLocal = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        tooltips: {
            mode: 'label'
        },
        elements: {
            line: {
                fill: false
            }
        },
        scales: {

            xAxes: [
                {
                    display: true,
                    gridLines: {
                        display: false
                    },

                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                }
            ],
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    }, ticks: {
                        beginAtZero: true
                    }
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    }, ticks: {
                        beginAtZero: true
                    }
                }
            ]
        },
        legend: {
            display: true,
            reverse: false,
            // a callback that will handle
            onClick: function (e, legendItem) {
                return;
            },
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

export default BarMixChart;