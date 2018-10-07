import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import DoughnutChart from "./temps/DoughnutChart";
import BarMixChart from "./temps/BarMixChart";
import LineChart from "./temps/LineChart";
import BarChart from "./temps/BarChart";
import {fetchCharts} from "../../actions/charts";


const dataDoughnut = {
    labels: [
        'Verified Users',
        'UnVerifies Users'
    ],
    datasets: [{
        data: [300, 50],
        backgroundColor: [
            '#64dd17',
            '#ff484b'
        ],
        hoverBackgroundColor: [
            '#1faa00',
            '#b91400'
        ]
    }]
};

const dataBarMix = {
// labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Estimated Sales',
        type: 'line',
        data: [100, 100, 100, 125, 150, 150, 200],
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
    }, {
        label: 'Sales',
        type: 'bar',
        data: [64, 51, 88, 150, 90, 225, 175],
        fill: false,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
    }]
};

const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [64, 51, 88, 150, 90, 225, 175],
        }
    ]
};

const dataBar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

class Charts extends Component {
    static propTypes = {
        chartData: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.fetchCharts();
    }


    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Chart sayfasındasın</h3>

                <DoughnutChart data={dataDoughnut}/>
                <hr/>
                <BarMixChart data={dataBarMix}/>
                <hr/>
                <LineChart data={dataLine}/>
                <hr/>
                <BarChart data={dataBar}/>
            </div>
        );
    }
}

/*<DoughnutChart data={dataDoughnut} options={optionsDoughnut}/>*/
const mapStateToProps = (state) => {
    return {
        chartData: state.charts.chartData
    }
};

const mapDispatchToProps = {
    fetchCharts
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts);