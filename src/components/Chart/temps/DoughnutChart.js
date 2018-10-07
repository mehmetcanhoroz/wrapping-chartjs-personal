import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const DoughnutChart = (props) => {
    const optionsLocal = {
        maintainAspectRatio: false,
        responsive: false,
        legend: {
            display: true,
            reverse: false,
            // a callback that will handle
            onClick: function (e, legendItem) {
                return;
                /*var index = legendItem.datasetIndex;
                var ci = this.chart;
                var meta = ci.getDatasetMeta(index);

                // See controller.isDatasetVisible comment
                meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

                // We hid a dataset ... rerender the chart
                ci.update();*/
            },
        }
    };
    const options = props.options ? props.options : optionsLocal;

    return <div>
        <Doughnut data={props.data}
                  width={props.width ? props.width : 300}
                  height={props.height ? props.height: 300}
                  options={options}/>
    </div>
};

export default DoughnutChart;