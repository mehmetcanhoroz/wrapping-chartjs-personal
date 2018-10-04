import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = (props) => (
    <div>

        <Bar
            width={500}
            height={250}
            data={props.data}
            options={props.options}

        />

    </div>
)

export default BarChart;