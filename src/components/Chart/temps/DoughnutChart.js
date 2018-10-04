import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const DoughnutChart = (props) => {
    return (
        <div>

            <Doughnut data={props.data}/>

        </div>
    );
}

export default DoughnutChart;